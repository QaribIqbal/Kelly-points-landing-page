"use client";

import { useRef, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({ children, className = "", maxTilt = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg) translateZ(8px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div className="perspective-1000">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`tilt-card ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
