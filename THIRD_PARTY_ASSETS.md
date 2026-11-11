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

External motion assets are downloaded into the local repository (no CDN hotlinking). Their licenses and current or planned uses are recorded below.

### A. Vector Lottie Cels (MIT License)

| Asset Filename | Source Repository | Source Path in Repo | License | Modifications Made |
| :--- | :--- | :--- | :--- | :--- |
| **`public/anim-daddy/lottie-cat-walk.json`** | [`airbnb/lottie-web`](https://github.com/airbnb/lottie-web) | `demo/gatin/data.json` | MIT License | Self-contained 25 FPS cat walk cycle. Currently used in the homepage preview, foundation Level A, and a mechanics-track showcase. The simplification brief replaces the latter two placements while preserving the homepage. |
| **`public/anim-daddy/lottie-character-acting.json`** | [`airbnb/lottie-web`](https://github.com/airbnb/lottie-web) | `demo/adrock/data.json` | MIT License | Pure vector character performance showcasing anticipation, rhythm, and pantomime in Acting & Performance Studio. |
| **`public/anim-daddy/lottie-shape-morph.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/shape-morph.json` | MIT License | Square/circle morph loop, currently repeated in the hero selector, Level C, and the visual-development track. These repeated placements are to be removed in the simplified page. |
| **`public/anim-daddy/lottie-draw-on.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/logo-draw-on.json` | MIT License | Checkmark/logo draw-on animation. The current pencil-cleanup presentation is misleading; replacement is specified in the 11 November simplification brief. |
| **`public/anim-daddy/lottie-character.json`** | [`obeskay/lottie-animator-skill`](https://github.com/obeskay/lottie-animator-skill) | `examples/panda-loader.json` | MIT License | Panda with a loading-ring animation. The current caricature presentation is to be replaced per the 11 November simplification brief. |

### B. Curriculum Demonstration Animations (Pixabay Content License)

The following external demonstration animations were selected by the client, downloaded locally, and integrated into the curriculum modules via `<ModuleMediaPreview />` with reduced-motion still previews and interactive play/pause controls:

| Asset Filename | Source Page | Direct Download URL | License | Module & Demonstration Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`public/anim-daddy/module-01-wizard.gif`** (still: `module-01-wizard-still.png`) | [Pixabay Elder Wizard](https://pixabay.com/gifs/elder-wizard-meditation-fantasy-26145/) | `https://cdn.pixabay.com/animation/2026/03/03/12/18/12-18-34-510_512.gif` | Pixabay Content License | **Module 01: Founding Steps** • Client-selected elder wizard meditating inside a turquoise magic ring, illustrating pixel-art loop timing and effects. |
| **`public/anim-daddy/module-02-hamster.gif`** (still: `module-02-hamster-still.png`) | [Pixabay Workout Hamster](https://pixabay.com/gifs/hamster-blue-workout-exercise-15197/) | `https://cdn.pixabay.com/animation/2024/10/08/14/59/14-59-28-221_512.gif` | Pixabay Content License | **Module 02: Basic Body Mechanics** • Blue cartoon hamster bench-pressing a barbell, demonstrating weight, anticipation, muscle exertion, and dynamic follow-through. |
| **`public/anim-daddy/module-03-tut-dance.gif`** (still: `module-03-tut-dance-still.png`) | [Pixabay Dancing Figure](https://pixabay.com/gifs/dance-dancing-dancer-party-music-21964/) | `https://cdn.pixabay.com/animation/2025/08/11/04/05/04-05-10-511_512.gif` | Pixabay Content License | **Module 03: Basic Acting** • Glossy white 3D humanoid performing a rhythmic tut dance with raised palms and crossed legs, demonstrating pantomime and gestural performance against a dark studio stage. |

---

### C. Prepared Foundation Assets — 11 November 2026

These small illustrative loops are prepared for foundation Levels A–D. Page integration remains to be completed according to [the implementation brief](docs/anim-daddy-simplification.md). They are external teaching examples, not Cheery's portfolio work, and are separate from the client-selected advanced-module GIFs above.

All files are in `public/anim-daddy/foundation/`. Each stem has an original `.gif`, a lossless animated `.webp`, and a static `-poster.webp`. The [asset guide](public/anim-daddy/foundation/README.md) and [manifest](public/anim-daddy/foundation/asset-manifest.json) record direct download URLs, hashes, dimensions, timing, and validation.

| File stem | Creator | Primary source | License | Intended use |
| --- | --- | --- | --- | --- |
| `level-a-bouncing-ball` | Winterflower | [Ball / blue / bouncing](https://pixabay.com/gifs/ball-blue-jump-bouncing-968/) | Pixabay Content License | Level A: timing, spacing, squash and stretch. |
| `level-b-pencil-drawing` | Anilga | [Heart / draw / pencil](https://pixabay.com/gifs/heart-love-draw-pencil-pen-17120/) | Pixabay Content License | Level B: a pencil drawing a heart outline. |
| `level-c-character-eyes` | MXJ_files | [Eyes / look / blink](https://pixabay.com/gifs/eyes-human-look-blink-eyelashes-19009/) | Pixabay Content License | Level C: drawn character eyes and expression. |
| `level-d-facial-expressions` | VectorBy | [Cartoon / face / expressions](https://pixabay.com/gifs/cartoon-face-expressions-gestures-1814/) | Pixabay Content License | Level D: simplified facial-expression changes. |

Original GIF bytes are unchanged. WebP exports preserve decoded imagery, dimensions, frame count, transparency, and looping. Level A's zero-delay source frames are normalized to 100 ms per frame in the WebP; the manifest distinguishes encoded source timing from intended playback. Other timings are unchanged. Representative static posters support immediate display and reduced motion.

**Ninja hero poster:** `public/anim-daddy/hero-ninja-poster.webp` is a 690 × 913 lossless WebP still derived from the existing `lottie-character-acting.json` animation (Airbnb/lottie-web `demo/adrock/data.json`, MIT). The rendered SVG frame is retained at `reference/anim-daddy/hero-ninja-poster-source.svg`. It was rasterized with FFmpeg's librsvg decoder at native dimensions; the original animation is unchanged. This poster is prepared for initialization, reduced-motion, and error states in the simplified hero.

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

The following portfolio assets were supplied as Cheery's original work and reference material. External demonstration animations are documented separately above:
- **`public/1.jpeg` – `public/8.jpeg`**: Authentic studio photographs of Cheery powering the stop-motion `<CheeryFlipbook />`.
- **`public/brand/`**: Cheery's genuine signature and self-portrait drawing.
- **`public/WhatsApp Image 2026-09-21 at 10.13.23 PM (1).jpeg`**: Authentic photographic portrait of Cheery featured on `/about`.
- **`public/cheery-fic/`**: Authentic caricatures (SRK Rockstar, Studio Duo, Couple Anniversary, Sunny Boy, Distinguished Gentleman, Irene & Philip, Transformation Comparison).
- **`public/cheerys-tees/`**: Living Water, Lion of Judah, Fearfully & Wonderfully Made typography, Hypernikomen, Soul Well.

No fake stock photography or AI-generated portfolio artworks were used.
