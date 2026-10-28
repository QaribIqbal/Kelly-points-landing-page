import Image from "next/image";
import Link from "next/link";
import mark from "@/assets/xally-mark.png";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#vision", label: "What’s next" },
];

export default function Navbar() {
  return (
    <header className="material fixed inset-x-0 top-0 z-50 border-b border-black/5">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6"
      >
        <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label="Xally Points home">
          <Image src={mark} alt="" height={26} className="h-[26px] w-auto" priority />
          <span className="text-[17px] font-semibold tracking-tight text-foreground">
            xally <span className="text-coral-deep">points</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-secondary transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#download"
          className="flex min-h-11 items-center rounded-full bg-coral-deep px-5 text-sm font-semibold text-white transition-[transform,background-color] hover:bg-[#b03719] active:scale-95"
        >
          Get the app
        </Link>
      </nav>
    </header>
  );
}
