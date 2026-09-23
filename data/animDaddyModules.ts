export interface FoundationLevel {
  level: string;
  name: string;
  summary: string;
  detail: string;
  principleType:
    | "squash-stretch"
    | "body-mechanics"
    | "concept-preprod"
    | "caricature-art";
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
}

export const FOUNDATION_LEVELS: FoundationLevel[] = [
  {
    level: "Level A",
    name: "Stepping Stones",
    summary: "Animating everyday inanimate objects & learning core founding principles.",
    detail:
      "Try the waters with us. Understand if animation is for you by animating everyday inanimate objects where you get accustomed to the founding principles as you play around creating the illusion of life!",
    principleType: "squash-stretch",
  },
  {
    level: "Level B",
    name: "Let's Draw",
    summary: "Drawing confidence, asymmetry, pen sketching, and natural line beauty.",
    detail:
      "Time to dig out those pencils and sharpeners. Boost your confidence to even sketch with a pen! Trial and error is part of the journey, for there is no 'perfect' drawing. It's the errors and asymmetry that bring natural beauty to your masterpiece.",
    principleType: "body-mechanics",
  },
  {
    level: "Level C",
    name: "Character Creation",
    summary: "Concept art, anatomy exploration, costume silhouette, and story personality.",
    detail:
      "What is concept art and how do you master it? Journey with us into character anatomy, silhouettes, emotional tone, and expressive visual development.",
    principleType: "concept-preprod",
  },
  {
    level: "Level D",
    name: "Caricature Away!",
    summary: "Exaggeration techniques, turning anatomy into comedic gold, and visual wit.",
    detail:
      "Have everyone laugh out loud with your exaggeration skills! Learn how to extract key facial cues and amplify personality with charm and comedic precision.",
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
  },
  {
    num: 2,
    title: "Basic Body Mechanics",
    description: "Understand the laws of physics as you delve into what leads and what follows in motion.",
    tag: "Mechanics",
    principleType: "body-mechanics",
  },
  {
    num: 3,
    title: "Basic Acting",
    description: "Transfer acting, mime and pantomime skills to rigged puppets and infuse life into bones.",
    tag: "Performance",
    principleType: "acting-pantomime",
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
