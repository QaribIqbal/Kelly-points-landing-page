import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of Xally Points.",
  alternates: { canonical: "/terms" },
};

// DRAFT: have counsel review before launch and confirm it matches the app's real billing and offer terms.
export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="28 October 2026">
      <p>
        By using the Xally Points website or app you agree to these terms. If you do not agree, please
        do not use the service.
      </p>

      <h2>The service</h2>
      <p>
        Xally shows offers and recommends which of your cards may give the best discount. Offers come
        from third-party merchants and card issuers and can change or end without notice. Discounts are
        provided by those third parties, not by Xally.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You must provide accurate information and keep your sign-in details secure.</li>
        <li>You are responsible for activity under your account.</li>
        <li>You must be old enough to enter a binding agreement where you live.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the service, attempt to access it by unauthorised means, interfere with its
        operation, or use it for unlawful purposes.
      </p>

      <h2>Fees</h2>
      <p>
        Xally is free to download and use. If we introduce paid features, the price and billing terms
        will be shown clearly before you are charged.
      </p>

      <h2>Your rights and our liability</h2>
      <p>
        We provide the service &ldquo;as is&rdquo;. To the extent the law allows, we are not liable for
        indirect or consequential loss, or for offers that a merchant or issuer declines to honour.
        Nothing in these terms limits rights you have under applicable consumer law.
      </p>

      <h2>Termination</h2>
      <p>You may stop using Xally at any time. We may suspend access if these terms are breached.</p>

      <h2>Changes</h2>
      <p>We may update these terms and will change the date above when we do. Continued use means you accept the update.</p>
    </LegalLayout>
  );
}
