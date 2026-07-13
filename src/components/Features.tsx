import { Crown, Gift, MapPin, SlidersHorizontal, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const features: {
  icon: LucideIcon;
  title: string;
  text: string;
  span: string;
  bg: string;
  sub: string;
  chip: string;
}[] = [
  {
    icon: MapPin,
    title: "Location magic",
    text: "At a café, a gym, a mall? Xelly senses where you are and surfaces the best offers on the spot — no digging, no coupon spelunking.",
    span: "md:col-span-3",
    bg: "bg-gradient-to-br from-xblue to-xblue-deep text-white",
    sub: "text-white/70",
    chip: "bg-white/15 text-white",
  },
  {
    icon: Gift,
    title: "Millions of offers",
    text: "Restaurants, fashion, travel, fitness and more — all free to unlock with the cards already in your wallet.",
    span: "md:col-span-2",
    bg: "bg-white ring-1 ring-xorange/20",
    sub: "text-foreground/65",
    chip: "bg-xorange-bg text-xorange",
  },
  {
    icon: Crown,
    title: "Best-card picker",
    text: "Five cards, one bill, zero guesswork. Xelly instantly ranks your cards by discount so the winner is always obvious.",
    span: "md:col-span-2",
    bg: "bg-white ring-1 ring-xblue/20",
    sub: "text-foreground/65",
    chip: "bg-xblue-bg text-xblue",
  },
  {
    icon: SlidersHorizontal,
    title: "Filters that get you",
    text: "Slice offers by card, by location, or by mood — food, fitness, clothing, travel. Your deals, your rules.",
    span: "md:col-span-3",
    bg: "bg-gradient-to-br from-xorange to-amber-500 text-white",
    sub: "text-white/80",
    chip: "bg-white/20 text-white",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-xblue-bg/60 py-24">
      <div className="animate-blob pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-xorange/15 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-xorange">
            Why you&apos;ll love it
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Your wallet just got a <span className="text-xblue">superpower</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120} className={f.span}>
              <TiltCard maxTilt={6} className={`h-full rounded-3xl p-8 shadow-lg ${f.bg}`}>
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.chip}`}>
                  <f.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold">{f.title}</h3>
                <p className={`mt-3 font-semibold leading-relaxed ${f.sub}`}>{f.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
