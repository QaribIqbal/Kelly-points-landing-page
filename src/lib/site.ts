export const SITE_NAME = "Xally Points";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Add your credit cards and unlock millions of offers. Xally Points tells you which card gets you the biggest discount, wherever you are.";

// Store listings and contact address are optional; sections hide or soften
// when they are not configured, so the page never ships a dead link.
export const IOS_URL = process.env.NEXT_PUBLIC_IOS_URL ?? "";
export const ANDROID_URL = process.env.NEXT_PUBLIC_ANDROID_URL ?? "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const CONSENT_KEY = "xally-cookie-consent";
export const CONSENT_EVENT = "xally:open-consent";
