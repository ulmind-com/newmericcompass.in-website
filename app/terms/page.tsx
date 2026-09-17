import type { Metadata } from "next";
import Link from "next/link";
import { ScrollText } from "lucide-react";

import { PolicyBody } from "@/components/site/policy-body";
import { LEGAL_UPDATED, TERMS } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Newmeric Compass",
  description:
    "The terms that govern use of the Newmeric Compass app and website — what we provide, how purchases work, and what you agree to.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <ScrollText className="h-4 w-4" />
            The agreement
          </span>
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated {LEGAL_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PolicyBody blocks={TERMS} />

          <div className="mt-14 border-t border-border pt-8 text-center">
            <Link href="/refund" className="text-sm font-semibold text-primary transition-colors hover:text-accent">
              Refund &amp; Cancellation Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
