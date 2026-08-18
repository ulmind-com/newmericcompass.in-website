export type Pillar = "numerology" | "vastu";

export interface Service {
  slug: string;
  name: string;
  pillar: Pillar;
  price: number;
  tagline?: string;
  shortDescription: string;
  description: string[];
  highlights?: string[];
  /** Path under public/, e.g. "/images/vedic-kundali.jpg". An absolute https URL
   *  also works. Leave undefined to fall back to a styled placeholder. */
  image?: string;
  featured?: boolean;
  active: boolean;
}

export interface Product {
  slug: string;
  name: string;
  /** Omit for "contact for price" items (e.g. sourced/custom spiritual items). */
  price?: number;
  tagline?: string;
  shortDescription: string;
  description: string[];
  highlights?: string[];
  image?: string;
  featured?: boolean;
  active: boolean;
}

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  feedback: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
