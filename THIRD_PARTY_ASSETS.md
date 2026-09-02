# Third-Party Assets & Inspiration Log

This document records the references, engineering patterns, libraries, and external inspiration consulted and adapted for the **CHEERYS WORLD** frontend motion system.

---

## 1. Libraries & Frameworks

| Package / Tool | Version | License | Usage / Purpose |
| :--- | :--- | :--- | :--- |
| **`gsap`** | ^3.14.x | Standard GreenSock License (Free for web prototype & commercial without paid plugins) | Core scroll storytelling, SVG path drawing timelines, ScrollTrigger coordinate tracking. |
| **`@gsap/react`** | ^2.1.x | Standard GreenSock License | Safe React lifecycle hook (`useGSAP`) with automatic cleanup to prevent memory leaks. |
| **`framer-motion`** | ^13.1.x | MIT License | Interface transitions, UI state animations. |
| **`lucide-react`** | ^1.39.x | MIT License | UI interface icons (arrows, bags, sparkles, close buttons). |

---

## 2. Engineering References & Inspiration

| Source | Concept Investigated | How Adapted for Cheerys World |
| :--- | :--- | :--- |
| **React Bits** (`reactbits.dev`) | *Threads / Canvas Trails / Magnet Lines* | Adapted into custom `<GraphiteCursorTrail />` using native HTML5 Canvas quadratic Bézier curves with graphite opacity for fine pointer devices. |
| **Aceternity UI** | *Tracing Beam / Layout Grid* | Adapted into the custom SVG S-Curve scroll path (`<FourWorldsSection />`) and scribble mask image reveals (`<ScrawlRevealImage />`). |
| **Codrops** | *GSAP Scroll Scrubbing / SVG DrawIn* | Adapted for Cheery's authentic vector line art (`<DrawnSelfPortrait />` and `<DrawnCaricatureCouple />`). |

---

## 3. Original Cheery Studio Artworks (Supplied)

All artwork displayed across the website belongs to Cheery's original portfolio:
- **`public/brand/`**: Cheery's signature and self-portrait drawing.
- **`public/cheery-fic/`**: Authentic caricatures (SRK Rockstar, Studio Duo, Couple Anniversary, Sunny Boy, Distinguished Gentleman, Irene & Philip, Transformation Comparison).
- **`public/anim-daddy/`**: Official AnimDaddy student booklet curriculum and study illustrations.
- **`public/cheerys-tees/`**: Living Water, Lion of Judah, Fearfully & Wonderfully Made typography, Hypernikomen, Soul Well.
- **`public/cheerys-bakes/`**: Mindful kitchen and bread craft concepts.

No fake stock photography or AI-generated portfolio artworks were used.
