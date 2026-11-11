# AnimDaddy simplification — implementation brief

**Status:** assets and browser review prepared; page implementation is still to be completed.

**Requested by Jay on 11 November 2026.** Baseline reviewed: `2df5828d1ee6e6185d1e2be71043a8a470314a26`; live page: https://cheerysworld.netlify.app/anim-daddy.

Read this brief, [the browser review](anim-daddy-review-2026-11-11/README.md), and [the foundation asset guide](../public/anim-daddy/foundation/README.md) before editing. Follow the repository's `AGENTS.md` and installed Next.js guidance.

## Desired experience

Visitors should understand the offer and explore the curriculum without navigating a simulated animation workstation.

Use this page order:

1. A concise hero with the existing Ninja character looping smoothly.
2. Stepping Stones: four clear Level A–D choices and one consistent detail panel.
3. A compact advanced curriculum retaining all 14 modules and the three client-selected module GIFs.
4. The existing admissions enquiry form, then the shared footer.

Keep the current cream, ink, and blue brand palette, typography, navigation, real curriculum, fees, and enquiry destinations. Integrate the existing short mentoring promise into the hero copy if useful; avoid another oversized section between the hero and the foundation choices.

## 1. Simplify the hero and retain the Ninja

The user specifically likes the existing Ninja. Its actual source is the self-contained vector animation `public/anim-daddy/lottie-character-acting.json` (126,899 bytes, 690 × 913, 30 fps, 392 frames). Reuse it; a new Ninja asset is unnecessary.

A crisp representative still has been prepared at `public/anim-daddy/hero-ninja-poster.webp` (690 × 913). Show it immediately during initialization, on loading failure, and for reduced-motion users.

Replace the visual presentation in `components/anim-daddy/AnimDaddyHeroReel.tsx` with one plain animation area. Remove the lightbox title, field guides, FPS switch, registration marks, peg holes, frame ranges, safe-title/action boxes, exposure-sheet strip, and four-animation selector. Retain only a small accessible play/pause control if needed; it must work.

The headline, tagline, short explanation, and curriculum/enquiry CTAs should form a compact hero. Use a restrained illustration size; do not make the animation panel extend across multiple desktop screens. On mobile, stack the text and illustration cleanly. The character must remain fully visible and unstretched.

## 2. Use exactly one relevant foundation visual per selected level

These files are already downloaded into `public/anim-daddy/foundation/`. Use the animated WebP as the primary runtime asset, the original GIF as a source/fallback, and the static poster for immediate rendering and reduced motion. Do not load both animated formats concurrently.

| Level | Animated runtime file | Immediate/static poster | Visual meaning |
| --- | --- | --- | --- |
| A — Stepping Stones | `level-a-bouncing-ball.webp` | `level-a-bouncing-ball-poster.webp` | Timing, spacing, squash and stretch |
| B — Let's Draw | `level-b-pencil-drawing.webp` | `level-b-pencil-drawing-poster.webp` | A pencil drawing a heart outline |
| C — Character Creation | `level-c-character-eyes.webp` | `level-c-character-eyes-poster.webp` | Drawn eyes showing expression and attention |
| D — Caricature Away! | `level-d-facial-expressions.webp` | `level-d-facial-expressions-poster.webp` | A simplified face changing expression |

Each stem also has a `.gif` file. See `asset-manifest.json` for dimensions, frame timing, source URLs, credits, hashes, and validation details.

The four animated WebPs total **195,156 bytes**; their four posters total **29,226 bytes**. The Level A source GIF has zero encoded frame delays; its WebP intentionally normalizes playback to 100 ms per frame. Prefer that corrected WebP for consistent playback.

Replace the four bespoke JSX branches with one data-driven, stable layout: selected level name, a short explanation, two useful learning points, the existing fee/CTA, and one visual. Remove the second Level C animation and the unrelated checkmark/panda-loader graphics.

Use a common reserved illustration stage and `object-fit: contain`. Level A is naturally narrow (112 × 512); center it without stretching the ball or cropping its bounce. Keep the drawing/eyes on a light background. Level C is an expression study, not a complete turnaround; Level D is an expression example, not a finished Cheery commission. Use accurate captions if captions are useful at all. Preserve the link to Cheery's actual caricatures.

These are **foundation Levels A–D**, not advanced Modules 1–4. Keep that distinction in data and UI.

## 3. Make switching immediate and remove the remount problem

The current `LottieAnimationPlayer.tsx` starts loading only at 15% intersection, recreates the player when `isVisible` changes, and destroys it in effect cleanup. Foundation conditional branches also unmount/remount players on each selection. Asset size alone does not solve this behavior.

Implement these behaviors:

