export interface FoundationLevel {
  level: string;
  name: string;
  summary: string;
  detail: string;
  imageSrc?: string;
}

export interface AdvancedModule {
  num: number;
  title: string;
  description: string;
  imageSrc?: string;
  tag: string;
}

export const FOUNDATION_LEVELS: FoundationLevel[] = [
  {
    level: "Level A",
    name: "Stepping Stones",
    summary: "Animating everyday inanimate objects & learning core founding principles.",
    detail:
      "Try the waters with us. Understand if animation is for you by animating everyday inanimate objects where you get accustomed to the founding principles as you play around creating the illusion of life!",
    imageSrc: "/anim-daddy/page-06.png",
  },
  {
    level: "Level B",
    name: "Let's Draw",
    summary: "Drawing confidence, asymmetry, pen sketching, and natural line beauty.",
    detail:
      "Time to dig out those pencils and sharpeners. Boost your confidence to even sketch with a pen! Trial and error is part of the journey, for there is no 'perfect' drawing. It's the errors and asymmetry that bring natural beauty to your masterpiece.",
    imageSrc: "/anim-daddy/page-07.png",
  },
  {
    level: "Level C",
    name: "Character Creation",
    summary: "Concept art, anatomy exploration, costume silhouette, and story personality.",
    detail:
      "What is concept art and how do you master it? Journey with us into character anatomy, silhouettes, emotional tone, and expressive visual development.",
    imageSrc: "/anim-daddy/page-08.png",
  },
  {
    level: "Level D",
    name: "Caricature Away!",
    summary: "Exaggeration techniques, turning anatomy into comedic gold, and visual wit.",
    detail:
      "Have everyone laugh out loud with your exaggeration skills! Learn how to extract key facial cues and amplify personality with charm and comedic precision.",
    imageSrc: "/anim-daddy/page-09.png",
  },
];

export const ADVANCED_MODULES: AdvancedModule[] = [
  {
    num: 1,
    title: "Founding Steps",
    description: "Tackle inanimate characters with weight, squash, stretch, and pacing.",
    imageSrc: "/anim-daddy/page-12.png",
    tag: "Core Physics",
  },
  {
    num: 2,
    title: "Basic Body Mechanics",
    description: "Understand the laws of physics as you delve into what leads and what follows in motion.",
    imageSrc: "/anim-daddy/page-13.png",
    tag: "Mechanics",
  },
  {
    num: 3,
    title: "Basic Acting",
    description: "Transfer acting, mime and pantomime skills to rigged puppets and infuse life into bones.",
    imageSrc: "/anim-daddy/page-14.png",
    tag: "Performance",
  },
  {
    num: 4,
    title: "Advanced Body Mechanics",
    description: "Extreme expression: parkour, dynamic fight sequences, acrobatics, and dance rhythm.",
    imageSrc: "/anim-daddy/page-15.png",
    tag: "Action",
  },
  {
    num: 5,
    title: "Advanced Acting",
    description: "Multi-character interaction, dialogue timing, micro-expressions, and subtle nuances.",
    imageSrc: "/anim-daddy/page-16.png",
    tag: "Drama & Timing",
  },
  {
    num: 6,
    title: "Environmental Art for Animation",
    description: "Perspective, lighting, background layout, and atmospheric composition for world-building.",
    imageSrc: "/anim-daddy/page-17.png",
    tag: "Environments",
  },
  {
    num: 7,
    title: "Creature Animation & Basics of VFX",
    description: "Master quadruped mechanics, predatory motion, wings, tails, and integrated visual effects.",
    imageSrc: "/anim-daddy/page-18.png",
    tag: "Creatures & VFX",
  },
  {
    num: 8,
    title: "Pre-Production and Concept Art",
    description: "From written prompt to visual bible: costume sheets, color keys, and character model sheets.",
    imageSrc: "/anim-daddy/page-19.png",
    tag: "Pre-Production",
  },
  {
    num: 9,
    title: "Advanced Storyboarding",
    description: "Camera staging, aspect ratios, shot progression, beat economy, and narrative pacing.",
    imageSrc: "/anim-daddy/page-19.png",
    tag: "Storyboarding",
  },
  {
    num: 10,
    title: "2D Digital Animation — Basics",
    description: "Keyframing, inbetweening, digital timeline navigation, and cleanup workflow.",
    imageSrc: "/anim-daddy/page-20.png",
    tag: "2D Digital",
  },
  {
    num: 11,
    title: "2D Digital Animation — Advanced",
    description: "Full scene production, complex physics, lip-sync integration, and export mastering.",
    imageSrc: "/anim-daddy/page-20.png",
    tag: "2D Mastery",
  },
  {
    num: 12,
    title: "The Art of Caricature",
    description: "Get the secrets of adding a funny-bone to your art with Cheery himself.",
    imageSrc: "/anim-daddy/page-21.png",
    tag: "Signature Masterclass",
  },
  {
    num: 13,
    title: "Graphic Designing — Basic",
    description: "Infuse life into typography, visual balance, color theory, and layout hierarchy.",
    imageSrc: "/anim-daddy/page-22.png",
    tag: "Design",
  },
  {
    num: 14,
    title: "Graphic Designing — Advanced",
    description: "Melting pot of colors, editorial alignment, and commercial brand collateral.",
    imageSrc: "/anim-daddy/page-22.png",
    tag: "Advanced Design",
  },
];
