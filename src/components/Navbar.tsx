export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-xorange to-amber-500 font-display text-lg font-bold text-white shadow-md shadow-xorange/30">
            X
          </span>
          <span className="font-display text-xl font-bold text-foreground">
            Xelly <span className="text-xblue">Points</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 font-bold text-foreground/60 md:flex">
          <a href="#how" className="transition-colors hover:text-xorange">How it works</a>
          <a href="#features" className="transition-colors hover:text-xorange">Features</a>
          <a href="#vision" className="transition-colors hover:text-xorange">What&apos;s next</a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-xblue px-5 py-2.5 text-sm font-extrabold text-white shadow-md shadow-xblue/30 transition-transform hover:-translate-y-0.5 hover:scale-105"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
