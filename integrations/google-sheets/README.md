# Google Sheets Webhook Integration for CHEERYS WORLD

This integration allows website inquiry forms across all five ventures to reliably and deterministically write:
1. One normalized row to the **`Master Leads`** tab
2. One detailed row to the specific venture tab:
   - **`cheery_fic`**
   - **`cheerys_art`**
   - **`anim_daddy`**
   - **`cheerys_tees`**
   - **`cheerys_bakes`**

---

## 📊 Target Workbook

- **Workbook Title**: `CHEERYS Business Intake & Website Forms`
- **Spreadsheet ID**: `1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U`
- **Verified Tabs in Workbook**:
  1. `Overview`
  2. `Master Leads`
  3. `cheery_fic`
  4. `cheerys_art`
  5. `anim_daddy`
  6. `cheerys_tees`
  7. `cheerys_bakes`
  8. `Form Field Map`
  9. `Integration Notes`

---

## 🛡️ Header-Driven Deterministic Architecture

`Code.gs` implements a safe, header-driven row appender (`appendRecordByHeaders`):
- It reads row 1 of the target sheet dynamically.
- Normalizes header names for fuzzy/whitespace tolerance.
- Appends fields strictly ordered by the actual spreadsheet column layout.
- Returns explicit status and row numbers (`masterRow`, `ventureRow`).
- Fails loudly with `{ success: false, error: ... }` if a required tab or headers are missing, preventing silent data drops.
- Next.js server (`app/api/inquiries/route.ts`) checks `webhookResult.success === true` before confirming to the client.

---

## ⚡ Deployment Instructions (One-time setup in Google Apps Script)

1. Open the Google Spreadsheet:  
   `https://docs.google.com/spreadsheets/d/1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U`

2. In the top menu, navigate to:  
   **Extensions** > **Apps Script**

3. In the script editor, delete any default code and replace it entirely with the contents of [`Code.gs`](./Code.gs).

4. Click **Deploy** > **New deployment**:
   - Click the gear icon next to "Select type" and choose **Web app**.
   - **Description**: `CHEERYS Website Intake Webhook v2`
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone` *(essential so the Next.js API server can POST payloads without Google login redirects)*

5. Click **Deploy**, authorize permissions with your Google account, and copy the generated **Web App URL**:  
   `https://script.google.com/macros/s/AKfycb.../exec`

6. Add the Web App URL and Sheet ID to your production environment variables (Netlify / Vercel / `.env.local`):
   ```bash
   GOOGLE_SHEET_ID=1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

*(Optional)* If you set a `SHARED_SECRET` in Apps Script Script Properties, also set `GOOGLE_SHEETS_SHARED_SECRET=<secret>` in your environment.

---

## 🔍 Config Health Check Endpoint

You can verify whether the environment is properly configured by visiting or requesting:
```
GET /api/inquiries
```
Response:
```json
{
  "webhookConfigured": true,
  "sheetConfigured": true,
  "whatsappConfigured": true
}
```
*(Exposes zero secrets, only configuration boolean flags).*

---

## 🔄 Graceful WhatsApp Fallback

If `GOOGLE_SHEETS_WEBHOOK_URL` is omitted or unconfigured:
- The site does **not** fake a success.
- It formats the inquiry into a unique ID (`CW-<VENTURE>-<TIMESTAMP>-<ID>`).
- It opens a pre-filled direct WhatsApp link to Cheery at `+91 9447450825` (`https://wa.me/919447450825?text=...`).
