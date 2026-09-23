/**
 * CHEERYS Google Sheets Intake Webhook (Google Apps Script)
 *
 * Spreadsheet Title: CHEERYS Business Intake & Website Forms
 * Spreadsheet ID: 1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
 *
 * Verified Tabs in Workbook:
 * - Overview
 * - Master Leads
 * - cheery_fic
 * - cheerys_art
 * - anim_daddy
 * - cheerys_tees
 * - cheerys_bakes
 * - Form Field Map
 * - Integration Notes
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Empty POST body" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var payload = JSON.parse(e.postData.contents);

    // Optional Shared Secret Authentication
    var SCRIPT_SECRET = PropertiesService.getScriptProperties().getProperty("SHARED_SECRET");
    if (SCRIPT_SECRET && payload.sharedSecret && payload.sharedSecret !== SCRIPT_SECRET) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Unauthorized: Invalid shared secret" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var SPREADSHEET_ID = payload.sheetId || "1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U";
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    if (!ss) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Could not open spreadsheet with ID: " + SPREADSHEET_ID })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var timestamp = payload.submittedAt || new Date().toISOString();
    var submissionId = payload.submissionId || ("CW-" + Date.now());
    var formType = payload.formType || "general";
    var lead = payload.masterLead || {};
    var fields = payload.ventureFields || {};

    // -------------------------------------------------------------
    // 1. APPEND RECORD TO "Master Leads" USING ROW 1 HEADERS
    // -------------------------------------------------------------
    var masterSheet = ss.getSheetByName("Master Leads");
    if (!masterSheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Missing required tab: 'Master Leads'" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var masterRecord = {
      "Submission ID": submissionId,
      "Submitted At": timestamp,
      "Venture": lead.venture || formType,
      "Inquiry Type": lead.inquiryType || lead.summary || formType,
      "Full Name": lead.name || "",
      "WhatsApp": lead.whatsapp || "",
      "Email": lead.email || "",
      "City": lead.city || "",
      "Status": "New",
      "Priority": "Normal",
      "Preferred Contact": "WhatsApp",
      "Source Page": lead.sourcePath || "/",
      "Summary": lead.summary || "",
      "Consent to Contact": lead.consent ? "Yes" : "Yes",
      "Assigned To": "",
      "Follow-up Date": "",
      "Last Contacted": "",
      "Internal Notes": "Submitted via Cheerys World website"
    };

    var masterAppendResult = appendRecordByHeaders(masterSheet, masterRecord);
    if (!masterAppendResult.success) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Failed to append to Master Leads: " + masterAppendResult.error })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // -------------------------------------------------------------
    // 2. APPEND RECORD TO VENTURE SHEET USING VENTURE-SPECIFIC MAPPING
    // -------------------------------------------------------------
    var ventureTabName = getVentureSheetName(formType);
    var ventureSheet = ss.getSheetByName(ventureTabName);
    if (!ventureSheet) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Missing required venture tab: '" + ventureTabName + "'",
          masterRow: masterAppendResult.row
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var ventureRecord = buildVentureRecord(formType, submissionId, timestamp, lead, fields);
    var ventureAppendResult = appendRecordByHeaders(ventureSheet, ventureRecord);

    if (!ventureAppendResult.success) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Failed to append to venture tab '" + ventureTabName + "': " + ventureAppendResult.error,
          masterRow: masterAppendResult.row
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        submissionId: submissionId,
        masterRow: masterAppendResult.row,
        ventureRow: ventureAppendResult.row,
        ventureTab: ventureTabName,
        message: "Successfully recorded into Master Leads (row " + masterAppendResult.row + ") and " + ventureTabName + " (row " + ventureAppendResult.row + ")"
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Universal Header-Driven Row Appender
 * 1. Reads row 1 of the target sheet
 * 2. Normalizes header names for fuzzy/whitespace-tolerant matching
 * 3. Builds a row array matching the exact header column order
 * 4. Appends and returns the inserted row number
 */
