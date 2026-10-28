import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Which cookies Xally Points uses on this website and how to control them.",
  alternates: { canonical: "/cookies" },
};

// DRAFT: have counsel review before launch.
export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="28 October 2026">
      <p>
        This page explains how the Xally Points website uses cookies and similar technologies, and how
        you can control them.
      </p>

      <h2>What we use</h2>
      <ul>
        <li><strong>Essential storage.</strong> We remember your cookie choice in your browser&apos;s local storage so we do not ask you again on every visit. This is needed for the site to respect your preference.</li>
        <li><strong>Analytics cookies (optional).</strong> If you accept, we load Google Analytics to understand how visitors use the site, such as which sections are viewed. IP addresses are anonymised. These cookies are not set unless you accept.</li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can accept or decline optional cookies in the banner shown on your first visit. To change
        your mind later, use &ldquo;Cookie settings&rdquo; in the footer. You can also block or delete
        cookies in your browser settings; the site will keep working.
      </p>

      <h2>More information</h2>
      <p>
        See our Privacy Policy for how we handle personal information more broadly.
      </p>
    </LegalLayout>
  );
}
