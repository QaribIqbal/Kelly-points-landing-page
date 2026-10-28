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
  return (
    <section
      aria-label="Offer categories"
      className="marquee relative overflow-hidden border-y border-separator/60 bg-white py-5"
    >
      <div className="animate-marquee flex w-max gap-3">
        {[0, 1].map((copy) =>
          categories.map((cat) => (
            <span
              key={`${copy}-${cat.label}`}
              aria-hidden={copy === 1}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-grouped px-5 py-2.5 text-[15px] font-medium text-foreground"
            >
              <cat.icon className="h-5 w-5 text-coral-deep" strokeWidth={2} aria-hidden />
              {cat.label}
            </span>
          )),
        )}
      </div>
    </section>
  );
}