function appendRecordByHeaders(sheet, record) {
  try {
    var lastColumn = sheet.getLastColumn();
    if (lastColumn < 1) {
      return { success: false, error: "Sheet has no header row." };
    }

    var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    var rowData = [];

    // Create lookup index from normalized header -> key in record
    var recordNormalized = {};
    for (var k in record) {
      if (record.hasOwnProperty(k)) {
        recordNormalized[normalizeHeader(k)] = record[k];
      }
    }

    for (var col = 0; col < headers.length; col++) {
      var headerName = String(headers[col] || "").trim();
      var normalized = normalizeHeader(headerName);
      var val = recordNormalized.hasOwnProperty(normalized) ? recordNormalized[normalized] : "";
      rowData.push(val !== undefined && val !== null ? val : "");
    }

    sheet.appendRow(rowData);
    var newRowNumber = sheet.getLastRow();
    return { success: true, row: newRowNumber };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

function normalizeHeader(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function getVentureSheetName(formType) {
  switch (formType) {
    case "cheery-fic":
      return "cheery_fic";
    case "cheerys-art":
      return "cheerys_art";
    case "anim-daddy":
      return "anim_daddy";
    case "cheerys-tees":
      return "cheerys_tees";
    case "cheerys-bakes":
      return "cheerys_bakes";
    default:
      return "Master Leads";
  }
}

/**
 * Deterministic Venture Record Builder
 * Maps submitted form field IDs to the exact headers present in each venture sheet.
 */
function buildVentureRecord(formType, submissionId, timestamp, lead, fields) {
  var base = {
    "Submission ID": submissionId,
    "Submitted At": timestamp,
    "Status": "New"
  };

  switch (formType) {
    case "cheery_fic":
    case "cheery-fic":
      return Object.assign(base, {
        "Full Name": fields.fullName || lead.name || "",
        "WhatsApp": fields.whatsapp || lead.whatsapp || "",
        "Email": fields.email || lead.email || "",
        "City": fields.city || lead.city || "",
        "Commission Type": fields.commissionType || "",
        "Number of People": fields.numberOfPeople || "",
        "Preferred Style": fields.preferredStyle || "",
        "Occasion": fields.occasion || "",
        "Reference Photo Link": fields.referencePhotoLink || "",
        "Background / Props": fields.backgroundProps || "",
        "Needed-by Date": fields.deadline || "",
        "Delivery Format": fields.deliveryFormat || "",
        "Budget Range": fields.budgetRange || "",
        "Additional Notes": fields.notes || "",
        "Consent to Contact": fields.consent ? "Yes" : "Yes"
      });

    case "cheerys_art":
    case "cheerys-art":
      return Object.assign(base, {
        "Full Name": fields.fullName || lead.name || "",
        "WhatsApp": fields.whatsapp || lead.whatsapp || "",
        "Email": fields.email || lead.email || "",
        "City & State": fields.city || lead.city || "",
        "Artwork Medium": fields.artMedium || "",
        "Desired Dimensions": fields.dimensions || "",
        "Destination Space": fields.roomSpace || "",
        "Preferred Color Palette": fields.colourPreferences || "",
        "Room / Reference Link": fields.roomReferenceLink || "",
        "Personal Story / Theme": fields.personalStory || "",
        "Target Completion Date": fields.deadline || "",
        "Budget Range": fields.budgetRange || "",
        "Delivery / Packaging Preference": fields.deliveryNotes || "",
        "Consent to Contact": fields.consent ? "Yes" : "Yes"
      });

    case "anim_daddy":
    case "anim-daddy":
      return Object.assign(base, {
        "Student Name": fields.studentName || lead.name || "",
        "Student Age Group": fields.ageGroup || "",
        "Parent / Guardian Name": fields.parentGuardian || "",
        "WhatsApp": fields.whatsapp || lead.whatsapp || "",
        "Email": fields.email || lead.email || "",
        "City / Country": fields.location || lead.city || "",
        "Learning Mode": fields.mentoringMode || "",
        "Current Skill Level": fields.currentLevel || "",
        "Interested Track / Module": fields.trackInterest || "",
        "Primary Goal": fields.learningGoal || "",
        "Availability": fields.availability || "",
        "Device / Software Access": fields.deviceAccess || "",
        "Portfolio / Work Link": fields.portfolioLink || "",
        "Preferred Start": fields.desiredStart || "",
        "Additional Notes": fields.notes || "",
        "Consent to Contact": fields.consent ? "Yes" : "Yes"
      });

    case "cheerys_tees":
    case "cheerys-tees":
      return Object.assign(base, {
        "Name / Organization": fields.fullName || lead.name || "",
        "WhatsApp": fields.whatsapp || lead.whatsapp || "",
        "Email": fields.email || lead.email || "",
        "Delivery City & Pin": fields.city || lead.city || "",
        "Order Type": fields.orderType || "",
        "Garment Type": fields.garmentType || "",
        "Estimated Quantity": fields.quantity || "",
        "Preferred Colors": fields.colors || "",
        "Sizes Breakdown": fields.sizesBreakdown || "",
        "Design Theme / Message": fields.designTheme || "",
        "Artwork / Logo Link": fields.logoArtworkLink || "",
        "Target Delivery Date": fields.deadline || "",
        "Target Budget": fields.budget || "",
        "Consent to Contact": fields.consent ? "Yes" : "Yes"
      });

    case "cheerys_bakes":
    case "cheerys-bakes":
      return Object.assign(base, {
        "Full Name": fields.fullName || lead.name || "",
        "WhatsApp": fields.whatsapp || lead.whatsapp || "",
        "Email": fields.email || lead.email || "",
        "Delivery Area / Locality": fields.city || lead.city || "",
        "Menu Item / Specialty": fields.category || "",
        "Quantity / Batch Size": fields.quantity || "",
        "Dietary Preference": fields.dietaryPreference || "",
        "ALLERGIES / Avoid": fields.allergies || "",
        "Flavor Preferences": fields.flavourNotes || "",
        "Needed-by Date & Time": fields.deadline || "",
        "Pickup or Delivery": fields.pickupDelivery || "",
        "Full Delivery Address": fields.deliveryAddress || "",
        "Consent to Contact": fields.consent ? "Yes" : "Yes"
      });

    default:
      return Object.assign(base, fields);
  }
}
