/**
 * CHEERYS Google Sheets Intake Webhook
 * Spreadsheet: CHEERYS Business Intake & Website Forms
 * Spreadsheet ID: 1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
 */

var DEFAULT_SPREADSHEET_ID = "1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U";

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return jsonResponse({
    success: true,
    service: "CHEERYS Google Sheets Intake Webhook"
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: "Empty POST body" });
    }

    var payload = JSON.parse(e.postData.contents);

    var scriptSecret = PropertiesService
      .getScriptProperties()
      .getProperty("SHARED_SECRET");

    if (scriptSecret && payload.sharedSecret !== scriptSecret) {
      return jsonResponse({
        success: false,
        error: "Unauthorized: invalid shared secret"
      });
    }

    var spreadsheetId = payload.sheetId || DEFAULT_SPREADSHEET_ID;
    var ss = SpreadsheetApp.openById(spreadsheetId);

    var submissionId = payload.submissionId || ("CW-" + Date.now());
    var submittedAt = payload.submittedAt || new Date().toISOString();
    var formType = String(payload.formType || "");
    var lead = payload.masterLead || {};
    var fields = payload.ventureFields || {};

    var ventureTab = getVentureSheetName(formType);
    if (!ventureTab) {
      return jsonResponse({ success: false, error: "Unknown formType: " + formType });
    }

    var masterSheet = ss.getSheetByName("Master Leads");
    var ventureSheet = ss.getSheetByName(ventureTab);

    if (!masterSheet) {
      return jsonResponse({ success: false, error: "Missing required sheet: Master Leads" });
    }

    if (!ventureSheet) {
      return jsonResponse({ success: false, error: "Missing required sheet: " + ventureTab });
    }

    var masterRecord = buildMasterRecord(
      submissionId,
      submittedAt,
      formType,
      lead,
      fields
    );

    var ventureRecord = buildVentureRecord(
      formType,
      submissionId,
      submittedAt,
      lead,
      fields
    );

    var masterValidation = validateRecordHeaders(masterSheet, masterRecord);
    if (!masterValidation.success) {
      return jsonResponse({
        success: false,
        error: "Master Leads header mismatch: " + masterValidation.error
      });
    }

    var ventureValidation = validateRecordHeaders(ventureSheet, ventureRecord);
    if (!ventureValidation.success) {
      return jsonResponse({
        success: false,
        error: ventureTab + " header mismatch: " + ventureValidation.error
      });
    }

    var masterResult = appendRecordByHeaders(masterSheet, masterRecord);
    if (!masterResult.success) {
      return jsonResponse({
        success: false,
        error: "Failed writing Master Leads: " + masterResult.error
      });
    }

    var ventureResult = appendRecordByHeaders(ventureSheet, ventureRecord);
    if (!ventureResult.success) {
      try {
        if (masterResult.row === masterSheet.getLastRow()) {
          masterSheet.deleteRow(masterResult.row);
        }
      } catch (rollbackErr) {}

      return jsonResponse({
        success: false,
        error: "Failed writing " + ventureTab + ": " + ventureResult.error
      });
    }

    return jsonResponse({
      success: true,
      submissionId: submissionId,
      masterRow: masterResult.row,
      ventureRow: ventureResult.row,
      ventureTab: ventureTab
    });
  } catch (err) {
    return jsonResponse({
      success: false,
      error: String(err)
    });
  }
}

function buildMasterRecord(submissionId, submittedAt, formType, lead, fields) {
  return {
    "Submission ID": submissionId,
    "Submitted At": submittedAt,
    "Venture": formType,
    "Inquiry Type": getInquiryType(formType, fields),
    "Full Name": lead.name || fields.fullName || fields.studentName || "",
    "WhatsApp": lead.whatsapp || fields.whatsapp || "",
    "Email": lead.email || fields.email || "",
    "City": lead.city || fields.city || fields.location || "",
    "Status": "New",
    "Priority": "Normal",
    "Preferred Contact": "WhatsApp",
    "Source Page": lead.sourcePath || "/",
    "Summary": lead.summary || buildSummary(formType, fields),
    "Consent to Contact": fields.consent ? "Yes" : "No",
    "Assigned To": "",
    "Follow-up Date": "",
    "Last Contacted": "",
    "Internal Notes": "Submitted via CHEERYS World website"
  };
}

