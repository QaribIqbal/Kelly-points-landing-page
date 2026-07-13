import { CreditCard, Radar, Trophy, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const steps: {
  icon: LucideIcon;
  step: string;
  title: string;
  text: string;
  accent: string;
  ring: string;
}[] = [
  {
    icon: CreditCard,
    step: "Step 1",
    title: "Add your cards",
    text: "Pop your credit cards into Xelly. Takes about as long as unwrapping a candy bar.",
    accent: "bg-xorange-bg text-xorange",
    ring: "ring-xorange/20",
  },
  {
    icon: Radar,
    step: "Step 2",
    title: "We scout the deals",
    text: "Millions of offers, matched to YOUR cards and YOUR location. Walk into a restaurant and we're already on it.",
    accent: "bg-xblue-bg text-xblue",
    ring: "ring-xblue/20",
  },
  {
    icon: Trophy,
    step: "Step 3",
    title: "Pay with the winner",
    text: "Xelly points at the card with the fattest discount. You pay less. You smile more. Simple math.",
    accent: "bg-xorange-bg text-xorange",
    ring: "ring-xorange/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-xblue">
            How it works
          </span>
          <h2 className="font-display mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Three steps to <span className="text-xorange">never overpaying</span> again
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <TiltCard className={`h-full rounded-3xl bg-white p-8 shadow-lg ring-1 ${s.ring}`}>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${s.accent}`}>
                  <span className="animate-bob inline-flex" style={{ animationDelay: `${i * 0.4}s` }}>
                    <s.icon className="h-8 w-8" strokeWidth={2} />
                  </span>
                </div>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-wider text-foreground/40">
                  {s.step}
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 font-semibold leading-relaxed text-foreground/65">{s.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
