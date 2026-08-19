import Link from "next/link";
import { Mail, Phone, MapPin, Award, Shield } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { FacebookIcon } from "@/components/site/icons";
import { Bilingual } from "@/components/site/bilingual-text";
import { missionStatement, missionTagline } from "@/lib/data/mission";
import { navLinks, siteConfig } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="text-accent" />
              <span className="font-heading text-2xl font-bold">{siteConfig.name}</span>
            </div>
            <Bilingual value={missionTagline} as="p" className="mt-3 text-sm italic text-accent" />
            <Bilingual
              value={missionStatement}
              as="p"
              className="mt-4 text-sm leading-relaxed text-primary-foreground/80"
            />
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/90">Certified Numerologist</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/90">Vastu Aacharya</span>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold">Quick links</span>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold">Contact information</span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/90">{siteConfig.phone}</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="break-all text-sm text-primary-foreground/90">{siteConfig.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/90">{siteConfig.address.line1}</p>
                  <p className="text-sm text-primary-foreground/90">{siteConfig.address.line2}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold">Connect with us</span>
            <div className="mt-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground"
              >
                <FacebookIcon className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              <span className="text-sm font-medium">Founder</span>
              <p className="mt-1 text-sm text-primary-foreground/90">{siteConfig.founder}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/80 transition-colors duration-200 hover:text-primary-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
