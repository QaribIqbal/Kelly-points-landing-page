import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryMarquee from "@/components/CategoryMarquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FutureWallet from "@/components/FutureWallet";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryMarquee />
        <HowItWorks />
        <Features />
        <FutureWallet />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
