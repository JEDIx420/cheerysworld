export interface Venture {
  id: string;
  number: string;
  name: string;
  slug: string;
  tagline: string;
  accentColor: string;
  accentBg: string;
  badgeBorder: string;
  pillColor: string;
  description: string;
  bulletPill: string;
  actionText: string;
  actionHref: string;
  offerings: {
    title: string;
    description: string;
  }[];
  promise: string;
  previewImage: string;
  imageAlt: string;
}

export const VENTURES: Venture[] = [
  {
    id: "cheery-fic",
    number: "01",
    name: "cheery_fic",
    slug: "/cheery-fic",
    tagline: "Caricatures, characters & creative products",
    accentColor: "text-amber-700",
    accentBg: "bg-amber-500/10",
    badgeBorder: "border-amber-600/30",
    pillColor: "bg-amber-100 text-amber-900 border-amber-300",
    description:
      "Turning people, ideas and imagination into playful visual stories and memorable creative products. Where faces become caricatures, ideas become illustrations, and creativity finds a form people can keep, gift or share.",
    bulletPill: "CARICATURES + CREATIVE PRODUCTS",
    actionText: "EXPLORE CHEERY_FIC",
    actionHref: "/cheery-fic",
    offerings: [
      {
        title: "Caricatures",
        description:
          "Expressive, personality-led caricatures created for individuals, couples, families, celebrations, profiles and special occasions.",
      },
      {
        title: "Creative Products",
        description:
          "A growing range of illustrated and personalised creative products designed to turn memories and ideas into something tangible.",
      },
      {
        title: "Personal Commissions",
        description:
          "Custom work shaped around the person, story, occasion or concept behind the request.",
      },
    ],
    promise:
      "The goal is simple: make people smile, recognise themselves and feel that their story has been given a distinctive creative identity.",
    previewImage: "/cheery-fic/page-4.png",
    imageAlt: "Cheery-fic Caricature of a smiling boy by Cheery",
  },
  {
    id: "anim-daddy",
    number: "02",
    name: "anim_daddy",
    slug: "/anim-daddy",
    tagline: "Animation & art modules • online + offline mentoring",
    accentColor: "text-blue-700",
    accentBg: "bg-blue-500/10",
    badgeBorder: "border-blue-600/30",
    pillColor: "bg-blue-100 text-blue-900 border-blue-300",
    description:
      "The learning and mentoring arm of Cheerys, created for curious artists who want to understand the craft behind animation and visual storytelling. Where passion becomes motion.",
    bulletPill: "ANIMATION + ART MENTORING",
    actionText: "DISCOVER ANIM_DADDY",
    actionHref: "/anim-daddy",
    offerings: [
      {
        title: "Art + Animation Modules",
        description:
          "Structured learning in drawing, movement, acting, animation principles, visual storytelling and production thinking.",
      },
      {
        title: "Online Mentoring",
        description:
          "Guided learning and feedback from home, allowing students to develop skills with a flexible, supportive approach.",
      },
      {
        title: "Offline Mentoring",
        description:
          "Workshops and mentoring for schools, learning spaces and homes—bringing creative education closer to where curious artists are.",
      },
      {
        title: "From Idea to Screen",
        description:
          "The emphasis is on practical creation: developing an idea, planning it, making it and learning through the process.",
      },
    ],
    promise:
      "anim_daddy is not only about software. It is about learning to observe, think, draw, act, animate and tell a story with intention.",
    previewImage: "/anim-daddy/page-01.png",
    imageAlt: "AnimDaddy Student Booklet Cover - Learn Animation",
  },
  {
    id: "cheerys-tees",
    number: "03",
    name: "cheerys_tees",
    slug: "/cheerys-tees",
    tagline: "Personalised apparel & merchandise with a creative face-lift",
    accentColor: "text-orange-800",
    accentBg: "bg-orange-500/10",
    badgeBorder: "border-orange-600/30",
    pillColor: "bg-orange-100 text-orange-900 border-orange-300",
    description:
      "Reimagines everyday apparel as a canvas for personality, faith, identity, celebration and self-expression. Giving T-shirts and merchandise a face-lift through highly customisable prints.",
    bulletPill: "CUSTOM APPAREL + MERCHANDISE",
    actionText: "VISIT CHEERYS_TEES",
    actionHref: "/cheerys-tees",
    offerings: [
      {
        title: "Custom Prints",
        description:
          "Highly customisable designs that can be adapted to suit the person, message, mood or occasion.",
      },
      {
        title: "Accessories + Merchandise",
        description:
          "A broader merchandise experience designed to complement the apparel and give each idea a complete visual identity.",
      },
      {
        title: "Everyday + Events",
        description:
          "From everyday wear to celebrations, teams, gifts and special events, designs can be shaped around the moment.",
      },
      {
        title: "A Personal Touch",
        description:
          "The aim is to move beyond mass-produced merchandise and create pieces that feel considered, personal and memorable.",
      },
    ],
    promise:
      "Every piece should feel like it belongs to the person wearing it. The design is not just decoration—it is part of the story.",
    previewImage: "/cheerys-tees/page-08.png",
    imageAlt: "Cheerys Tees Living Water Design T-Shirt",
  },
  {
    id: "cheerys-bakes",
    number: "04",
    name: "cheerys_bakes",
    slug: "/cheerys-bakes",
    tagline: "Nutritious • gluten-free • sugar-free • made to order",
    accentColor: "text-emerald-800",
    accentBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-600/30",
    pillColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    description:
      "Brings a thoughtful, health-conscious approach to home baking—creating breads and baked treats around real dietary needs, allergies and personal preferences.",
    bulletPill: "HEALTHY, CUSTOM BAKING",
    actionText: "DISCOVER CHEERYS_BAKES",
    actionHref: "/cheerys-bakes",
    offerings: [
      {
        title: "Made to Order",
        description:
          "Each order is prepared with the customer's dietary requirements, allergy considerations and customised menu preferences in mind.",
      },
      {
        title: "Health-Conscious Recipes",
        description:
          "Gluten-free and sugar-free options are at the heart of the offering, with an emphasis on nutritious ingredients and careful preparation.",
      },
      {
        title: "Breads + Baked Goods",
        description:
          "Breads, buns, focaccia, bagels and pretzels are crafted for people who want to enjoy baked favourites with a more mindful approach.",
      },
      {
        title: "From Pretzels to Churros",
        description:
          "A growing range of treats is baked to perfection at home, using organic and farmer-sourced ingredients wherever practical and available.",
      },
    ],
    promise:
      "cheerys_bakes is about proving that thoughtful food does not have to feel like a compromise. Better ingredients, personalised choices and careful baking can make every bite count.",
    previewImage: "/brand/overview-page-5.png",
    imageAlt: "Cheerys Bakes overview from brand book",
  },
];
