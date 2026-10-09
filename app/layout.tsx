import type { Metadata } from "next";
import { Playfair_Display, Inter, Hind } from "next/font/google";
import { LanguageProvider } from "@/components/site/language-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { AppInstallPopup } from "@/components/site/app-install-popup";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Newmeric Compass | Pannkaj Kabiraj — Numerologist & Vastu Aacharya",
  description:
    "Certified numerology and Vastu Shastra consultations by Pannkaj Kabiraj, Founder of Newmeric Compass. Vedic Kundali, Baby Naming, Name Correction, Vastu Consultation and Compatibility Numerology. Based in Bokajan, Karbi-Anglong, Assam.",
  keywords: [
    "numerology",
    "Vastu Shastra",
    "Vedic Kundali",
    "Pannkaj Kabiraj",
    "Newmeric Compass",
    "Vastu Aacharya",
    "Assam numerologist",
    "baby name numerology",
    "name correction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AppInstallPopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
