# CHEERYS WORLD (Phase 1 Frontend Prototype)

> **"One name. Four expressions. One creative culture."**

This repository contains the **First Complete Frontend Prototype** for the official website of **CHEERYS**, designed specifically for **Client Visual Review**.

The site unites Cheery's four creative ventures into one cohesive, editorial, and art-directed digital world:

1. **`cheery_fic`** — Caricatures, characters & creative products
2. **`anim_daddy`** — Animation & art modules • online + offline mentoring
3. **`cheerys_tees`** — Personalised apparel & merchandise with a creative face-lift
4. **`cheerys_bakes`** — Nutritious • gluten-free • sugar-free • made to order

---

## 🎨 Visual Identity & Design System

The design steers away from generic SaaS, portfolio, or Shopify templates. Instead, it embodies:
- **Palette**: Warm off-white/cream paper base (`#faf8f5`), crisp dark editorial typography, and distinctive division accent colors:
  - `cheery_fic`: Warm ochre / mustard / gold (`#d97706`)
  - `anim_daddy`: Muted creative blue (`#2563eb`)
  - `cheerys_tees`: Brick / terracotta / warm red (`#c2410c`)
  - `cheerys_bakes`: Muted natural green (`#15803d`)
- **Art Direction**: Cheery's authentic hand-drawn self-portrait and signature, custom SVG doodles (scribbles, underlines, sketch frames), subtle micro-interactions, and asymmetric editorial layouts.
- **Genuine Artwork**: Uses curated high-resolution assets extracted from Cheery's authentic studio portfolio booklets, PDFs, and caricatures.

---

## 🧭 Routes & Pages Created

| Route | Purpose & Highlights |
| :--- | :--- |
| `/` | **Home Page**: Hero typographic statement, "Meet Cheery" founder spotlight, art-directed "Four Worlds" showcase, interactive curated gallery with lightbox, and "Creative Culture" umbrella banner. |
| `/cheery-fic` | **Caricature Studio**: Process journey (3 steps), Photo → Caricature transformation comparison, portfolio gallery, and interactive "Commission a Caricature" modal. |
| `/anim-daddy` | **Mentoring & Learning**: Stepping Stones foundation levels (A-D) switcher, all 14 advanced modules from the student handbook, old-school craft philosophy, and mentoring inquiry form. |
| `/cheerys-tees` | **Apparel & Streetwear**: Curated lookbook with high-res scripture and graphic tees, product preview modal with interactive color/size selectors, and custom batch inquiry. |
| `/cheerys-bakes` | **Healthy Custom Baking**: Mindful kitchen philosophy, visual menu concepts (sourdough, bagels, pretzels, churros), dietary tags, and custom bake order request flow. |
| `/about` | **About Cheery**: The story of how artist, animator, designer, storyteller, and mentor became four related ventures. |
| `/cart` | **Shopping Bag Preview**: Frontend UX placeholder with clean isolation from future backend systems. |

---

## ⚡ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Icons & Doodles**: Lucide React & Custom Hand-drawn SVG doodle library
- **Build & Quality**: Zero build errors, zero lint warnings/errors, static route pre-rendering

---

## 🚀 Local Development Setup

```bash
# Clone repository
git clone https://github.com/JEDIx420/cheerysworld.git
cd cheerysworld

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌐 Netlify Deployment

This repository is configured out-of-the-box for seamless GitHub → Netlify continuous deployment via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

To deploy manually or via Netlify CLI:
```bash
npm run build
```

---

## 📌 Client Review Status & Scope Boundaries

### What IS Implemented (Phase 1 Frontend Prototype)
- Responsive layouts tested for mobile (375px), tablet (768px), and desktop (1440px+).
- Complete navigation and mobile drawer menu.
- Interactive UI modals (Commission Form, Product Detail Preview, Baking Inquiry).
- Accessible Artwork Lightbox with keyboard navigation.
- Curated asset directory in `public/`.

### Intentionally Excluded for Phase 1 (To be built in future phases)
- Database persistence (PostgreSQL / MongoDB)
- User authentication & customer login
- Payment gateways (Stripe / Razorpay) & real checkout
- Real email/webhook dispatch on inquiry forms
- CMS / Admin portal
- Cloudflare production infrastructure
