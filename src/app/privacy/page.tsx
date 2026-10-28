import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Xally Points collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

// DRAFT: have counsel review before launch and confirm it matches the app's real data flows.
export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="28 October 2026">
      <p>
        Xally Points (&ldquo;Xally&rdquo;, &ldquo;we&rdquo;) helps you find the credit card that earns
        the biggest discount at a given place. This policy explains what we collect, why, and the
        choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account details</strong> such as your name and email when you sign in.</li>
        <li><strong>Card information you add</strong> so we can match offers to your cards. We do not need your full card number or security code to show you offers.</li>
        <li><strong>Location</strong>, only when you allow it in your device settings, to surface offers nearby.</li>
        <li><strong>Usage and device data</strong> such as pages viewed and app interactions, to keep the service reliable.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To show you offers and recommend the best card for where you are.</li>
        <li>To operate, secure and improve the service.</li>
        <li>To communicate with you about your account and support requests.</li>
      </ul>

      <h2>Cookies and analytics on this website</h2>
      <p>
        This website uses optional analytics cookies only if you choose &ldquo;Accept&rdquo; in the
        cookie banner. If you decline, no analytics scripts load. You can change your choice at any
        time with &ldquo;Cookie settings&rdquo; in the footer. See our <a href="/cookies" className="font-medium text-coral-deep underline">Cookie Policy</a> for details.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only with service providers who help us
        run Xally (for example hosting and authentication), and when the law requires it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can access, correct or delete your information, withdraw location permission, and opt out
        of analytics at any time. To make a request, contact us using the details on our website or
        in the app.
      </p>

      <h2>Retention and security</h2>
      <p>
        We keep information only as long as needed to provide the service or meet legal obligations,
        and protect it with industry-standard safeguards.
      </p>

      <h2>Changes</h2>
      <p>If we make material changes we will update the date above and, where appropriate, notify you.</p>
    </LegalLayout>
  );
}
