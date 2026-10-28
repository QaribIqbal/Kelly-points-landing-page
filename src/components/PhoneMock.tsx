import { BadgeCheck, Nfc } from "lucide-react";

const cards = [
  { name: "Dining card", off: "30% off", tone: "from-coral to-coral-deep", best: true },
  { name: "Travel card", off: "10% off", tone: "from-green to-green-deep", best: false },
  { name: "Everyday card", off: "5% off", tone: "from-[#4a5a56] to-ink", best: false },
];

/** HTML phone mockup in the Xally palette; replaces the old raster screenshot. */
export default function PhoneMock() {
  return (
    <div
      role="img"
      aria-label="Phone showing Xally auto-picking the Dining card with 30% off at Bella's Pizza, ready for tap-to-pay"
      className="animate-float-slow relative w-56 rounded-[2.75rem] bg-ink p-2.5 shadow-[0_40px_80px_-20px_rgba(44,56,53,0.5)] sm:w-64"
      style={{ "--float-rot": "0deg" } as React.CSSProperties}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-grouped px-4 pb-6 pt-3">
        <div className="mx-auto h-5 w-20 rounded-full bg-ink" aria-hidden />
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-secondary">Now at</p>
        <p className="text-lg font-bold tracking-tight text-foreground">Bella&apos;s Pizza</p>

        <div className="mt-4 space-y-2.5">
          {cards.map((c) => (
            <div
              key={c.name}
              className={`flex items-center justify-between rounded-2xl bg-gradient-to-br ${c.tone} px-3.5 py-3 text-white ${
                c.best ? "shadow-lg ring-2 ring-white" : "opacity-70"
              }`}
            >
              <span className="text-[13px] font-semibold">{c.name}</span>
              <span className="flex items-center gap-1 text-[13px] font-bold">
                {c.best && <BadgeCheck className="h-4 w-4" aria-hidden />}
                {c.off}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-center gap-1.5 rounded-2xl bg-white py-4 shadow-sm">
          <Nfc className="h-7 w-7 text-green-deep" strokeWidth={2} aria-hidden />
          <p className="text-[13px] font-semibold text-foreground">Hold near reader</p>
          <p className="text-[11px] text-secondary">Dining card selected</p>
        </div>
      </div>
    </div>
  );
}
