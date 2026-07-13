"use client";

import { useRef } from "react";
import {
  Dumbbell,
  Pizza,
  Plane,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

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
      className={`animate-bob absolute flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5 ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className={`h-6 w-6 ${color}`} strokeWidth={2.25} />
    </span>
  );
}

function CreditCard({
  gradient,
  label,
  discount,
  className = "",
  style,
}: {
  gradient: string;
  label: string;
  discount: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`card-shine absolute w-56 sm:w-64 rounded-2xl p-5 text-white shadow-2xl ${gradient} ${className}`}
      style={style}
    >
      <div className="flex items-start justify-between">
        <div className="h-8 w-11 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-inner" />
        <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-extrabold backdrop-blur-sm">
          {discount}
        </span>
      </div>
      <p className="mt-6 font-mono text-sm tracking-[0.2em] opacity-90">•••• •••• •••• 4242</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-xs font-bold uppercase tracking-wider opacity-80">{label}</span>
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full bg-white/60" />
          <div className="h-6 w-6 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sceneRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
  };

  const handleLeave = () => {
    const el = sceneRef.current;
    if (el) el.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-xblue-bg via-white to-xorange-bg"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* drifting blobs */}
      <div className="animate-blob pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-xorange/20 blur-3xl" />
      <div className="animate-blob pointer-events-none absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-xblue/20 blur-3xl [animation-delay:-5s]" />
      <div className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-xorange-soft/25 blur-3xl [animation-delay:-9s]" />

      {/* floating category chips */}
      <FloatChip icon={Pizza} color="text-xorange" className="left-[7%] top-32" delay="-1s" />
      <FloatChip icon={Shirt} color="text-xblue" className="right-[10%] top-28" delay="-2s" />
      <FloatChip icon={Plane} color="text-xblue" className="left-[13%] bottom-28" delay="-0.5s" />
      <FloatChip icon={Dumbbell} color="text-xorange" className="right-[16%] bottom-40" delay="-1.6s" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-28 lg:grid-cols-2 lg:pt-36">
        {/* copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-xorange/30 bg-white px-4 py-1.5 text-sm font-extrabold text-xorange shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-soft absolute h-full w-full rounded-full bg-xorange" />
              <span className="h-2.5 w-2.5 rounded-full bg-xorange" />
            </span>
            Your cards are hiding free money
          </span>

          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            The right card.
            <br />
            <span className="bg-gradient-to-r from-xorange via-xorange-soft to-xblue bg-clip-text text-transparent">
              Every. Single. Time.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-foreground/70 lg:mx-0">
            Add your credit cards and Xelly unlocks millions of offers around you. Standing in a
            restaurant? We&apos;ll tell you which card in your pocket scores the biggest discount —
            before the bill even lands.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#download"
              className="group relative overflow-hidden rounded-full bg-xorange px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-xorange/40 transition-transform hover:-translate-y-1 hover:scale-105"
            >
              Get the app — it&apos;s free
            </a>
            <a
              href="#how"
              className="rounded-full border-2 border-xblue/25 bg-white px-8 py-4 text-lg font-extrabold text-xblue transition-transform hover:-translate-y-1 hover:border-xblue/60"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm font-bold text-foreground/50">
            No fees. No catch. Just discounts, finally doing their job.
          </p>
        </div>

        {/* 3D floating card scene */}
        <div className="perspective-1000 relative mx-auto h-[26rem] w-full max-w-md lg:h-[30rem]">
          <div
            ref={sceneRef}
            className="preserve-3d relative h-full w-full transition-transform duration-300 ease-out"
          >
            <div className="animate-float-slow" style={{ "--float-rot": "-8deg" } as React.CSSProperties}>
              <CreditCard
                gradient="bg-gradient-to-br from-xblue to-xblue-deep"
                label="Xelly Blue"
                discount="15% off travel"
                className="left-0 top-8"
                style={{ transform: "translateZ(20px) rotate(-8deg)" }}
              />
            </div>
            <div className="animate-float" style={{ "--float-rot": "6deg" } as React.CSSProperties}>
              <CreditCard
                gradient="bg-gradient-to-br from-xorange to-amber-500"
                label="Xelly Orange"
                discount="30% off food"
                className="right-0 top-36"
                style={{ transform: "translateZ(60px) rotate(6deg)" }}
              />
            </div>
            <div className="animate-float-slow [animation-delay:-3s]" style={{ "--float-rot": "-3deg" } as React.CSSProperties}>
              <CreditCard
                gradient="bg-gradient-to-br from-slate-700 to-slate-900"
                label="Any Card"
                discount="20% off fashion"
                className="left-10 top-64"
                style={{ transform: "translateZ(40px) rotate(-3deg)" }}
              />
            </div>

            {/* best-pick badge */}
            <div
              className="animate-bob absolute -right-2 top-24 z-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl ring-2 ring-xorange/20 [animation-delay:-0.8s]"
              style={{ transform: "translateZ(80px)" }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-xorange-bg">
                <Sparkles className="h-5 w-5 text-xorange" strokeWidth={2.25} />
              </span>
              <span>
                <p className="text-xs font-extrabold uppercase tracking-wide text-foreground/50">
                  Xelly says
                </p>
                <p className="font-display text-sm font-bold text-xorange">Use the orange one!</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
