import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-5 pb-24 pt-32 sm:px-6">
        <h1 className="text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-secondary">Last updated {updated}</p>
        <div className="mt-10 space-y-4 leading-relaxed text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