function buildVentureRecord(formType, submissionId, submittedAt, lead, fields) {
  var base = {
    "Submission ID": submissionId,
    "Submitted At": submittedAt,
    "Status": "New"
  };

  if (formType === "cheery-fic") {
    return merge(base, {
      "Full Name": fields.fullName || lead.name || "",
      "WhatsApp": fields.whatsapp || lead.whatsapp || "",
      "Email": fields.email || lead.email || "",
      "City": fields.city || lead.city || "",
      "Commission Type": fields.commissionType || "",
      "Occasion": fields.occasion || "",
      "Number of People": fields.numberOfPeople || "",
      "Preferred Style": fields.preferredStyle || "",
      "Reference Photo Links": fields.referencePhotoLink || "",
      "Background / Props": fields.backgroundProps || "",
      "Deadline": fields.deadline || "",
      "Delivery Format": fields.deliveryFormat || "",
      "Print / Frame Needed": "",
      "Budget Range": fields.budgetRange || "",
      "Additional Notes": fields.notes || "",
      "Consent to Contact": fields.consent ? "Yes" : "No"
    });
  }

  if (formType === "cheerys-art") {
    return merge(base, {
      "Full Name": fields.fullName || lead.name || "",
      "WhatsApp": fields.whatsapp || lead.whatsapp || "",
      "Email": fields.email || lead.email || "",
      "City": fields.city || lead.city || "",
      "Art Medium": fields.artMedium || "",
      "Dimensions": fields.dimensions || "",
      "Space Type": fields.roomSpace || "",
      "Style / Mood": fields.colourPreferences || "",
      "Preferred Colours": fields.colourPreferences || "",
      "Reference / Room Photo Links": fields.roomReferenceLink || "",
      "Personalisation / Story": fields.personalStory || "",
      "Deadline": fields.deadline || "",
      "Budget Range": fields.budgetRange || "",
      "Delivery / Installation Notes": fields.deliveryNotes || "",
      "Additional Notes": "",
      "Consent to Contact": fields.consent ? "Yes" : "No"
    });
  }

  if (formType === "anim-daddy") {
    return merge(base, {
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
      "Availability": "",
      "Device / Software Access": "",
      "Portfolio / Work Link": fields.portfolioLink || "",
      "Preferred Start": fields.desiredStart || "",
      "Additional Notes": fields.notes || "",
      "Consent to Contact": fields.consent ? "Yes" : "No"
    });
  }

  if (formType === "cheerys-tees") {
    return merge(base, {
      "Full Name / Organisation": fields.fullName || lead.name || "",
      "WhatsApp": fields.whatsapp || lead.whatsapp || "",
      "Email": fields.email || lead.email || "",
      "City": fields.city || lead.city || "",
      "Order Type": fields.orderType || "",
      "Garment / Product": fields.garmentType || "",
      "Quantity": fields.quantity || "",
      "Sizes": fields.sizesBreakdown || "",
      "Base Colours": fields.colors || "",
      "Design Theme / Message": fields.designTheme || "",
      "Artwork / Logo Links": fields.logoArtworkLink || "",
      "Print Positions": "",
      "Personalisation Names / Numbers": "",
      "Event / Needed By": fields.deadline || "",
      "Shipping / Pickup": "",
      "Budget Range": fields.budget || "",
      "Additional Notes": "",
      "Consent to Contact": fields.consent ? "Yes" : "No"
    });
  }

  if (formType === "cheerys-bakes") {
    return merge(base, {
      "Full Name": fields.fullName || lead.name || "",
      "WhatsApp": fields.whatsapp || lead.whatsapp || "",
      "Email": fields.email || lead.email || "",
      "City": fields.city || lead.city || "",
      "Item / Category": fields.category || "",
      "Quantity": fields.quantity || "",
      "Dietary Preference": fields.dietaryPreference || "",
      "Allergies / Ingredients to Avoid": fields.allergies || "",
      "Flavour / Style Preference": fields.flavourNotes || "",
      "Event / Needed By": fields.deadline || "",
      "Pickup / Delivery": fields.pickupDelivery || "",
      "Delivery Address": fields.deliveryAddress || "",
      "Budget Range": "",
      "Special Instructions": "",
      "Consent to Contact": fields.consent ? "Yes" : "No"
    });
  }

  return base;
}

