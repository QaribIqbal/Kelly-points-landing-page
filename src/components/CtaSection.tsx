import type { ReactNode } from "react";
import { ANDROID_URL, IOS_URL } from "@/lib/site";
import Reveal from "./Reveal";

function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden>
      <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

function StoreBadge({
  href,
  icon,
  kicker,
  name,
}: {
  href: string;
  icon: ReactNode;
  kicker: string;
  name: string;
}) {
  const body = (
    <>
      {icon}
      <span className="text-left">
        <span className="block text-xs font-medium text-secondary">{href ? kicker : "Coming soon to"}</span>
        <span className="block text-lg font-semibold leading-tight">{name}</span>
      </span>
    </>
  );
  const base = "flex min-h-14 items-center gap-3 rounded-2xl bg-white px-6 py-3 text-ink";
  // Without a configured store URL the badge is a plain label, never a dead link.
  return href ? (
    <a href={href} className={`${base} shadow-xl transition-transform hover:-translate-y-0.5 active:scale-95`}>
      {body}
    </a>
  ) : (
    <div className={`${base} opacity-90`}>{body}</div>
  );
}

export default function CtaSection() {
  return (
    <section id="download" className="bg-grouped px-5 py-20 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-ink px-6 py-20 text-center">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-green/30 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-6xl">
              Stop leaving discounts on the table
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Your cards already earned these deals. Xally just makes sure you actually get them.
              Download free and let the saving spree begin.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <StoreBadge
                href={IOS_URL}
                icon={<AppleLogo className="h-8 w-8" />}
                kicker="Download on the"
                name="App Store"
              />
              <StoreBadge
                href={ANDROID_URL}
                icon={<PlayLogo className="h-7 w-7" />}
                kicker="Get it on"
                name="Google Play"
              />
            </div>
            <p className="mt-6 text-sm text-white/70">Free forever for deal hunters.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
