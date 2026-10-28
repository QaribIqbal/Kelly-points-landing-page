"use client";

import { useEffect, useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

// Fine pointer + motion allowed; touch devices and reduced-motion users get a static card.
const canTilt = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TiltCard({ children, className = "", maxTilt = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width - 0.5;
      const py = (clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg) translateZ(4px)`;
    });
  };

  const handleLeave = () => {
    cancelAnimationFrame(frame.current);
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div className="perspective-1000 h-full">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`tilt-card ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
