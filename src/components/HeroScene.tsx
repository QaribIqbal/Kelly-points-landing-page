"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

function CreditCard({
  tone,
  label,
  discount,
  className = "",
  style,
}: {
  tone: string;
  label: string;
  discount: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`card-shine absolute w-56 rounded-[22px] p-5 text-white shadow-[0_24px_48px_-12px_rgba(44,56,53,0.35)] sm:w-64 ${tone} ${className}`}
      style={style}
    >
      <div className="flex items-start justify-between">
        <div className="h-8 w-11 rounded-md bg-gradient-to-br from-white/80 to-white/40" />
        <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-semibold">{discount}</span>
      </div>
      <p className="mt-6 font-mono text-sm tracking-[0.2em] opacity-90">•••• •••• •••• 4242</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{label}</span>
        <div className="flex -space-x-2" aria-hidden>
          <div className="h-6 w-6 rounded-full bg-white/60" />
          <div className="h-6 w-6 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export default function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = sceneRef.current;
    if (
      !el ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    if (sceneRef.current) sceneRef.current.style.transform = "";
  };

  return (
    <div
      className="perspective-1000 relative mx-auto h-[26rem] w-full max-w-md lg:h-[30rem]"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      role="img"
      aria-label="Three credit cards floating, with Xally recommending the coral card for 30% off food"
    >
      <div
        ref={sceneRef}
        className="preserve-3d relative h-full w-full transition-transform duration-300 ease-out"
      >
        <div className="animate-float-slow" style={{ "--float-rot": "-8deg" } as React.CSSProperties}>
          <CreditCard
            tone="bg-gradient-to-br from-green to-green-deep"
            label="Travel card"
            discount="15% off travel"
            className="left-0 top-8"
            style={{ transform: "translateZ(20px) rotate(-8deg)" }}
          />
        </div>
        <div className="animate-float" style={{ "--float-rot": "6deg" } as React.CSSProperties}>
          <CreditCard
            tone="bg-gradient-to-br from-coral to-coral-deep"
            label="Dining card"
            discount="30% off food"
            className="right-0 top-36"
            style={{ transform: "translateZ(60px) rotate(6deg)" }}
          />
        </div>
        <div
          className="animate-float-slow [animation-delay:-3s]"
          style={{ "--float-rot": "-3deg" } as React.CSSProperties}
        >
          <CreditCard
            tone="bg-gradient-to-br from-[#4a5a56] to-ink"
            label="Any card"
            discount="20% off fashion"
            className="left-10 top-64"
            style={{ transform: "translateZ(40px) rotate(-3deg)" }}
          />
        </div>

        <div
          className="animate-bob absolute -right-1 top-20 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 [animation-delay:-0.8s]"
          style={{ transform: "translateZ(80px)" }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral-tint">
            <Sparkles className="h-5 w-5 text-coral-deep" strokeWidth={2.25} aria-hidden />
          </span>
          <span>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary">Xally says</p>
            <p className="text-sm font-semibold text-foreground">Use the coral one</p>
          </span>
        </div>
      </div>
    </div>
  );
}
