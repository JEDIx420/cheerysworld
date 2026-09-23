/**
 * CHEERYS Google Sheets Intake Webhook (Google Apps Script)
 *
 * Spreadsheet Title: CHEERYS Business Intake & Website Forms
 * Spreadsheet ID: 1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
 *
 * Tabs:
 * - Master Leads
 * - cheery_fic
 * - cheerys_art
 * - anim_daddy
 * - cheerys_tees
 * - cheerys_bakes
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
    if (SCRIPT_SECRET && payload.sharedSecret !== SCRIPT_SECRET) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: "Unauthorized: Invalid shared secret" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var SPREADSHEET_ID = payload.sheetId || "1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U";
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    var timestamp = payload.submittedAt || new Date().toISOString();
    var submissionId = payload.submissionId || ("CW-" + Date.now());
    var formType = payload.formType || "general";
    var lead = payload.masterLead || {};
    var fields = payload.ventureFields || {};

    // 1. Append Normalized Row to "Master Leads"
    var masterSheet = ss.getSheetByName("Master Leads");
    if (masterSheet) {
      masterSheet.appendRow([
        submissionId,
        timestamp,
        lead.venture || formType,
        lead.name || "",
        lead.whatsapp || "",
        lead.email || "",
        lead.city || "",
        lead.summary || "",
        lead.deadline || "",
        lead.budget || "",
        lead.status || "New",
        lead.priority || "Normal",
        lead.preferredContact || "WhatsApp",
        lead.sourcePath || "/"
      ]);
    }

    // 2. Append Detailed Row to Corresponding Venture Sheet
    var ventureTabName = getVentureSheetName(formType);
    var ventureSheet = ss.getSheetByName(ventureTabName);

    if (ventureSheet) {
      var ventureRow = [submissionId, timestamp];
      
      // Append all custom fields in order
      var keys = Object.keys(fields);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        ventureRow.push(key + ": " + fields[key]);
      }

      ventureSheet.appendRow(ventureRow);
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        submissionId: submissionId,
        message: "Successfully recorded into Master Leads and " + ventureTabName
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
