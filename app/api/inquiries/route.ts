import { NextRequest, NextResponse } from "next/server";

// Default Sheet ID as specified in requirements
const DEFAULT_SHEET_ID = "1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U";

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

    // 4. Normalized lead format for Master Leads
    const normalizedMasterLead = {
      submissionId,
      submittedAt: submissionTime,
      venture: formType,
      sourcePath,
      name: fullName,
      whatsapp,
      email: fields.email || "",
      city: fields.city || fields.location || "",
      summary: fields.summary || fields.commissionType || fields.artMedium || fields.trackInterest || fields.orderType || fields.category || "",
      deadline: fields.deadline || "",
      budget: fields.budgetRange || fields.budget || "",
      status: "New",
      priority: "Normal",
      preferredContact: "WhatsApp",
    };

    // 5. Check if webhook is configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
    const sharedSecret = process.env.GOOGLE_SHEETS_SHARED_SECRET || "";

    if (!webhookUrl) {
      // Per instructions: DO NOT pretend the inquiry was saved if webhook is absent!
      // Provide explicit failure JSON and graceful WhatsApp fallback instructions
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
