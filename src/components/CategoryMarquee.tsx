import {
  Clapperboard,
  Coffee,
  Dumbbell,
  Fuel,
  Gamepad2,
  Hotel,
  Plane,
  Shirt,
  ShoppingCart,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const categories: { label: string; icon: LucideIcon }[] = [
  { label: "Food & Dining", icon: UtensilsCrossed },
  { label: "Fashion", icon: Shirt },
  { label: "Travel", icon: Plane },
  { label: "Fitness", icon: Dumbbell },
  { label: "Entertainment", icon: Clapperboard },
  { label: "Coffee", icon: Coffee },
  { label: "Groceries", icon: ShoppingCart },
  { label: "Beauty", icon: Sparkles },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Fuel", icon: Fuel },
  { label: "Hotels", icon: Hotel },
  { label: "Electronics", icon: Smartphone },
];

export default function CategoryMarquee() {
  const row = [...categories, ...categories];
  return (
    <section className="relative overflow-hidden border-y-4 border-xblue/10 bg-xblue py-5">
      <div className="animate-marquee flex w-max gap-4">
        {row.map((cat, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white/10 px-6 py-2 font-display text-lg font-semibold text-white backdrop-blur-sm"
          >
            <cat.icon className="h-5 w-5 text-xorange-soft" strokeWidth={2.25} aria-hidden />
            {cat.label}
          </span>
        ))}
      </div>
    </section>
  );
}
