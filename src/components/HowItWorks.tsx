import { CreditCard, Radar, Trophy, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const steps: {
  icon: LucideIcon;
  step: string;
  title: string;
  text: string;
  accent: string;
}[] = [
  {
    icon: CreditCard,
    step: "Step 1",
    title: "Add your cards",
    text: "Pop your credit cards into Xally. Takes about as long as unwrapping a candy bar.",
    accent: "bg-coral-tint text-coral-deep",
  },
  {
    icon: Radar,
    step: "Step 2",
    title: "We scout the deals",
    text: "Millions of offers, matched to your cards and your location. Walk into a restaurant and we’re already on it.",
    accent: "bg-green-tint text-green-deep",
  },
  {
    icon: Trophy,
    step: "Step 3",
    title: "Pay with the winner",
    text: "Xally points at the card with the fattest discount. You pay less. You smile more. Simple math.",
    accent: "bg-coral-tint text-coral-deep",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green-deep">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
            Three steps to <span className="text-coral-deep">never overpaying</span> again
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 120} className="h-full">
                <TiltCard className="h-full rounded-[28px] bg-grouped p-8">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.accent}`}>
                    <s.icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-secondary">{s.step}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-secondary">{s.text}</p>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
