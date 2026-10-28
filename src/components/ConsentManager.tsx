"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_EVENT, CONSENT_KEY, GA_ID } from "@/lib/site";

type Consent = "granted" | "denied" | null;

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(value: Exclude<Consent, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked: the choice simply lasts for this page view */
  }
  emit();
}

export default function ConsentManager() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => "denied" as Consent);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(CONSENT_EVENT, open);
    return () => window.removeEventListener(CONSENT_EVENT, open);
  }, []);

  const choose = useCallback((value: "granted" | "denied") => {
    writeConsent(value);
    setReopened(false);
  }, []);

  const showBanner = consent === null || reopened;

  return (
    <>
      {GA_ID && consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="material fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-3xl p-5 shadow-2xl ring-1 ring-black/10 sm:bottom-5"
        >
          <p className="text-[15px] font-semibold text-foreground">Cookies, your call</p>
          <p className="mt-1 text-sm leading-relaxed text-secondary">
            We use optional analytics cookies to see which parts of the site help. Nothing loads
            unless you accept. Read our <Link href="/privacy" className="font-medium text-coral-deep underline">privacy policy</Link>.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-11 flex-1 rounded-full bg-grouped px-5 text-sm font-semibold text-foreground transition-transform active:scale-95"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-11 flex-1 rounded-full bg-coral-deep px-5 text-sm font-semibold text-white transition-transform active:scale-95"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
