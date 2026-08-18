import Image from "next/image";
import { Leaf, ScrollText, ShieldOff, BrainCircuit, Wallet, Sparkles } from "lucide-react";
import { Bilingual } from "@/components/site/bilingual-text";
import { LanguageToggle } from "@/components/site/language-toggle";
import {
  corePrinciples,
  missionConclusion,
  missionStatement,
  missionTagline,
} from "@/lib/data/mission";

const icons = [Leaf, ScrollText, ShieldOff, BrainCircuit, Wallet, Sparkles];

const NATURE_ENERGY_IMAGE = "/images/nature-energy.jpg";

export function Philosophy() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            उद्देश्य कथन · Mission Statement
          </span>
          <Bilingual
            value={missionTagline}
            as="h2"
            className="text-3xl font-bold text-primary md:text-4xl"
          />
          <div className="mx-auto mt-8 max-w-xs overflow-hidden rounded-2xl shadow-lg sm:max-w-sm">
            <Image
              src={NATURE_ENERGY_IMAGE}
              alt="Nature's Energy Is the Real Power"
              width={784}
              height={1063}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <LanguageToggle className="border-border text-muted-foreground" />
          </div>
          <Bilingual
            value={missionStatement}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corePrinciples.map((principle, index) => {
            const Icon = icons[index];
            return (
              <div key={principle.title.en} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <Bilingual value={principle.title} as="h3" className="text-lg font-semibold text-primary" />
                <Bilingual
                  value={principle.body}
                  as="p"
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
          <Bilingual
            value={missionConclusion}
            as="p"
            className="mx-auto max-w-2xl text-lg italic leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}
