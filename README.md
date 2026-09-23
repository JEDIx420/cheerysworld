# CHEERYS • Creative Culture

> **"One name. Five expressions. One creative culture."**

Official frontend repository for **CHEERYS**, the multi-disciplinary creative umbrella founded by artist, animator, designer, storyteller, and mentor **Cheery**.

The site unites Cheery's five creative ventures into one cohesive, editorial, and art-directed digital world:

1. **`cheery_fic`** (Venture 01): Visual studio for expressive caricatures, family keepsakes, celebration portraits, and illustrated products.
2. **`cheerys_art`** (Venture 02): Fine art & painting work spanning handcrafted canvas impasto, fluid cosmic resin art, and functional clock dial paintings.
3. **`anim_daddy`** (Venture 03): Animation & art mentoring platform with stepping-stone foundations and advanced professional modules taught by veteran industry animators.
4. **`cheerys_tees`** (Venture 04): Bespoke apparel and streetwear merchandise transforming heavyweight cotton tees into canvases of personal faith, identity, and narrative.
5. **`cheerys_bakes`** (Venture 05): Wholesome, made-to-order artisan kitchen focusing on nutritious, gluten-free, and sugar-free breads and baked treats tailored to personal dietary preferences.

---

## 🎨 Creative Architecture & Brand System

- **Pillars**: `CREATE.` • `PAINT.` • `TEACH.` • `PERSONALISE.` • `NOURISH.`
- **Design Philosophy**: Warm cream paper texture (`#faf8f5`), ink-line strokes (`#1c1917`), editorial serif typography (*Playfair Display*), clean modern sans (*Plus Jakarta Sans*), and artisanal code/data mono (*JetBrains Mono*).
- **Interactive Stop-Motion Flipbook**: Real physical studio pose sequence of Cheery animating stop-motion poses in the hero.
- **Sticky Stacking Cards**: Five chapter journey stacking smoothly with progressive vertical offsets and natural scroll progression.
- **Handcrafted Animation Lab**: Original cream-and-blue SVG animation principles system (squash & stretch, onion skinning, timing arcs, keyframe breakdown) replacing old dark booklet screenshots.
- **Schema-Driven Inquiries**: Structured multi-venture intake system with server-side validation and Google Sheets / Apps Script webhook integration.

---

## 📁 Key Routes

| Route | Venture / Page | Description |
| :--- | :--- | :--- |
| `/` | **Home Page** | Flipbook hero, "Meet Cheery" founder spotlight, responsive sticky "Creative Worlds" stacking cards, curated visual archive, and Creative Culture banner. |
| `/cheery-fic` | **cheery_fic** | Caricature gallery, live-drawn couple line art, photo-to-caricature breakdown, and structured commission intake form. |
| `/cheerys-art` | **cheerys_art** | Canvas paintings, fluid resin art, clock dials, space styling philosophy, and custom painting inquiry form. |
| `/anim-daddy` | **anim_daddy** | Interactive Animation Lab, handcrafted motion principle demos, foundation curriculum, 14 advanced modules, and mentoring admission inquiry. |
| `/cheerys-tees` | **cheerys_tees** | Screen-print craft explanation, lookbook gallery, product detail modal preview, and custom batch apparel inquiry. |
| `/cheerys-bakes` | **cheerys_bakes** | Dietary philosophy, hand-drawn wheat stem motion, bakehouse menu preview, and custom baking request form with allergy alerts. |
| `/about` | **About Cheery** | The story of how artist, animator, designer, storyteller, and mentor became five related creative expressions. |
| `/cart` | **Cart Preview** | Client-side visual state preview for selected apparel and prints. |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Runtime**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with custom editorial font variables
- **Motion**: GSAP + `@gsap/react` for scroll-triggered timelines and SVG path drawing; Framer Motion for UI states
- **Icons**: `lucide-react` + custom hand-drawn SVG doodles (`DoodleIcons.tsx`)
- **Deployment**: Configured for edge / static hosting on Netlify / Cloudflare

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/JEDIx420/cheerysworld.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📄 Environment Configuration

Create a `.env.local` file with the following variables:

```bash
# WhatsApp contact number in international format (e.g. 919876543210)
NEXT_PUBLIC_CHEERYS_WHATSAPP_NUMBER=

# Google Sheets Intake Configuration
GOOGLE_SHEET_ID=1Zs8q1f_qZsQZqCsUiwdp3Kd2zoZyiD45Qx8gfkCzh1U
GOOGLE_SHEETS_WEBHOOK_URL=
GOOGLE_SHEETS_SHARED_SECRET=
```
