import type { Metadata } from "next";
import Link from "next/link";
import { ReceiptText } from "lucide-react";

import { PolicyBody } from "@/components/site/policy-body";
import { LEGAL_UPDATED, REFUND } from "@/lib/data/legal";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Newmeric Compass",
  description:
    "When a payment made in the Newmeric Compass app can be refunded, how to request one, and how cancellation works.",
};

export default function RefundPage() {
  return (
    <div>
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <ReceiptText className="h-4 w-4" />
            Payments
          </span>
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Refund &amp; Cancellation</h1>
          <p className="mt-4 text-muted-foreground">Last updated {LEGAL_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PolicyBody blocks={REFUND} />

          <div className="mt-14 border-t border-border pt-8 text-center">
            <Link href="/terms" className="text-sm font-semibold text-primary transition-colors hover:text-accent">
              ← Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
