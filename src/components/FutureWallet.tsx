import { PiggyBank, Smartphone, Wand2 } from "lucide-react";
import PhoneMock from "./PhoneMock";
import Reveal from "./Reveal";

const points = [
  { icon: Wand2, tint: "bg-coral-tint text-coral-deep", text: "Auto-selects your highest-discount card at checkout" },
  { icon: Smartphone, tint: "bg-green-tint text-green-deep", text: "Tap-to-pay at restaurants, clothing brands & more" },
  { icon: PiggyBank, tint: "bg-coral-tint text-coral-deep", text: "Savings applied automatically, every single time" },
];

export default function FutureWallet() {
  return (
    <section id="vision" className="overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="mx-auto w-fit">
            <PhoneMock />
          </div>
        </Reveal>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <Reveal>
            <span className="inline-block rounded-full bg-coral-tint px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-coral-deep">
              Coming soon
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-5xl">
              Soon, Xally won&apos;t just <span className="text-green-deep">pick</span> the card,
              it&apos;ll <span className="text-coral-deep">pay</span> with it
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              We&apos;re building Xally into a full wallet. Walk up to the counter at your favorite
              restaurant or clothing store, and Xally auto-selects the card with the maximum
              discount. One tap of your phone and you&apos;re done: best deal locked in, zero mental math.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 space-y-4 text-left text-foreground">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${p.tint}`}>
                    <p.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
