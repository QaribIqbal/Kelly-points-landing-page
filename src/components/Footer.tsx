export default function Footer() {
  return (
    <footer className="bg-xblue-deep py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-xorange to-amber-500 font-display font-bold text-white">
            X
          </span>
          <span className="font-display text-lg font-bold">Xelly Points</span>
        </div>
        <p className="text-sm font-semibold text-white/60">
          © {new Date().getFullYear()} Xelly Points. Making wallets happier, one tap at a time.
        </p>
        <div className="flex gap-6 text-sm font-bold text-white/70">
          <a href="#" className="transition-colors hover:text-xorange-soft">Privacy</a>
          <a href="#" className="transition-colors hover:text-xorange-soft">Terms</a>
          <a href="#" className="transition-colors hover:text-xorange-soft">Contact</a>
        </div>
      </div>
    </footer>
  );
}
