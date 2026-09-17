import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { PolicyBody } from "@/components/site/policy-body";
import { PRIVACY, PRIVACY_UPDATED } from "@/lib/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Newmeric Compass",
  description:
    "How the Newmeric Compass app collects, uses and protects your data — the same policy shown inside the app.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <ShieldCheck className="h-4 w-4" />
            Your privacy
          </span>
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated {PRIVACY_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PolicyBody blocks={PRIVACY} />

          <div className="mt-14 border-t border-border pt-8 text-center">
            <Link
              href="/"
              className="text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
