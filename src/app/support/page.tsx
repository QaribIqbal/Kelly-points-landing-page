import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Xally Points: answers to common questions and how to contact us.",
  alternates: { canonical: "/support" },
};

const faqs = [
  {
    q: "How does Xally pick the best card?",
    a: "You add your credit cards, and Xally matches them against the offers near you. It then ranks your cards by the discount each one unlocks at that place.",
  },
  {
    q: "Is Xally free?",
    a: "Yes. Xally is free to download and use. If we ever add paid features, the price will be shown clearly before you are charged.",
  },
  {
    q: "Why does Xally ask for my location?",
    a: "Only to show offers near where you are. Location is optional and you can turn it off at any time in your device settings.",
  },
  {
    q: "How do I delete my account or data?",
    a: "Contact us using the details below and we will remove your account and the information linked to it.",
  },
  {
    q: "An offer didn’t work. What should I do?",
    a: "Offers come from merchants and card issuers and can change without notice. Tell us the place, card and date and we will look into it.",
  },
];

export default function SupportPage() {
  return (
    <LegalLayout title="Support" updated="28 October 2026">
      <p>
        Need a hand with Xally Points? Start with the answers below. If you still need help, get in
        touch and we will get back to you.
      </p>

      <div className="rounded-3xl bg-grouped p-6">
        <p className="flex items-center gap-2 font-semibold text-foreground">
          <Mail className="h-5 w-5 text-coral-deep" aria-hidden /> Contact us
        </p>
        {CONTACT_EMAIL ? (
          <p className="mt-2">
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-coral-deep underline">
              {CONTACT_EMAIL}
            </a>
            . Please include your device and a short description of the problem.
          </p>
        ) : (
          <p className="mt-2">Contact details will be published here soon.</p>
        )}
      </div>

      <h2>Frequently asked questions</h2>
      <div className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold text-foreground">{f.q}</h3>
            <p className="mt-1">{f.a}</p>
          </div>
        ))}
      </div>

      <p className="pt-4">
        See also our <Link href="/privacy" className="font-medium text-coral-deep underline">Privacy Policy</Link>{" "}
        and <Link href="/terms" className="font-medium text-coral-deep underline">Terms &amp; Conditions</Link>.
      </p>
    </LegalLayout>
  );
}
