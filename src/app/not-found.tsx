import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main id="main" className="flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <p className="text-7xl font-bold tracking-tight text-coral-deep">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">This page took the wrong card</h1>
        <p className="mt-3 max-w-md text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to the savings.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="flex min-h-12 items-center rounded-full bg-coral-deep px-8 font-semibold text-white active:scale-95">
            Back to home
          </Link>
          <Link href="/#how" className="flex min-h-12 items-center rounded-full px-6 font-semibold text-coral-deep hover:bg-coral-tint">
            See how it works <span aria-hidden className="ml-1.5">›</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
