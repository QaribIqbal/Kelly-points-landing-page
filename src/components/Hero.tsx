import Link from "next/link";
import { Dumbbell, Pizza, Plane, Shirt, type LucideIcon } from "lucide-react";
import HeroScene from "./HeroScene";

function FloatChip({
  icon: Icon,
  color,
  className = "",
  delay = "0s",
}: {
  icon: LucideIcon;
  color: string;
  className?: string;
  delay?: string;
}) {
  return (
    <span
      aria-hidden
      className={`animate-bob absolute hidden h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5 sm:flex ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className={`h-6 w-6 ${color}`} strokeWidth={2} />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-tint via-white to-coral-tint">
      <div className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-green/20 blur-3xl" />

      <FloatChip icon={Pizza} color="text-coral-deep" className="left-[6%] top-32" delay="-1s" />
      <FloatChip icon={Shirt} color="text-green-deep" className="right-[8%] top-28" delay="-2s" />
      <FloatChip icon={Plane} color="text-green-deep" className="bottom-28 left-[12%]" delay="-0.5s" />
      <FloatChip icon={Dumbbell} color="text-coral-deep" className="bottom-40 right-[14%]" delay="-1.6s" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-36">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-coral-deep shadow-sm ring-1 ring-black/5">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="animate-ping-soft absolute h-full w-full rounded-full bg-coral" />
              <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            </span>
            Your cards are hiding free money
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            The right card.
            <br />
            <span className="bg-gradient-to-r from-[#e0482b] to-green-deep bg-clip-text text-transparent">
              Every single time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-secondary lg:mx-0">
            Add your credit cards and Xally unlocks millions of offers around you. Standing in a
            restaurant? We&apos;ll tell you which card in your pocket scores the biggest discount,
            before the bill even lands.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/#download"
              className="flex min-h-12 items-center rounded-full bg-coral-deep px-8 text-[17px] font-semibold text-white shadow-lg shadow-coral/30 transition-[transform,background-color] hover:bg-[#b03719] active:scale-95"
            >
              Get the app — it&apos;s free
            </Link>
            <Link
              href="/#how"
              className="flex min-h-12 items-center rounded-full px-6 text-[17px] font-semibold text-coral-deep transition-colors hover:bg-coral-tint"
            >
              See how it works <span aria-hidden className="ml-1.5">›</span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-secondary">
            No fees. No catch. Just discounts, finally doing their job.
          </p>
        </div>

        <HeroScene />
      </div>
    </section>
  );
}