function getVentureSheetName(formType) {
  switch (formType) {
    case "cheery-fic": return "cheery_fic";
    case "cheerys-art": return "cheerys_art";
    case "anim-daddy": return "anim_daddy";
    case "cheerys-tees": return "cheerys_tees";
    case "cheerys-bakes": return "cheerys_bakes";
    default: return "";
  }
}

function getInquiryType(formType, fields) {
  switch (formType) {
    case "cheery-fic": return fields.commissionType || "Caricature Commission";
    case "cheerys-art": return fields.artMedium || "Custom Artwork";
    case "anim-daddy": return fields.trackInterest || "Mentoring Enquiry";
    case "cheerys-tees": return fields.orderType || "Custom Apparel";
    case "cheerys-bakes": return fields.category || "Custom Bake";
    default: return "General Inquiry";
  }
}

function buildSummary(formType, fields) {
  switch (formType) {
    case "cheery-fic":
      return [fields.commissionType, fields.numberOfPeople, fields.occasion]
        .filter(Boolean).join(" • ");
    case "cheerys-art":
      return [fields.artMedium, fields.dimensions, fields.roomSpace]
        .filter(Boolean).join(" • ");
    case "anim-daddy":
      return [fields.trackInterest, fields.currentLevel, fields.mentoringMode]
        .filter(Boolean).join(" • ");
    case "cheerys-tees":
      return [fields.orderType, fields.garmentType, fields.quantity]
        .filter(Boolean).join(" • ");
    case "cheerys-bakes":
      return [fields.category, fields.quantity, fields.dietaryPreference]
        .filter(Boolean).join(" • ");
    default:
      return "";
  }
}

function appendRecordByHeaders(sheet, record) {
  try {
    var headers = getHeaders(sheet);
    var row = [];

    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];
      row.push(record.hasOwnProperty(header) ? record[header] : "");
    }

    sheet.appendRow(row);

    return {
      success: true,
      row: sheet.getLastRow()
    };
  } catch (err) {
    return {
      success: false,
      error: String(err)
    };
  }
}

function validateRecordHeaders(sheet, record) {
  var headers = getHeaders(sheet);
  var known = {};

  for (var i = 0; i < headers.length; i++) {
    known[headers[i]] = true;
  }

  var missing = [];
  for (var key in record) {
    if (record.hasOwnProperty(key) && !known[key]) {
      missing.push(key);
    }
  }

  if (missing.length) {
    return {
      success: false,
      error: "Unknown headers: " + missing.join(", ")
    };
  }

  return { success: true };
}

function getHeaders(sheet) {
  var lastColumn = sheet.getLastColumn();

  if (lastColumn < 1) {
    throw new Error("Sheet '" + sheet.getName() + "' has no headers");
  }

  return sheet
    .getRange(1, 1, 1, lastColumn)
    .getDisplayValues()[0]
    .map(function(v) { return String(v).trim(); });
}

function merge(a, b) {
  var out = {};
  var k;

  for (k in a) {
    if (a.hasOwnProperty(k)) out[k] = a[k];
  }

  for (k in b) {
    if (b.hasOwnProperty(k)) out[k] = b[k];
  }

  return out;
}
