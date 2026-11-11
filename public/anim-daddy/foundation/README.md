# Anim Daddy foundation motion assets

These are small illustrative stock loops selected for the existing four foundation levels. They are not Cheery's portfolio work. Use one animation in each selected level panel, with its corresponding poster as the initial, error, and reduced-motion state.

| Level | Lesson | File stem | Purpose | Animated WebP bytes | Original GIF bytes | Loop duration |
| --- | --- | --- | --- | ---: | ---: | --- |
| A | Stepping Stones | `level-a-bouncing-ball` | Timing, spacing, squash and stretch | 29,334 | 33,165 | 3.40 seconds |
| B | Let's Draw | `level-b-pencil-drawing` | Pencil drawing a heart outline | 90,932 | 110,677 | 2.25 seconds |
| C | Character Creation | `level-c-character-eyes` | Hand-drawn eyes blinking and looking | 41,830 | 47,104 | 1.85 seconds |
| D | Caricature Away | `level-d-facial-expressions` | Simplified face with changing expressions | 33,060 | 47,013 | 3.60 seconds |

The four animated WebP files total **195,156 bytes**. The four posters total **29,226 bytes**. The original GIFs total **237,959 bytes**. Prefer the WebP versions for the page and keep original GIFs as source/fallback assets. Each stem has `.gif`, `.webp`, and `-poster.webp` files. Width and height, exact file hashes, frame timings, source URLs, and authors are recorded in `asset-manifest.json`.

## Presentation notes

- Keep the existing Ninja in the hero. These loops are for the foundation levels only; do not repeat the Ninja in level C.
- Use only the selected level's one loop. Avoid additional icon animations, nested players, field guides, timeline controls, or a lightbox.
- Level A is naturally narrow (112 × 512): contain and center it in a modest, fixed-size stage. Never stretch it horizontally or crop away the bounce trajectory.
- Level B ends with the completed heart outline. Its poster uses that completed frame.
- Level C is a simple character-expression study, not a full character turnaround. Use matching plain-language text.
- Level D cycles through a frown, smile, gaze changes, and surprise. Its poster uses the smiling frame. It illustrates expression rather than a finished caricature commission.
- The files can be requested and decoded before the user clicks a level. Show the local poster immediately while a loop is loading. Keep the stage's reserved dimensions stable. Do not fetch a new animation library or external stock site on a level click.
- Use one unobtrusive accessible pause/play control, or a shared motion toggle, without restoring workstation controls. Under reduced motion, show the poster until the visitor explicitly starts playback. Give meaningful visuals concise alt text; use empty alt text when adjacent lesson copy makes the visual redundant.

## Sources and license

All four source pages identify the media as available under the [Pixabay Content License](https://pixabay.com/service/license-summary/). These assets are bundled for this website project, not offered as a standalone stock-media collection. Keep this provenance with the source files.

| File stem | Creator | Source page | Original direct GIF download |
| --- | --- | --- | --- |
| `level-a-bouncing-ball` | Winterflower | https://pixabay.com/gifs/ball-blue-jump-bouncing-968/ | https://cdn.pixabay.com/animation/2022/10/03/17/54/17-54-34-215_512.gif |
| `level-b-pencil-drawing` | Anilga | https://pixabay.com/gifs/heart-love-draw-pencil-pen-17120/ | https://cdn.pixabay.com/animation/2025/01/06/20/14/20-14-05-610_512.gif |
| `level-c-character-eyes` | MXJ_files | https://pixabay.com/gifs/eyes-human-look-blink-eyelashes-19009/ | https://cdn.pixabay.com/animation/2025/03/16/23/01/23-01-43-411_512.gif |
| `level-d-facial-expressions` | VectorBy | https://pixabay.com/gifs/cartoon-face-expressions-gestures-1814/ | https://cdn.pixabay.com/animation/2022/11/10/02/48/02-48-52-718_512.gif |

## Derivative and validation notes

Original GIF bytes are unmodified. Animated WebP files and static posters were exported losslessly using Pillow 13.0.0. All decoded WebP frames were compared with their GIF counterparts on both white and black backgrounds; visible pixels match. Dimensions, frame counts, transparency, and loop counts were preserved. Static posters intentionally use representative later frames rather than a potentially empty first frame.

The level A source GIF encodes all 34 frame delays as zero. Its WebP export uses 100 ms per frame, giving a 3.4-second loop; this follows the browser-compatible zero-delay normalization documented in [libwebp's reference GIF decoder](https://github.com/webmproject/libwebp/blob/main/examples/anim_util.c). Other source timings are unchanged. WebP frame chunk delays were inspected directly and verified to be positive and to match the manifest. The manifest distinguishes the source's encoded timing from intended playback timing.
