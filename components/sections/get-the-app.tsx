import Image from "next/image";
import { Bell, Compass, ScanLine, Sparkles } from "lucide-react";

import { CompassMark } from "@/components/site/compass-mark";
import { PlayStoreBadge } from "@/components/site/play-store-badge";
import { siteConfig } from "@/lib/data/site";

/**
 * The band that offers the Android app.
 *
 * What it claims is what the app does — the 32-pada compass, the sixteen-zone
 * reading, the assistant, the daily tips — so a reader arrives at the store
 * knowing what they are installing, and the phone beside it is the app's own
 * screen rather than an artist's idea of it.
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

          <div className="mt-9">
            <PlayStoreBadge />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}

/** The app's own screen, in a phone. */
function PhoneMock() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-accent/15 blur-3xl" />
      <div className="relative w-[260px] overflow-hidden rounded-[2.75rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/40">
        <Image
          src="/images/appImage.png"
          alt="The Newmeric Compass app: the N5 dial reading North-North-East, with the zone's life dimension below it"
          width={757}
          height={1600}
          sizes="260px"
          className="h-auto w-full rounded-[2.1rem]"
        />
      </div>
    </div>
  );
}
