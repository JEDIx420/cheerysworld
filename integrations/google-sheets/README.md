# Google Sheets Webhook Integration for CHEERYS WORLD

This integration allows website inquiry forms to automatically write:
1. One normalized row to the **`Master Leads`** tab
2. One detailed row to the specific venture tab (**`cheery_fic`**, **`cheerys_art`**, **`anim_daddy`**, **`cheerys_tees`**, **`cheerys_bakes`**)

---

## 📊 Target Workbook

- **Workbook Title**: `CHEERYS Business Intake & Website Forms`
- **Spreadsheet ID**: `1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U`

---

## ⚡ Deployment Instructions (One-time setup in Google Drive)

1. Open the Google Spreadsheet:  
   `https://docs.google.com/spreadsheets/d/1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U`

2. In the top menu, navigate to:  
   **Extensions** > **Apps Script**

3. Delete any default code in the editor, and paste the contents of [`Code.gs`](./Code.gs).

4. Click **Deploy** > **New deployment**:
   - Click the gear icon next to "Select type" and choose **Web app**.
   - **Description**: `CHEERYS Website Intake Webhook`
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: `Anyone` *(required for the serverless Next.js API route to submit POST requests)*

5. Click **Deploy**, review Google permissions, and copy the generated **Web App URL**:  
   `https://script.google.com/macros/s/AKfycb.../exec`

6. Add the Web App URL to your Next.js environment (`.env.local` or Netlify / Vercel Environment Variables):
   ```bash
   GOOGLE_SHEET_ID=1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## 🛡️ Optional Shared Secret

If you want extra protection:
1. In Google Apps Script, go to **Project Settings** > **Script Properties**.
2. Add a property `SHARED_SECRET` with any secure random token.
3. Add the matching `GOOGLE_SHEETS_SHARED_SECRET` token to your Next.js `.env.local`.

---

## 🔄 Graceful WhatsApp Fallback

If `GOOGLE_SHEETS_WEBHOOK_URL` is omitted or absent in development, the site does **not** fake a submission. It formats the user's filled data, generates a real submission ID (`CW-<VENTURE>-<TIMESTAMP>-<ID>`), and provides a 1-click continuation directly into WhatsApp.
