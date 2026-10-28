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
    text: "At a café, a gym, a mall? Xally senses where you are and surfaces the best offers on the spot. No digging, no coupon spelunking.",
    span: "md:col-span-3",
    bg: "bg-ink text-white",
    sub: "text-white/75",
    chip: "bg-white/15 text-white",
  },
  {
    icon: Gift,
    title: "Millions of offers",
    text: "Restaurants, fashion, travel, fitness and more, all free to unlock with the cards already in your wallet.",
    span: "md:col-span-2",
    bg: "bg-white text-foreground",
    sub: "text-secondary",
    chip: "bg-coral-tint text-coral-deep",
  },
  {
    icon: Crown,
    title: "Best-card picker",
    text: "Five cards, one bill, zero guesswork. Xally instantly ranks your cards by discount so the winner is always obvious.",
    span: "md:col-span-2",
    bg: "bg-white text-foreground",
    sub: "text-secondary",
    chip: "bg-green-tint text-green-deep",
  },
  {
    icon: SlidersHorizontal,
    title: "Filters that get you",
    text: "Slice offers by card, by location, or by mood: food, fitness, clothing, travel. Your deals, your rules.",
    span: "md:col-span-3",
    bg: "bg-coral-deep text-white",
    sub: "text-white/85",
    chip: "bg-white/20 text-white",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-grouped py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-deep">
            Why you&apos;ll love it
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
            Your wallet just got a <span className="text-green-deep">superpower</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className={f.span}>
              <TiltCard maxTilt={4} className={`h-full rounded-[28px] p-8 sm:p-9 ${f.bg}`}>
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.chip}`}>
                  <f.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className={`mt-3 leading-relaxed ${f.sub}`}>{f.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