- Render the selected level's copy and local poster immediately. The panel must never become an empty white stage while waiting for an animation.
- Load/decode the four small posters eagerly. Warm the four animated assets when the curriculum approaches the viewport, using an appropriate advance-loading margin; also warm on tab focus/pointer intent if necessary. Do not wait for the click to begin every download.
- Prefer a stable presentation that swaps the selected source after it is ready. Keep the selected poster underneath until the animation has decoded; retain it on error. Rapid A→D→B clicks must not let a late A response overwrite B.
- Reserve panel and media dimensions so switching does not move the navigation or create a large layout jump. Show text immediately; use at most a short, subtle fade.
- For any retained Lottie player, initialize once per source and separate play/pause from initialization. Pause when offscreen; destroy only on actual component disposal or a deliberate source replacement. Cache parsed animation data where helpful.
- Warm switches must use already available media and show the selected visual within roughly 150 ms. This is an implementation target, not a measured baseline result.
- Respect `prefers-reduced-motion`, including preference changes. Show the poster until the visitor explicitly opts into playback. Provide accessible pause behavior for looping motion without restoring the production-desk controls.
- Use proper tab semantics, visible focus, selected state, and keyboard navigation for Level A–D. Do not require hover or a modal to read a level.

`LottieAnimationPlayer` is also used on the homepage in `components/sections/VentureCardPreviews.tsx`. If changing shared rendering, check that page too. A minimal AnimDaddy-specific player is acceptable. Avoid brittle CSS that merely hides old controls while keeping all their players mounted.

## 4. Simplify advanced modules without losing content

Keep all 14 advanced modules, their existing numbers, descriptions, grouping, and prices. Present the five groups as compact headings and readable module cards/rows. Remove the five duplicated full-size track-level Lottie stages; they repeat assets already shown elsewhere and create unnecessary page length.

Retain the previously requested client media associations:

| Advanced module | Existing asset |
| --- | --- |
| 1 — Founding Steps | `/anim-daddy/module-01-wizard.gif` |
| 2 — Basic Body Mechanics | `/anim-daddy/module-02-hamster.gif` |
| 3 — Basic Acting | `/anim-daddy/module-03-tut-dance.gif` |

Keep their existing still previews, meaningful alt text, and functional play/pause behavior. Simplify the presentation around them. Lazy-load these lower-page animations and show the poster first. The dancer is 1,608,439 bytes, so it should not delay hero/foundation readiness.

Do not reassign these three GIFs to foundation levels or duplicate them across several track panels.

## 5. Files to inspect and likely edit

- `app/anim-daddy/page.tsx`: hierarchy, foundation state/layout, compact advanced section.
- `data/animDaddyModules.ts`: explicit foundation media mapping and learning points; preserve advanced numbering.
- `components/anim-daddy/AnimDaddyHeroReel.tsx`: plain single-character hero.
- `components/anim-daddy/LottieAnimationPlayer.tsx`: lifecycle and poster behavior if retained/shared.
- `components/anim-daddy/ModuleMediaPreview.tsx`: simple framing and poster-first loading.
- `THIRD_PARTY_ASSETS.md`: keep new provenance accurate and mark removed demo usages appropriately.

`AnimationLab.tsx` and `AnimatedPrincipleCard.tsx` are not mounted on the current page. Editing only those files will not change this experience.

## 6. Verification and completion

Run the repository's local lint and production build. Perform focused browser verification of the actual rendered page at desktop and a mobile width around 390 px.

Acceptance checklist:

- [ ] Hero: the existing Ninja, clear copy/CTAs, one modest animation area, no lightbox/workstation chrome.
- [ ] Foundation: one relevant visual per selected level, identical presentation structure, clear selected state.
- [ ] A→B→C→D→A and rapid switching: no blank media stage, wrong late-loaded asset, clipping, or large page movement.
- [ ] Cold load: visible posters while motion becomes ready; no endless spinner.
- [ ] Warm switching: no new media request needed to display the selected visual. Measure and report this separately from cold-load behavior.
- [ ] Scroll away/back: retained hero does not reinitialize or flash an empty first frame.
- [ ] Keyboard and reduced-motion checks pass; pause controls have real behavior.
- [ ] All 14 advanced modules and the three original GIF associations remain correct; five redundant track-level players are gone.
- [ ] Mobile: no horizontal overflow, cropped labels, or oversized animation stages.
- [ ] Enquiry CTAs still reach the form; existing form wiring is preserved. Avoid sending fake production leads while testing.
- [ ] Homepage still works if its shared player changed.
- [ ] No new console errors or broken asset requests.
- [ ] Asset provenance remains in the repository.

Commit and push the completed implementation through the existing repository workflow. If it produces a deployment/preview, inspect the actual result. Report the final SHA, changed files, local checks, browser evidence, URL/status, and any genuine remaining issue. Do not call the redesign complete merely because these prepared assets exist.
