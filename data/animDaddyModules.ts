export interface FoundationLevel {
  level: string;
  name: string;
  tag: string;
  summary: string;
  detail: string;
  points: { title: string; desc: string }[];
  media: {
    webp: string;
    gif: string;
    poster: string;
    alt: string;
    caption: string;
  };
  link?: { href: string; label: string };
  principleType?: string;
}

export interface ModuleMedia {
  type: "gif" | "lottie";
  src: string;
  stillSrc?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  aspectRatio?: string;
}

export interface AdvancedModule {
  num: number;
  title: string;
  description: string;
  tag: string;
  principleType:
    | "squash-stretch"
    | "body-mechanics"
    | "acting-pantomime"
    | "dynamic-action"
    | "acting-nuance"
    | "environment-layout"
    | "creature-vfx"
    | "concept-preprod"
    | "storyboarding"
    | "2d-digital-basics"
    | "2d-digital-advanced"
    | "caricature-art"
    | "graphic-design-basic"
    | "graphic-design-advanced";
  media?: ModuleMedia;
}

export const FOUNDATION_LEVELS: FoundationLevel[] = [
  {
    level: "Level A",
    name: "Stepping Stones",
    tag: "Principles",
    summary: "Animating everyday inanimate objects & learning core founding principles.",
    detail:
      "Try the waters with us. Understand if animation is for you by animating everyday inanimate objects where you get accustomed to the founding principles as you play around creating the illusion of life!",
    points: [
      { title: "Squash & Stretch", desc: "Volume conservation and timing fundamentals" },
      { title: "Timing & Spacing", desc: "Slow-in, slow-out arcs and natural motion" },
    ],
    media: {
      webp: "/anim-daddy/foundation/level-a-bouncing-ball.webp",
      gif: "/anim-daddy/foundation/level-a-bouncing-ball.gif",
      poster: "/anim-daddy/foundation/level-a-bouncing-ball-poster.webp",
      alt: "Bouncing ball animation demonstrating squash, stretch, and timing",
      caption: "Level A • Timing, spacing & bouncing ball squash-and-stretch",
    },
    principleType: "squash-stretch",
  },
  {
    level: "Level B",
    name: "Let's Draw",
    tag: "Drawing",
    summary: "Drawing confidence, asymmetry, pen sketching, and natural line beauty.",
    detail:
      "Time to dig out those pencils and sharpeners. Boost your confidence to even sketch with a pen! Trial and error is part of the journey, for there is no 'perfect' drawing. It's the errors and asymmetry that bring natural beauty to your masterpiece.",
    points: [
      { title: "Direct Pen Sketching", desc: "Unlocking raw confidence without fear of errors" },
      { title: "Beautiful Asymmetry", desc: "Embracing natural quirks that give life to drawings" },
    ],
    media: {
      webp: "/anim-daddy/foundation/level-b-pencil-drawing.webp",
      gif: "/anim-daddy/foundation/level-b-pencil-drawing.gif",
      poster: "/anim-daddy/foundation/level-b-pencil-drawing-poster.webp",
      alt: "Pencil sketching a heart outline illustrating natural hand drawing",
      caption: "Level B • Sketching confidence & hand-drawn pencil line",
    },
    principleType: "body-mechanics",
  },
  {
    level: "Level C",
    name: "Character Creation",
    tag: "Design",
    summary: "Character anatomy, silhouette, expressive eyes, and visual development.",
    detail:
      "What is concept art and how do you master it? Journey with us into character anatomy, silhouettes, emotional tone, and expressive visual development.",
    points: [
      { title: "Silhouette & Readability", desc: "Immediate recognition at thumbnail and stage scale" },
      { title: "Gaze & Attention", desc: "Directing focus with expressive eyes and subtle micro-blinks" },
    ],
    media: {
      webp: "/anim-daddy/foundation/level-c-character-eyes.webp",
      gif: "/anim-daddy/foundation/level-c-character-eyes.gif",
      poster: "/anim-daddy/foundation/level-c-character-eyes-poster.webp",
      alt: "Hand-drawn character eyes blinking and looking attentively",
      caption: "Level C • Expression study: gaze, blinking & character attention",
    },
    principleType: "concept-preprod",
  },
  {
    level: "Level D",
    name: "Caricature Away!",
    tag: "Caricature",
    summary: "Exaggeration techniques, turning anatomy into comedic gold, and visual wit.",
    detail:
      "Have everyone laugh out loud with your exaggeration skills! Learn how to extract key facial cues and amplify personality with charm and comedic precision.",
    points: [
      { title: "Facial Architecture", desc: "Identifying key identifying traits and anchor shapes" },
      { title: "Comedic Exaggeration", desc: "Pushing forms and emotion while preserving unmistakable likeness" },
    ],
    media: {
      webp: "/anim-daddy/foundation/level-d-facial-expressions.webp",
      gif: "/anim-daddy/foundation/level-d-facial-expressions.gif",
      poster: "/anim-daddy/foundation/level-d-facial-expressions-poster.webp",
      alt: "Simplified cartoon face shifting through smiles, surprise, and comical expressions",
      caption: "Level D • Facial expression cycles & comedic personality exaggeration",
    },
    link: { href: "/cheery-fic", label: "See Cheery's Caricatures →" },
    principleType: "caricature-art",
  },
];

