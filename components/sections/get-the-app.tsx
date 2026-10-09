import { Bell, Compass, ScanLine, Sparkles, WifiOff } from "lucide-react";

import { CompassMark } from "@/components/site/compass-mark";
import { PlayStoreBadge } from "@/components/site/play-store-badge";
import { siteConfig } from "@/lib/data/site";

/**
 * The band that offers the Android app.
 *
 * What it claims is what the app does — the 32-pada compass, the sixteen-zone
 * reading, the assistant, the daily tips — so a reader arrives at the store
 * knowing what they are installing. The phone beside it is drawn, not a
 * screenshot: it carries the brand without passing off a mock-up as the app.
 */

const FEATURES = [
  {
    icon: Compass,
    title: "The N5 compass, live",
    body: "All 32 padas and the 16 zones turn with your phone, so you read the direction where you are standing.",
  },
  {
    icon: ScanLine,
    title: "16 Zone Analysis",
    body: "Acharya Pannkaj Kabiraj's own readings for every placement, zone by zone, with the remedies for each.",
  },
  {
    icon: Sparkles,
    title: "Ask Newmeric AI",
    body: "Ask anything about Vastu in your own language and get the answer with the source it came from.",
  },
  {
    icon: Bell,
    title: "Daily Vastu tips",
    body: "A short reading from the Acharya when there is one, straight to your phone.",
  },
];

export function GetTheApp() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      {/* Quiet brand marks, far enough back to stay out of the reading. */}
      <CompassMark className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-accent/10" />
      <CompassMark className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 text-accent/[0.06]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Compass className="h-3.5 w-3.5" />
            The app
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight md:text-4xl">
            The N5 Vastu compass, in your pocket
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            {siteConfig.app.name} turns your phone into the compass the Acharya reads a property
            with — and carries his guidance with it, so you can check a placement the moment you
            are standing in front of it.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block font-semibold">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-primary-foreground/75">
                    {body}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PlayStoreBadge />
            <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <WifiOff className="h-4 w-4 text-accent" />
              Free to download. The compass works without a connection.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

/** A drawn phone showing the app's face: brand, not a screenshot. */
function PhoneMock() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-accent/15 blur-3xl"
      />
      <div className="relative w-[260px] rounded-[2.75rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/40">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#B1510B] via-[#8A3C05] to-[#FFFDF1]">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] font-semibold text-white/80">
            <span>9:41</span>
            <span className="h-4 w-20 rounded-full bg-neutral-900/80" />
            <span>100%</span>
          </div>

          <div className="px-5 pb-6 text-center text-white">
            <CompassMark className="mx-auto h-10 w-10 text-accent" />
            <p className="mt-2 font-heading text-lg font-bold leading-none">
              {siteConfig.app.name}
            </p>
            <p className="mt-1 text-[11px] text-white/75">The GPS of your destiny</p>
          </div>

          {/* the dial */}
          <div className="relative mx-auto aspect-square w-[82%] rounded-full border-[6px] border-[#E7D5A8] bg-[#FFFDF1] shadow-inner">
            <div className="absolute inset-3 rounded-full border border-[#E2C98F]" />
            <div className="absolute inset-7 rounded-full border border-[#EADCB8]" />
            {[
              ["N", "top-1 left-1/2 -translate-x-1/2"],
              ["E", "right-1.5 top-1/2 -translate-y-1/2"],
              ["S", "bottom-1 left-1/2 -translate-x-1/2"],
              ["W", "left-1.5 top-1/2 -translate-y-1/2"],
            ].map(([dir, pos]) => (
              <span
                key={dir}
                className={`absolute text-[10px] font-bold text-[#7A2E2E] ${pos}`}
              >
                {dir}
              </span>
            ))}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-2xl font-bold text-[#B1510B]">
              श्री
            </span>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-[42%] w-[3px] origin-bottom -translate-x-1/2 rotate-[24deg] rounded-full bg-[#D5432E]"
            />
          </div>

          <div className="space-y-2 px-5 pb-6 pt-5">
            <div className="rounded-xl bg-white/85 px-3 py-2 text-left shadow-sm">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#AC9A91]">
                Zone of opportunities
              </p>
              <p className="text-[11px] font-semibold text-[#2C1B11]">North · N5 · Soma</p>
            </div>
            <div className="flex gap-2">
              <span className="flex-1 rounded-lg bg-[#B1510B] px-2 py-1.5 text-center text-[10px] font-bold text-white">
                16 Zone Analysis
              </span>
              <span className="flex-1 rounded-lg bg-white/85 px-2 py-1.5 text-center text-[10px] font-bold text-[#B1510B]">
                Ask AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
