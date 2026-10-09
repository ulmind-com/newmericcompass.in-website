"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, Compass, ScanLine, Sparkles, X } from "lucide-react";

import { PlayStoreBadge } from "@/components/site/play-store-badge";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/**
 * The one-time offer of the app, shown shortly after a visitor arrives.
 *
 * It asks once and then leaves people alone: closing it, or going to the
 * store from it, is remembered for a fortnight, so a reader who comes back
 * tomorrow is not asked again. It waits a few seconds first — an interstitial
 * over a page someone has not begun reading is the kind people close without
 * looking — and it never navigates on its own: the badge is a link the
 * visitor chooses to follow.
 *
 * Escape, the backdrop and the close button all dismiss it, and the page
 * behind it cannot scroll while it is up.
 */

const SEEN_KEY = "nc_app_promo_v1";
/** How long a dismissal is honoured. */
const QUIET_DAYS = 14;
/** Long enough for the page to be read, short enough to still be noticed. */
const DELAY_MS = 4500;

const POINTS = [
  { icon: Compass, text: "The live N5 compass — all 32 padas" },
  { icon: ScanLine, text: "16 Zone Analysis for every placement" },
  { icon: Sparkles, text: "Ask Newmeric AI in your own language" },
  { icon: Bell, text: "Daily Vastu tips from the Acharya" },
];

function askedRecently(): boolean {
  try {
    const at = Number(window.localStorage.getItem(SEEN_KEY) ?? 0);
    return !!at && Date.now() - at < QUIET_DAYS * 86_400_000;
  } catch {
    // Storage blocked: treat it as not asked, and the dismissal simply will
    // not stick — better than never offering the app at all.
    return false;
  }
}

function remember() {
  try {
    window.localStorage.setItem(SEEN_KEY, String(Date.now()));
  } catch {
    // Nothing depends on this beyond the asking again.
  }
}

export function AppInstallPopup() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (askedRecently()) return;
    const timer = setTimeout(() => {
      setMounted(true);
      // One frame later, so the panel animates in rather than appearing.
      requestAnimationFrame(() => setOpen(true));
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    remember();
    setOpen(false);
    setTimeout(() => setMounted(false), 200);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [mounted, close]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-promo-title"
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className={cn(
          "absolute inset-0 cursor-default bg-primary/70 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "relative w-full max-w-md overflow-hidden rounded-t-3xl bg-background shadow-2xl transition-all duration-300 sm:rounded-3xl",
          open ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-6 opacity-0 sm:scale-95",
        )}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex gap-4 bg-primary px-5 pb-5 pt-6 text-primary-foreground">
          <Image
            src="/images/appImage.png"
            alt=""
            width={757}
            height={1600}
            sizes="84px"
            aria-hidden="true"
            className="h-[112px] w-[84px] shrink-0 rounded-xl border border-white/20 object-cover object-top shadow-lg"
          />
          <div className="pr-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
              Now on Google Play
            </span>
            <h2 id="app-promo-title" className="mt-1 font-heading text-xl font-bold leading-tight">
              Take the {siteConfig.app.name} with you
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/80">
              The compass the Acharya reads a property with — on your phone.
            </p>
          </div>
        </div>

        <div className="px-5 py-5">
          <ul className="space-y-2.5">
            {POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center gap-2">
            {/* Going to the store counts as answered, so the badge's click is
                caught on the way up and the sheet closes behind them. */}
            <div className="w-full" onClick={close}>
              <PlayStoreBadge
                className="w-full [&>span]:mx-auto"
                label={`Get ${siteConfig.app.name} on Google Play`}
              />
            </div>
            <button
              type="button"
              onClick={close}
              className="py-2 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
