"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site";

/**
 * The Google Play badge, animated.
 *
 * The animation is the owner's own Lottie file, served from /public rather
 * than bundled, so the 30 KB of JSON is not in the first script the page
 * loads. Both the player and the file are fetched only once the badge is on
 * screen; until then — and on a connection or a browser where either fails,
 * or for a reader who has asked for less motion — the drawn badge below is
 * what shows, and it is a complete badge in its own right rather than a
 * placeholder.
 */
export function PlayStoreBadge({ className, label }: { className?: string; label?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const host = box.current;
    if (!host) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let anim: AnimationItem | undefined;
    let cancelled = false;

    const start = async () => {
      try {
        const [{ default: lottie }, data] = await Promise.all([
          import("lottie-web"),
          fetch("/googleplaystore.json").then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
        ]);
        if (cancelled || !box.current) return;
        anim = lottie.loadAnimation({
          container: box.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
        setAnimated(true);
      } catch {
        // Keep the drawn badge; nothing about the link depends on this.
      }
    };

    // Only when it is actually in view, so a footer badge costs nothing to a
    // reader who never scrolls that far.
    const seen = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        seen.disconnect();
        start();
      }
    }, { rootMargin: "200px" });
    seen.observe(host);

    return () => {
      cancelled = true;
      seen.disconnect();
      anim?.destroy();
    };
  }, []);

  return (
    <a
      href={siteConfig.app.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? `Get ${siteConfig.app.name} on Google Play`}
      className={cn(
        "group inline-flex items-center justify-center rounded-2xl transition-transform duration-200",
        "hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
    >
      {/* The animation draws into this box once it is ready; the drawn badge
          sits underneath until then, and stays if it never is. The box keeps
          the animation's own 310×120 proportions so the two are the same
          size and nothing jumps when one replaces the other. */}
      <span className="relative block aspect-[310/120] w-[200px] sm:w-[228px]">
        <span
          className={cn(
            "absolute inset-0 flex items-center transition-opacity duration-300",
            animated && "opacity-0",
          )}
        >
          <StaticBadge />
        </span>
        <span
          ref={box}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
            animated && "opacity-100",
          )}
        />
      </span>
    </a>
  );
}

/** The badge as Google draws it, in SVG: readable with no JavaScript at all. */
function StaticBadge() {
  return (
    <span className="flex w-full items-center gap-3 rounded-2xl border border-white/25 bg-black px-4 py-3 text-white shadow-lg shadow-black/20">
      <svg viewBox="0 0 48 52" className="h-7 w-7 shrink-0" aria-hidden="true">
        <path d="M2.5 1.6 27.9 26 2.5 50.4A3.6 3.6 0 0 1 1 47.5V4.5c0-1.1.6-2.2 1.5-2.9Z" fill="#00D4FF" />
        <path d="M37.9 16.2 27.9 26 2.5 1.6c.9-.7 2.2-.8 3.2-.2l32.2 14.8Z" fill="#00F076" />
        <path d="M37.9 35.8 5.7 50.6c-1 .6-2.3.5-3.2-.2L27.9 26l10 9.8Z" fill="#FF3A44" />
        <path d="m37.9 16.2 8.3 3.8c2.4 1.1 2.4 4.7 0 5.8l-8.3 3.8L27.9 26l10-9.8Z" fill="#FFC900" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/70">Get it on</span>
        <span className="block font-heading text-lg font-semibold">Google Play</span>
      </span>
    </span>
  );
}
