# Third-Party Assets & Inspiration Log

This document records the references, engineering patterns, libraries, and external open-source assets consulted, vendored, or adapted for the **CHEERYS WORLD** frontend motion system.

---

## 1. Libraries & Frameworks

| Package / Tool | Version | License | Usage / Purpose |
| :--- | :--- | :--- | :--- |
| **`lottie-web`** | ^5.13.0 | MIT License | Lightweight SVG vector animation renderer for AnimDaddy kinetic motion cels. |
| **`gsap`** | ^3.15.x | Standard GreenSock License | Core scroll storytelling, SVG path drawing timelines, ScrollTrigger coordinate tracking. |
| **`@gsap/react`** | ^2.1.x | Standard GreenSock License | Safe React lifecycle hook (`useGSAP`) with automatic cleanup to prevent memory leaks. |
| **`framer-motion`** | ^13.1.x | MIT License | Interface transitions, UI state animations. |
| **`lucide-react`** | ^1.39.x | MIT License | UI interface icons (arrows, bags, sparkles, close buttons). |

---

## 2. Vendored Open-Source Motion Assets (AnimDaddy Motion Cels)

All external motion assets are permissively licensed (MIT), downloaded directly into the local repository (no CDN hotlinking), and rendered on demand using `LottieAnimationPlayer`:

| Asset Filename | Source Repository | Source Path in Repo | License | Modifications Made |
| :--- | :--- | :--- | :--- | :--- |
| **`public/anim-daddy/lottie-cat-walk.json`** | [`airbnb/lottie-web`](https://github.com/airbnb/lottie-web) | `demo/gatin/data.json` | MIT License | Self-contained 24 FPS vector walk cycle. Used to demonstrate character locomotion, foot contact, and weight mechanics in the AnimDaddy studio card and Module 01. |
| **`public/anim-daddy/lottie-character-acting.json`** | [`airbnb/lottie-web`](https://github.com/airbnb/lottie-web) | `demo/adrock/data.json` | MIT License | Pure vector character performance showcasing anticipation, rhythm, and pantomime in Acting & Performance Studio. |
| **`public/anim-daddy/lottie-shape-morph.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/shape-morph.json` | MIT License | Smooth vector elastic metamorphosis illustrating Disney arcs and volume preservation in Visual Development Track. |
| **`public/anim-daddy/lottie-draw-on.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/logo-draw-on.json` | MIT License | Clean vector drawing stroke resolution demonstrating pencil test cleanup in Digital 2D Production Track. |
| **`public/anim-daddy/lottie-character.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/panda-loader.json` | MIT License | Expressive facial blinking and exaggeration mechanics for the Caricature Masterclass. |

---

## 3. Engineering References & Motion Cookbooks

| Source | Concept Investigated | How Adapted for Cheerys World |
| :--- | :--- | :--- |
| **`airbnb/lottie-web`** | *Lightweight JSON vector cel runtime* | Integrated via `<LottieAnimationPlayer />` with `IntersectionObserver` auto-play/pause on viewport entry and `prefers-reduced-motion` compliance. |
| **`obeskay/lottie-animator-skill`** | *Lottie linting & motion personality patterns* | Followed recommendations for self-contained vector paths, peg-bar registration markers, and controlled blue accents. |
| **`WaterTian/svg-motion-cookbook`** | *SVG stroke animation patterns* | Adapted for clean stroke-dasharray animations and timing cues. |
| **`xiaoluoboding/svg-animation-booklet`** | *GSAP + SVG timing arcs* | Consulted for parabolic arc spacing and squash-and-stretch coordinate tracking in `<AnimationLab />`. |
| **React Bits** (`reactbits.dev`) | *Threads / Canvas Trails / Magnet Lines* | Adapted into custom `<GraphiteCursorTrail />` using native HTML5 Canvas quadratic Bézier curves with graphite opacity for fine pointer devices. |
| **Aceternity UI** | *Tracing Beam / Layout Grid* | Adapted into the custom SVG S-Curve scroll path (`<CreativeWorldsSection />`) and scribble mask image reveals (`<ScrawlRevealImage />`). |
| **Codrops** | *GSAP Scroll Scrubbing / SVG DrawIn* | Adapted for Cheery's authentic vector line art (`<DrawnSelfPortrait />` and `<DrawnCaricatureCouple />`). |

---

## 4. Original Cheery Studio Artworks & Reference Material (Supplied by User)

All artwork displayed across the website belongs to Cheery's original portfolio:
- **`public/1.jpeg` – `public/8.jpeg`**: Authentic studio photographs of Cheery powering the stop-motion `<CheeryFlipbook />`.
- **`public/brand/`**: Cheery's genuine signature and self-portrait drawing.
- **`public/WhatsApp Image 2026-09-21 at 10.13.23 PM (1).jpeg`**: Authentic photographic portrait of Cheery featured on `/about`.
- **`public/WhatsApp Image 2026-09-09 at 11.59.28 PM.jpeg`**: Historic *Technopark's Cheery Baker* feature article clipping in `/cheerys-bakes`.
- **`public/cheery-fic/`**: Authentic caricatures (SRK Rockstar, Studio Duo, Couple Anniversary, Sunny Boy, Distinguished Gentleman, Irene & Philip, Transformation Comparison).
- **`public/cheerys-tees/`**: Living Water, Lion of Judah, Fearfully & Wonderfully Made typography, Hypernikomen, Soul Well.
- **`public/cheerys-bakes/`**: Mindful kitchen crops and artisan sourdough, braided twist, and savory platter photography.

No fake stock photography or AI-generated portfolio artworks were used.
