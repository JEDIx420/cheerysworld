export type FormType =
  | "cheery-fic"
  | "cheerys-art"
  | "anim-daddy"
  | "cheerys-tees"
  | "cheerys-bakes";

export interface FormFieldSchema {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "radio" | "url" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helperText?: string;
  importantNote?: string;
}

export interface FormSectionSchema {
  title: string;
  description?: string;
  fields: FormFieldSchema[];
}

export interface VentureFormConfig {
  formType: FormType;
  ventureName: string;
  ventureCode: string;
  title: string;
  subtitle: string;
  accentColor: string;
  badgeText: string;
  sections: FormSectionSchema[];
  whatsappPrompt: string;
}

export const INQUIRY_FORMS: Record<FormType, VentureFormConfig> = {
  "cheery-fic": {
    formType: "cheery-fic",
    ventureName: "cheery_fic",
    ventureCode: "FIC",
    title: "Commission a Caricature",
    subtitle: "Share your reference photos, stories, and celebration details. Cheery will craft an expressive caricature tailored with personality.",
    accentColor: "amber",
    badgeText: "Venture 01 • Caricature Commission",
    whatsappPrompt: "Hi Cheery, I just submitted an inquiry for a caricature commission.",
    sections: [
      {
        title: "Your Details",
        fields: [
          { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "e.g. Maya Thomas" },
          { id: "whatsapp", label: "WhatsApp Number", type: "tel", required: true, placeholder: "+91 98765 43210", helperText: "We share sketches and progress directly via WhatsApp." },
          { id: "email", label: "Email Address (Optional)", type: "email", placeholder: "maya@example.com" },
          { id: "city", label: "City / Location", type: "text", required: true, placeholder: "e.g. Bangalore, India" },
        ],
      },
      {
        title: "Caricature Details",
        fields: [
          {
            id: "commissionType",
            label: "Commission Type",
            type: "select",
            required: true,
            options: ["Solo Portrait", "Couple Keepsake", "Family / Group Caricature", "Wedding Invitation Caricature", "Corporate / Executive Avatar"],
          },
          {
            id: "numberOfPeople",
            label: "Number of People to Draw",
            type: "select",
            required: true,
            options: ["1 Person", "2 People (Couple)", "3 to 5 People", "6+ Group"],
          },
          {
            id: "preferredStyle",
            label: "Preferred Art Style",
            type: "select",
            required: true,
            options: ["Classic Cheery Full-Color Caricature", "Minimalist Clean Ink Line Art", "Whimsical Story Illustration", "Digital Avatar (Icon/Social)"],
          },
          { id: "occasion", label: "Occasion / Purpose", type: "text", placeholder: "e.g. 25th Wedding Anniversary, Birthday Gift, Farewell" },
          {
            id: "referencePhotoLink",
            label: "Reference Photo Link(s)",
            type: "url",
            required: true,
            placeholder: "https://drive.google.com/...",
            helperText: "Share a Google Drive, Dropbox, or iCloud link containing high-resolution smiling face photos.",
          },
          {
            id: "backgroundProps",
            label: "Special Background / Props / Hobbies",
            type: "textarea",
            placeholder: "Mention favorite hobbies, pets, instruments, clothes, or inside jokes to include in the sketch...",
          },
        ],
      },
      {
        title: "Timeline, Format & Delivery",
        fields: [
          { id: "deadline", label: "Needed-by Date / Event Date", type: "text", required: true, placeholder: "e.g. October 15, 2026" },
          {
            id: "deliveryFormat",
            label: "Delivery Format",
            type: "select",
            required: true,
            options: ["High-Res Digital File (Print-Ready 300 DPI)", "Digital File + Physical Framed Print (Delivery)", "Physical Canvas Delivery"],
          },
          {
            id: "budgetRange",
            label: "Budget Range",
            type: "select",
            options: ["Standard (₹3,000 – ₹6,000)", "Premium / Multi-Subject (₹6,000 – ₹12,000)", "Elaborate Custom Storyboard (₹12,000+)", "Open to recommendation"],
          },
          { id: "notes", label: "Additional Notes or Questions", type: "textarea", placeholder: "Anything else Cheery should know about the person or project?" },
          {
            id: "consent",
            label: "I consent to Cheery contacting me via WhatsApp/Email regarding this commission.",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },

  "cheerys-art": {
    formType: "cheerys-art",
    ventureName: "cheerys_art",
    ventureCode: "ART",
    title: "Commission Custom Fine Art",
    subtitle: "Turn your space into a canvas of emotions, beauty, and memories. Inquire about bespoke canvas paintings, fluid resin art, or painted clock dials.",
    accentColor: "purple",
    badgeText: "Venture 02 • Fine Art Commission",
    whatsappPrompt: "Hi Cheery, I just submitted an inquiry for custom artwork.",
    sections: [
      {
        title: "Your Details",
        fields: [
          { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "e.g. David Koshy" },
          { id: "whatsapp", label: "WhatsApp Number", type: "tel", required: true, placeholder: "+91 98765 43210" },
          { id: "email", label: "Email Address (Optional)", type: "email", placeholder: "david@example.com" },
          { id: "city", label: "City & State", type: "text", required: true, placeholder: "e.g. Kochi, Kerala" },
        ],
      },
      {
        title: "Artwork Vision & Medium",
        fields: [
          {
            id: "artMedium",
            label: "Artwork Medium",
            type: "select",
            required: true,
            options: ["Textured Canvas Painting (Impasto / Acrylic)", "Fluid Resin Art (Glossy / Cosmic)", "Hand-Painted Clock Dial Statement Piece", "Mixed Media & Gold Leaf Canvas", "Faith & Scripture Custom Painting"],
          },
          { id: "dimensions", label: "Desired Dimensions / Wall Size", type: "text", required: true, placeholder: "e.g. 24x36 inches, 30x40 inches, or Clock 16-inch diameter" },
          { id: "roomSpace", label: "Destination Space", type: "text", placeholder: "e.g. Living room feature wall, Office boardroom, Master bedroom" },
          { id: "colourPreferences", label: "Preferred Color Palette & Mood", type: "text", placeholder: "e.g. Deep blues, emerald, gold leaf accents, earthy warm tones" },
          {
            id: "roomReferenceLink",
            label: "Room / Reference Photo Link(s)",
            type: "url",
            placeholder: "https://drive.google.com/...",
            helperText: "Share photos of your wall, existing furniture, or art styles you love.",
          },
          {
            id: "personalStory",
            label: "Personal Story or Theme",
            type: "textarea",
            placeholder: "Share memories, scripture passages, or specific symbolism you would like woven into the painting...",
          },
        ],
      },
      {
        title: "Timeline & Budget",
        fields: [
          { id: "deadline", label: "Target Completion Date", type: "text", placeholder: "e.g. Within 4 weeks, Housewarming on Nov 20" },
          {
            id: "budgetRange",
            label: "Budget Range",
            type: "select",
            options: ["₹5,000 – ₹10,000", "₹10,000 – ₹20,000", "₹20,000 – ₹40,000", "Large Bespoke Commission (₹40,000+)", "Open to quote"],
          },
          { id: "deliveryNotes", label: "Delivery / Packaging Preference", type: "text", placeholder: "e.g. Stretched & framed, Rolled canvas tube for international shipping" },
          {
            id: "consent",
            label: "I agree to be contacted by Cheerys Art Studio regarding this request.",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },

  "anim-daddy": {
    formType: "anim-daddy",
    ventureName: "anim_daddy",
    ventureCode: "ANIM",
    title: "Mentoring & Admissions Inquiry",
    subtitle: "Learn the craft behind animation, motion, and acting from industry veterans with over 20 years of experience.",
    accentColor: "blue",
    badgeText: "Venture 03 • Animation Mentoring",
    whatsappPrompt: "Hi Cheery, I just submitted an admissions inquiry for AnimDaddy.",
    sections: [
      {
        title: "Student Details",
        fields: [
          { id: "studentName", label: "Student Full Name", type: "text", required: true, placeholder: "e.g. Maya Nair" },
          {
            id: "ageGroup",
            label: "Age Group",
            type: "select",
            required: true,
            options: ["Young Artist (Under 14)", "High School / Teen (14–18)", "College / University Student", "Working Professional / Career Transition", "Parent Inquiring for Child"],
          },
          { id: "parentGuardian", label: "Parent / Guardian Name (If under 18)", type: "text", placeholder: "e.g. Sunil Nair" },
          { id: "whatsapp", label: "WhatsApp Contact", type: "tel", required: true, placeholder: "+91 98765 43210" },
          { id: "email", label: "Email Address", type: "email", required: true, placeholder: "maya@example.com" },
          { id: "location", label: "City & Country", type: "text", required: true, placeholder: "e.g. Chennai, India" },
        ],
      },
      {
        title: "Learning Track & Preferences",
        fields: [
          {
            id: "mentoringMode",
            label: "Preferred Learning Mode",
            type: "select",
            required: true,
            options: ["Online Guided Mentoring (1-on-1 Feedback)", "Offline In-Person Workshop (Homes / Spaces)", "School / College Institutional Program"],
          },
          {
            id: "currentLevel",
            label: "Current Drawing & Art Level",
            type: "select",
            required: true,
            options: ["Complete Beginner (Curious to learn)", "Hobby Sketcher / Doodler", "Intermediate (Digital or Paper)", "Advanced / Animation Student looking for polish"],
          },
          {
            id: "trackInterest",
            label: "Modules / Track of Interest",
            type: "select",
            required: true,
            options: [
              "Foundation Stepping Stones (Levels A – D)",
              "Character Body Mechanics (Modules 1 – 4)",
              "Acting & Storytelling (Modules 3, 5, 9)",
              "Concept Art & Pre-Production (Modules 6, 8)",
              "The Art of Caricature Masterclass (Module 12)",
              "Full Professional 2D Animation Track (Modules 10, 11)",
            ],
          },
          {
            id: "learningGoal",
            label: "What is your main goal in joining AnimDaddy?",
            type: "textarea",
            placeholder: "e.g. Want to understand how to make my sketches move, prepare a portfolio for art school, or learn character acting...",
          },
          {
            id: "portfolioLink",
            label: "Current Sketches / Portfolio Link (Optional)",
            type: "url",
            placeholder: "https://instagram.com/... or Google Drive",
            helperText: "Share 2–3 recent sketches or animations to help us tailor our initial assessment.",
          },
        ],
      },
      {
        title: "Timing & Confirmation",
        fields: [
          {
            id: "desiredStart",
            label: "Desired Start Time",
            type: "select",
            options: ["Immediate / Upcoming Batch", "Next Month", "Weekend Only Workshop", "Flexible"],
          },
          { id: "notes", label: "Special Requests or Inquiries", type: "textarea", placeholder: "Any questions on fee structure, batch timings, or equipment?" },
          {
            id: "consent",
            label: "I consent to receive mentoring syllabus and fee details from AnimDaddy.",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },

  "cheerys-tees": {
    formType: "cheerys-tees",
    ventureName: "cheerys_tees",
    ventureCode: "TEES",
    title: "Custom Apparel & Batch Order Inquiry",
    subtitle: "From individual customized narrative tees to fellowship, team, and milestone event batch prints on premium heavyweight cotton.",
    accentColor: "orange",
    badgeText: "Venture 04 • Custom Apparel",
    whatsappPrompt: "Hi Cheery, I just submitted an apparel order inquiry.",
    sections: [
      {
        title: "Contact Details",
        fields: [
          { id: "fullName", label: "Your Name or Organization", type: "text", required: true, placeholder: "e.g. Grace Fellowship / Rohan Philip" },
          { id: "whatsapp", label: "WhatsApp Number", type: "tel", required: true, placeholder: "+91 98765 43210" },
          { id: "email", label: "Email Address", type: "email", required: true, placeholder: "rohan@example.com" },
          { id: "city", label: "Delivery City & Pin Code", type: "text", required: true, placeholder: "e.g. Hyderabad, 500081" },
        ],
      },
      {
        title: "Apparel Specifications",
        fields: [
          {
            id: "orderType",
            label: "Order Type",
            type: "select",
            required: true,
            options: ["Custom Batch for Event / Church / Team", "Individual Bespoke Artwork Tee", "Cheerys Lookbook Print (Living Water / Lion of Judah)", "Corporate Merchandise Run"],
          },
          {
            id: "garmentType",
            label: "Garment / Product Type",
            type: "select",
            required: true,
            options: ["Heavyweight 240+ GSM Combed Cotton T-Shirt", "Oversized Streetwear Drop-Shoulder Tee", "Canvas Tote Bag", "Hoodie / Sweatshirt", "Mixed Package"],
          },
          {
            id: "quantity",
            label: "Estimated Quantity",
            type: "select",
            required: true,
            options: ["1 – 5 Pieces (Samples / Individual)", "10 – 25 Pieces (Small Group)", "25 – 50 Pieces (Team / Fellowship)", "50 – 100+ Pieces (Large Event)"],
          },
          { id: "colors", label: "Preferred Garment Colors", type: "text", placeholder: "e.g. Pitch Black, Off-White, Sage, Washed Charcoal" },
          { id: "sizesBreakdown", label: "Anticipated Sizes", type: "text", placeholder: "e.g. 5 S, 12 M, 10 L, 8 XL, 2 XXL" },
          {
            id: "designTheme",
            label: "Design Theme, Scripture, or Message",
            type: "textarea",
            required: true,
            placeholder: "Describe the artwork: scripture verse, event theme, typography style, or custom illustration needed...",
          },
          {
            id: "logoArtworkLink",
            label: "Artwork / Logo / Reference Link",
            type: "url",
            placeholder: "https://drive.google.com/...",
            helperText: "Share vector files (AI, EPS, SVG) or high-res PNG references if available.",
          },
        ],
      },
      {
        title: "Timeline & Dispatch",
        fields: [
          { id: "deadline", label: "Target Delivery Date / Event Date", type: "text", required: true, placeholder: "e.g. November 10, 2026" },
          { id: "budget", label: "Target Budget per Piece or Total", type: "text", placeholder: "e.g. ₹600 – ₹900 per t-shirt" },
          {
            id: "consent",
            label: "I consent to Cheerys Tees contacting me with mockup samples and batch pricing.",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },

  "cheerys-bakes": {
    formType: "cheerys-bakes",
    ventureName: "cheerys_bakes",
    ventureCode: "BAKES",
    title: "Custom Bakehouse Order Inquiry",
    subtitle: "Nutritious, thoughtful home baking crafted around real allergies and dietary lifestyles. Every batch is made to order with clean ingredients.",
    accentColor: "emerald",
    badgeText: "Venture 05 • Healthy Custom Baking",
    whatsappPrompt: "Hi Cheery, I just submitted an inquiry for a custom bake order.",
    sections: [
      {
        title: "Your Details",
        fields: [
          { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "e.g. Sarah Jenkins" },
          { id: "whatsapp", label: "WhatsApp Number", type: "tel", required: true, placeholder: "+91 98765 43210" },
          { id: "email", label: "Email Address", type: "email", required: true, placeholder: "sarah@example.com" },
          { id: "city", label: "Delivery Area / Locality", type: "text", required: true, placeholder: "e.g. Indiranagar, Bangalore" },
        ],
      },
      {
        title: "Bakehouse Menu & Diet",
        fields: [
          {
            id: "category",
            label: "Menu Item / Baked Specialty",
            type: "select",
            required: true,
            options: [
              "Artisan Sourdough & Specialty Loaves",
              "Artisan Bagels & Brioche-Style Buns",
              "Herb & Olive Extra Virgin Focaccia",
              "Bavarian Soft Pretzels & Baked Churros",
              "Custom Celebration Assortment",
            ],
          },
          { id: "quantity", label: "Quantity / Batch Size", type: "text", required: true, placeholder: "e.g. 2 Loaves + 6 Bagels" },
          {
            id: "dietaryPreference",
            label: "Primary Dietary Preference",
            type: "select",
            required: true,
            options: ["Gluten-Free Recipe", "Sugar-Free / Diabetic-Friendly", "Dairy-Free", "Low Carb", "Traditional Artisan Wholesome Grain"],
          },
          {
            id: "allergies",
            label: "ALLERGIES / Specific Ingredients to Strictly Avoid",
            type: "textarea",
            required: true,
            placeholder: "Please list all known allergies: nuts, eggs, soy, seeds, specific flours, artificial preservatives...",
            importantNote: "Safety Notice: While we take careful precautions in small-batch preparation, our home kitchen is not an FDA-certified medical sterile facility. Always list strict sensitivities clearly.",
          },
          {
            id: "flavourNotes",
            label: "Flavor Preferences & Instructions",
            type: "textarea",
            placeholder: "e.g. Rosemary & garlic focaccia, lightly salted pretzels, mild cinnamon churros...",
          },
        ],
      },
      {
        title: "Event Date & Delivery",
        fields: [
          { id: "deadline", label: "Needed-by Date & Time", type: "text", required: true, placeholder: "e.g. Saturday morning, Oct 17 by 10 AM" },
          {
            id: "pickupDelivery",
            label: "Pickup or Delivery",
            type: "select",
            required: true,
            options: ["Local Pickup from Kitchen", "Home Delivery via Local Courier"],
          },
          { id: "deliveryAddress", label: "Full Delivery Address (if courier requested)", type: "textarea", placeholder: "House/Flat number, Street, Landmark..." },
          {
            id: "consent",
            label: "I confirm the dietary and allergy specifications provided above.",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },
};
