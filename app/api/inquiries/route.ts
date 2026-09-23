import { NextRequest, NextResponse } from "next/server";
import { getCheeryWhatsAppNumber } from "@/lib/whatsapp";

// Default Target Sheet ID as specified in requirements:
// Title: "CHEERYS Business Intake & Website Forms"
const DEFAULT_SHEET_ID = "1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U";

/**
 * Health check handler exposing configuration status safely without leaking secrets.
 */
export async function GET() {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
  const phone = getCheeryWhatsAppNumber();

  return NextResponse.json({
    webhookConfigured: Boolean(webhookUrl && webhookUrl.trim().length > 0),
    sheetConfigured: Boolean(sheetId && sheetId.trim().length > 0),
    whatsappConfigured: Boolean(phone && phone.trim().length >= 10),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      formType,
      sourcePath = "/",
      fields = {},
      honeypot = "",
    } = body;

    // 1. Honeypot anti-spam check: if bot filled hidden field, reject quietly
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json(
        { error: "Spam submission detected" },
        { status: 400 }
      );
    }

    // 2. Validate mandatory form payload
    if (!formType || typeof fields !== "object" || fields === null) {
      return NextResponse.json(
        { error: "Invalid form payload. Missing venture or fields." },
        { status: 400 }
      );
    }

    const fullName = String(fields.fullName || fields.studentName || "").trim();
    const whatsapp = String(fields.whatsapp || "").trim();

    if (!fullName || !whatsapp) {
      return NextResponse.json(
        { error: "Full name and WhatsApp number are required." },
        { status: 400 }
      );
    }

    // 3. Generate unique submission ID: CW-<venture>-<timestamp>-<shortId>
    const timestamp = Date.now();
    const shortId = Math.random().toString(36).substring(2, 7).toUpperCase();
    const venturePrefix = String(formType).replace("cheerys-", "").replace("cheery-", "").toUpperCase();
    const submissionId = `CW-${venturePrefix}-${timestamp}-${shortId}`;

    const submissionTime = new Date().toISOString();

    // 4. Normalized lead format strictly conforming to Master Leads schema:
    // A Submission ID, B Submitted At, C Venture, D Inquiry Type, E Full Name, F WhatsApp,
    // G Email, H City, I Status, J Priority, K Preferred Contact, L Source Page,
    // M Summary, N Consent to Contact, O Assigned To, P Follow-up Date, Q Last Contacted, R Internal Notes
    const normalizedMasterLead = {
      submissionId,
      submittedAt: submissionTime,
      venture: formType,
      inquiryType: fields.commissionType || fields.artMedium || fields.trackInterest || fields.orderType || fields.category || "Inquiry",
      name: fullName,
      whatsapp,
      email: fields.email || "",
      city: fields.city || fields.location || "",
      status: "New",
      priority: "Normal",
      preferredContact: "WhatsApp",
      sourcePath,
      summary: fields.summary || fields.personalStory || fields.learningGoal || fields.designTheme || fields.flavourNotes || "",
      consent: Boolean(fields.consent),
    };

    // 5. Check if webhook is configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
    const sharedSecret = process.env.GOOGLE_SHEETS_SHARED_SECRET || "";

    if (!webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          submissionId,
          message:
            "Google Sheets intake webhook is not configured yet in this environment. Your inquiry has been formatted below so you can proceed directly via WhatsApp without losing any details.",
          data: {
            submissionId,
            normalizedMasterLead,
            ventureDetails: fields,
          },
        },
        { status: 200 }
      );
    }

    // 6. Forward payload to Google Sheets Webhook / Apps Script
    try {
      const webhookPayload = {
        sheetId,
        sharedSecret,
        submissionId,
        submittedAt: submissionTime,
        formType,
        sourcePath,
        masterLead: normalizedMasterLead,
        ventureFields: fields,
      };

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        throw new Error(`Google Sheets Webhook returned HTTP ${webhookResponse.status}`);
      }

      const webhookResult = await webhookResponse.json();

      // Per instruction: Validate that webhookResult.success is explicitly true!
      // Do not show "Inquiry Recorded Successfully" unless the Sheet actually confirmed the append!
      if (!webhookResult || webhookResult.success !== true) {
        const errMsg = webhookResult?.error || "Unknown Google Apps Script write failure";
        console.error("Apps Script returned failure result:", webhookResult);

        return NextResponse.json(
          {
            success: false,
            configured: true,
            submissionId,
            message: `The inquiry could not be recorded into the Google Sheet: ${errMsg}. You can proceed directly with Cheery on WhatsApp.`,
            data: {
              submissionId,
              normalizedMasterLead,
              ventureDetails: fields,
            },
            webhookResult,
          },
          { status: 200 }
        );
      }

      return NextResponse.json({
        success: true,
        configured: true,
        submissionId,
        message: "Your inquiry has been successfully recorded in the Cheerys studio queue!",
        webhookResult,
      });
    } catch (webhookErr: unknown) {
      console.error("Error dispatching to Google Sheets webhook:", webhookErr);
      return NextResponse.json(
        {
          success: false,
          configured: true,
          submissionId,
          message:
            "We encountered a temporary connection issue while recording to Google Sheets, but your inquiry data was generated. You can send it directly to Cheery via WhatsApp.",
          data: {
            submissionId,
            normalizedMasterLead,
            ventureDetails: fields,
          },
        },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    console.error("Inquiries API error:", error);
    return NextResponse.json(
      { error: "Server error processing inquiry." },
      { status: 500 }
    );
  }
}
