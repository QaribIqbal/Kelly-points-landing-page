import Image from "next/image";
import Link from "next/link";
import mark from "@/assets/xally-mark.png";
import { CONTACT_EMAIL } from "@/lib/site";
import CookieSettingsButton from "./CookieSettingsButton";

const linkClass =
  "flex min-h-11 items-center rounded-lg px-1 text-sm text-secondary transition-colors hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-separator/60 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <Image src={mark} alt="" height={22} className="h-[22px] w-auto" />
          <span className="text-base font-semibold tracking-tight">
            xally <span className="text-coral-deep">points</span>
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5">
          <Link href="/privacy" className={linkClass}>Privacy</Link>
          <Link href="/terms" className={linkClass}>Terms</Link>
          <Link href="/cookies" className={linkClass}>Cookies</Link>
          <Link href="/support" className={linkClass}>Support</Link>
          <CookieSettingsButton className={linkClass} />
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>Contact</a>
          )}
        </nav>

        <p className="text-center text-sm text-secondary">
          © {new Date().getFullYear()} Xally Points. Making wallets happier, one tap at a time.
        </p>
      </div>
    </footer>
  );
}
