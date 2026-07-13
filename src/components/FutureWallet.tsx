import Image from "next/image";
import { PiggyBank, Smartphone, Wand2 } from "lucide-react";
import Reveal from "./Reveal";

function GalaxyPhone() {
  return (
    <div
      className="animate-float-slow relative w-44 sm:w-52 lg:w-56"
      style={{ "--float-rot": "0deg" } as React.CSSProperties}
    >
      <Image
        src="/xelly-phone-clean.png"
        alt="Android phone showing the Xelly wallet auto-picking the Xelly Orange card with 30% off at Bella's Pizza, ready for tap-to-pay"
        width={887}
        height={1774}
        className="h-auto w-full drop-shadow-2xl"
      />
    </div>
  );
}

export default function FutureWallet() {
  return (
    <section id="vision" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* phone */}
        <Reveal className="order-2 lg:order-1">
          <div className="mx-auto w-fit">
            <GalaxyPhone />
          </div>
        </Reveal>

        {/* copy */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <Reveal>
            <span className="inline-block rounded-full bg-xorange-bg px-4 py-1.5 font-display text-sm font-semibold uppercase tracking-wider text-xorange">
              Coming soon
            </span>
            <h2 className="font-display mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Soon, Xelly won&apos;t just <span className="text-xblue">pick</span> the card —
              it&apos;ll <span className="text-xorange">pay</span> with it
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-foreground/70">
              We&apos;re building Xelly into a full wallet. Walk up to the counter at your favorite
              restaurant or clothing store, and Xelly auto-selects the card with the maximum
              discount. One tap of your phone and you&apos;re done — best deal locked in, zero
              mental math.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 space-y-4 text-left font-semibold text-foreground/75">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-xorange-bg">
                  <Wand2 className="h-5 w-5 text-xorange" strokeWidth={2.25} />
                </span>
                Auto-selects your highest-discount card at checkout
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-xblue-bg">
                  <Smartphone className="h-5 w-5 text-xblue" strokeWidth={2.25} />
                </span>
                Tap-to-pay at restaurants, clothing brands & more
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-xorange-bg">
                  <PiggyBank className="h-5 w-5 text-xorange" strokeWidth={2.25} />
                </span>
                Savings applied automatically, every single time
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
