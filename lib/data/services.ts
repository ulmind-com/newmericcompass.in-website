import type { Service } from "@/lib/types";

/**
 * Services are Pannkaj's consultation offerings (as opposed to `products.ts`,
 * which will hold physical/report items added later).
 *
 * To add a new service: copy an existing object, give it a unique `slug`
 * (used in the URL /services/[slug]), and fill in the fields.
 *
 * Images live in `public/images/`. Drop the file there, then reference it as
 * `/images/your-file.jpg`. Leave `image` unset and the card falls back to a
 * styled placeholder automatically.
 */
export const services: Service[] = [
  {
    slug: "vedic-kundali",
    name: "Vedic Kundali",
    pillar: "numerology",
    price: 2100,
    image: "/images/vedic-kundali.jpg",
    tagline: "विजयी भवतु सर्वत्र सर्वदा — May You Be Victorious Everywhere, Always",
    shortDescription:
      "A personalized Vedic numerology report identifying your Mulank & Bhagyank, life factors, and Mahadasha/Antardasha analysis.",
    description: [
      "Your personalized numerology report identifies your Mulank (root number) and Bhagyank (destiny number), analyzes the core life factors — health, relationships, career, and money — and reads your Mahadasha/Antardasha periods to show where you stand today and what lies ahead.",
      "Built on the same Vedic principles laid down in the Vastu Shastra, Vedic Shastra, and Numerology traditions, this is a deep, practical look at your life path, not a generic printout.",
    ],
    highlights: [
      "Accurate Insights",
      "Vedic Guidance",
      "Better Decisions, Brighter Future",
      "Trusted Solutions",
    ],
    featured: true,
    active: true,
  },
  {
    slug: "baby-name-suggest",
    name: "Baby Name Suggest",
    pillar: "numerology",
    price: 501,
    image: "/images/baby-name-suggest.jpg",
    tagline: "A Perfect Name, A Perfect Future",
    shortDescription:
      "Newborn naming based on Vedic Numerology — a name chosen to bring success, health and happiness to your child's life.",
    description: [
      "Choosing your child's name is one of the first gifts you give them. This service analyzes your baby's birth details through Vedic numerology and suggests names carrying positive vibrations aligned with a healthy, successful, and happy life.",
      "Backed by 1000+ baby and adult names' worth of experience, every suggestion comes with the numerological reasoning behind it — not just a list.",
    ],
    highlights: [
      "Numerological Analysis",
      "Vedic Wisdom Based",
      "Positive Future Alignment",
      "Lifelong Name Support",
    ],
    featured: true,
    active: true,
  },
  {
    slug: "name-correction",
    name: "Name Correction",
    pillar: "numerology",
    price: 501,
    image: "/images/name-correction.jpg",
    tagline: "Realign Your Name, Realign Your Path",
    shortDescription:
      "Numerological correction of an existing name — for children or adults — to bring it into alignment with success, health, and happiness.",
    description: [
      "A name you're already using can be numerologically corrected — through spelling adjustments or a refined form — to better align with your Mulank and Bhagyank and remove friction from your career, relationships, and health.",
      "Drawing on the same 1000+ names of experience behind our Baby Name Suggest service, this is a practical realignment, not a rename — most corrections are small, deliberate shifts that carry a very different vibration.",
    ],
    highlights: [
      "Numerological Analysis",
      "Vedic Wisdom Based",
      "Positive Future Alignment",
      "Lifelong Name Support",
    ],
    active: true,
  },
  {
    slug: "vastu-consultation",
    name: "Vastu Consultation — 16 Zones Analysis Report",
    pillar: "vastu",
    price: 1110,
    image: "/images/vastu-consultation.jpg",
    tagline: "विजयी भवतु सर्वत्र सर्वदा — May You Be Victorious Everywhere, Always",
    shortDescription:
      "A complete 16-zone Vastu analysis of your home, office, or commercial space — energy flow, directional strength, and practical remedies.",
    description: [
      "This report examines your space across all 16 Vastu zones (Vastu Purush Mandal), reading directional strength, elemental harmony, and energy flow to identify any doshas (imbalances) affecting the people who live or work there.",
      "Every dosha identified comes with a practical, low-cost remedy — this is ancient wisdom applied to modern living, not a list of expensive changes.",
    ],
    highlights: [
      "16 Vastu Zones Analysis",
      "Energy Flow Balance",
      "Directional Strength",
      "Elemental Harmony",
      "Dosha Detection",
      "Remedies & Solutions",
    ],
    featured: true,
    active: true,
  },
  {
    slug: "compatibility-numerology",
    name: "Compatibility Numerology",
    pillar: "numerology",
    price: 501,
    image: "/images/compatibility-numerology.jpg",
    tagline: "Discover the Harmony. Strengthen the Connection. Build a Better Tomorrow.",
    shortDescription:
      "Numerical compatibility analysis for friendships, marriage, or business partnerships — numbers don't lie, they reveal the truth.",
    description: [
      "At Newmeric Compass, we view success through the lens of 'Numerical Harmony.' Whether in a deep friendship, a lifelong marriage, or a high-stakes business partnership, every relationship vibrates at a specific numerical frequency.",
      "When we analyze compatibility through numerology, we are not looking at superstition — we are looking at the energetic alignment of psychological archetypes, based on your date of birth and name numerology.",
    ],
    highlights: [
      "Friendship — build stronger, long-lasting bonds based on trust, respect and support",
      "Marriage — analyze marital compatibility for a happy, peaceful, prosperous married life",
      "Business Partner — evaluate compatibility to ensure growth, success and a profitable partnership",
    ],
    featured: true,
    active: true,
  },
  {
    slug: "career-numerology",
    name: "Career Numerology",
    pillar: "numerology",
    price: 501,
    image: "/images/career-numerology.jpg",
    tagline: "Right Numbers. Right Direction. Right Future.",
    shortDescription:
      "Discover your ideal career path through your Date of Birth and Name Numbers — guidance for students, professionals, and anyone facing a career crossroads.",
    description: [
      "Many students, working professionals, and people considering a career change ask the same question: \"What's the right career for me?\" Career Numerology reads your Date of Birth and Name Numbers to reveal your natural strengths, talents, and career potential.",
      "The goal isn't to predict the future — it's to guide you toward better career decisions. Whether you're a student, looking to grow in your current job, or simply confused about your path, a personalized Career Numerology Analysis helps you choose the right direction based on your own strengths.",
    ],
    highlights: [
      "For Students — discover your natural talents, choose the right stream, and plan your studies wisely",
      "For Existing Professionals — analyze job compatibility, remove career blocks, and unlock growth",
      "Confused About Your Career? — get clarity on your true potential and make confident decisions",
    ],
    featured: true,
    active: true,
  },
  {
    slug: "mobile-numerology",
    name: "Mobile Numerology",
    pillar: "numerology",
    price: 501,
    image: "/images/mobile-numerology.jpg",
    shortDescription:
      "Phone number analysis affecting health, relationships, career & money growth.",
    description: [
      "Discover how your mobile number influences various aspects of your life, and learn how to optimize it for maximum positive energy.",
      "Each digit carries its own vibration — the combination in your mobile number can either support or hinder your goals. This consultation reads that combination and recommends adjustments where needed.",
    ],
    active: true,
  },
  {
    // TODO: confirm price — placeholder set to match the old "Business Numerology" service.
    slug: "business-logo-numerology",
    name: "Business Logo Numerology",
    pillar: "numerology",
    price: 1005,
    image: "/images/business-logo-numerology.jpg",
    tagline: "Right Name. Right Number. Right Logo. Right Direction.",
    shortDescription:
      "Business Name, Logo, and Brand Vibration Numerology — align your brand's identity with energy that customers feel before they even read a word.",
    description: [
      "Newmeric Compass mein hum sirf logo design nahi karte, balki Business Name Numerology, Logo Numerology, Brand Vibration Analysis, Lucky Colour & Symbol Selection, aur Business Growth Alignment par bhi kaam karte hain, taaki aapka brand ek strong energetic identity ke saath market mein establish ho.",
      "Yaad rakhiye: \"Logo pehle aankhon ko dikhta hai, lekin uski vibration seedhe customer ke subconscious mind ko touch karti hai.\"",
      "Isliye agar aap apne business ko sirf chalana nahi, balki brand banana chahte hain, to ek Numerology-Aligned Business Logo aapke liye ek strategic investment ho sakta hai.",
      "\"Right Name. Right Number. Right Logo. Right Direction. Yahi hai Business Success ka Compass – Newmeric Compass.\"",
    ],
    highlights: [
      "Business Name Numerology",
      "Logo Numerology",
      "Brand Vibration Analysis",
      "Lucky Colour & Symbol Selection",
      "Business Growth Alignment",
    ],
    featured: true,
    active: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug && service.active);
}

export function getActiveServices(): Service[] {
  return services.filter((service) => service.active);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.active && service.featured);
}

export function getServicesByPillar(pillar: Service["pillar"]): Service[] {
  return services.filter((service) => service.active && service.pillar === pillar);
}