export const ADVANCED_MODULES: AdvancedModule[] = [
  {
    num: 1,
    title: "Founding Steps",
    description: "Tackle inanimate characters with weight, squash, stretch, and pacing.",
    tag: "Core Physics",
    principleType: "squash-stretch",
    media: {
      type: "gif",
      src: "/anim-daddy/module-01-wizard.gif",
      stillSrc: "/anim-daddy/module-01-wizard-still.png",
      alt: "Pixel-art elder wizard meditating inside a glowing turquoise magic ring",
      caption: "Pixel Animation • Meditation ring timing loop",
      width: 512,
      height: 512,
      aspectRatio: "aspect-square",
    },
  },
  {
    num: 2,
    title: "Basic Body Mechanics",
    description: "Understand the laws of physics as you delve into what leads and what follows in motion.",
    tag: "Mechanics",
    principleType: "body-mechanics",
    media: {
      type: "gif",
      src: "/anim-daddy/module-02-hamster.gif",
      stillSrc: "/anim-daddy/module-02-hamster-still.png",
      alt: "Blue cartoon hamster bench-pressing a barbell with dynamic lifting mechanics",
      caption: "Body Mechanics • Weight, anticipation & barbell bench press",
      width: 512,
      height: 369,
      aspectRatio: "aspect-[512/369]",
    },
  },
  {
    num: 3,
    title: "Basic Acting",
    description: "Transfer acting, mime and pantomime skills to rigged puppets and infuse life into bones.",
    tag: "Performance",
    principleType: "acting-pantomime",
    media: {
      type: "gif",
      src: "/anim-daddy/module-03-tut-dance.gif",
      stillSrc: "/anim-daddy/module-03-tut-dance-still.png",
      alt: "Glossy white 3D humanoid character performing a tut dance with raised palms",
      caption: "Pantomime & Acting • Rhythmic tutting dance performance",
      width: 512,
      height: 288,
      aspectRatio: "aspect-[16/9]",
    },
  },
  {
    num: 4,
    title: "Advanced Body Mechanics",
    description: "Extreme expression: parkour, dynamic fight sequences, acrobatics, and dance rhythm.",
    tag: "Action",
    principleType: "dynamic-action",
  },
  {
    num: 5,
    title: "Advanced Acting",
    description: "Multi-character interaction, dialogue timing, micro-expressions, and subtle nuances.",
    tag: "Drama & Timing",
    principleType: "acting-nuance",
  },
  {
    num: 6,
    title: "Environmental Art for Animation",
    description: "Perspective, lighting, background layout, and atmospheric composition for world-building.",
    tag: "Environments",
    principleType: "environment-layout",
  },
  {
    num: 7,
    title: "Creature Animation & Basics of VFX",
    description: "Master quadruped mechanics, predatory motion, wings, tails, and integrated visual effects.",
    tag: "Creatures & VFX",
    principleType: "creature-vfx",
  },
  {
    num: 8,
    title: "Pre-Production and Concept Art",
    description: "From written prompt to visual bible: costume sheets, color keys, and character model sheets.",
    tag: "Pre-Production",
    principleType: "concept-preprod",
  },
  {
    num: 9,
    title: "Advanced Storyboarding",
    description: "Camera staging, aspect ratios, shot progression, beat economy, and narrative pacing.",
    tag: "Storyboarding",
    principleType: "storyboarding",
  },
  {
    num: 10,
    title: "2D Digital Animation — Basics",
    description: "Keyframing, inbetweening, digital timeline navigation, and cleanup workflow.",
    tag: "2D Digital",
    principleType: "2d-digital-basics",
  },
  {
    num: 11,
    title: "2D Digital Animation — Advanced",
    description: "Full scene production, complex physics, lip-sync integration, and export mastering.",
    tag: "2D Mastery",
    principleType: "2d-digital-advanced",
  },
  {
    num: 12,
    title: "The Art of Caricature",
    description: "Get the secrets of adding a funny-bone to your art with Cheery himself.",
    tag: "Signature Masterclass",
    principleType: "caricature-art",
  },
  {
    num: 13,
    title: "Graphic Designing — Basic",
    description: "Infuse life into typography, visual balance, color theory, and layout hierarchy.",
    tag: "Design",
    principleType: "graphic-design-basic",
  },
  {
    num: 14,
    title: "Graphic Designing — Advanced",
    description: "Melting pot of colors, editorial alignment, and commercial brand collateral.",
    tag: "Advanced Design",
    principleType: "graphic-design-advanced",
  },
];
