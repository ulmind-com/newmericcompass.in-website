import type { Product } from "@/lib/types";

/**
 * Physical/report products (as opposed to `services.ts`, which holds
 * Pannkaj's consultation offerings). Products get added here by hand once
 * images and details are ready.
 *
 * To add a product, append an object like this to the array below:
 *
 * {
 *   slug: "some-unique-url-slug",       // used in /products/[slug]
 *   name: "Product Name",
 *   price: 999,                          // in INR, no comma/symbol — OMIT entirely
 *                                         // for "contact for price" items
 *   tagline: "Optional short tagline",   // optional
 *   shortDescription: "One line shown on the product card.",
 *   description: [
 *     "First paragraph shown on the product detail page.",
 *     "Second paragraph, if needed.",
 *   ],
 *   highlights: ["Optional bullet point", "Another bullet point"], // optional
 *   image: "/images/product-name.jpg",   // put the file in public/images/ first
 *   active: true,                        // set false to hide without deleting
 * }
 */
export const products: Product[] = [
  {
    slug: "prachin-narmadeshwar-shivling",
    name: "Prachin Narmadeshwar Shivling",
    // No fixed price — customers are asked to connect on WhatsApp for details & pricing.
    image: "/images/narmadeshwar-shivling.jpg",
    tagline: "सैकड़ों वर्षों की ऊर्जा और सात्विक शक्ति का प्रतीक",
    shortDescription:
      "A rare, 100% natural Narmadeshwar Shivling sourced from the sacred banks of the Narmada — a symbol of centuries of energy and sattvic power.",
    description: [
      "\"सैकड़ों वर्षों की ऊर्जा और सात्विक शक्ति का प्रतीक — प्राचीन नर्मदेश्वर शिवलिंग। माँ नर्मदा के पावन तट से प्राप्त, यह दुर्लभ शिवलिंग अब Newmeric Compass पर उपलब्ध है। अपने घर या कार्यस्थल में सकारात्मक ऊर्जा के संचार के लिए आज ही संपर्क करें।\" — Pannkaj Kabiraj, Acharya",
      "Brings positive energy into your home or workplace, supports mental peace, health, and prosperity, and is considered highly powerful from a religious, spiritual, and energetic point of view.",
    ],
    highlights: [
      "घर और कार्यस्थल में सकारात्मक ऊर्जा का संचार — Positive energy for home and workplace",
      "मानसिक शांति, स्वास्थ्य और समृद्धि में वृद्धि — Supports mental peace, health & prosperity",
      "100% प्राकृतिक और प्रामाणिक — 100% Natural & Authentic",
    ],
    featured: true,
    active: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug && product.active);
}

export function getActiveProducts(): Product[] {
  return products.filter((product) => product.active);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.active && product.featured);
}
