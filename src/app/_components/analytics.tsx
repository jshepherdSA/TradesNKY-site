"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "@/lib/consent";

/**
 * Google Analytics (GA4) + Google Tag Manager, gated behind cookie consent.
 *
 * These tags do NOT load on page view. They mount only once the visitor has
 * accepted the "Analytics & Performance" category in the consent banner, which
 * is what the site's Cookie Policy promises. On decline — or before any choice
 * is made — nothing is injected.
 *
 * The raw <script> snippets Google hands out load unconditionally; that would
 * contradict the banner, so the equivalent tags are rendered here conditionally
 * instead. There is deliberately no GTM <noscript> iframe: that fallback is for
 * JavaScript-disabled visitors, who can neither be shown the banner nor record
 * a consent choice, so firing a tag for them would bypass the gate.
 */

const GA_MEASUREMENT_ID = "G-JKT9H7JDLM";
const GTM_CONTAINER_ID = "GTM-PBJP6BWF";

export function Analytics() {
  const consent = useConsent();
  const analyticsAllowed = consent?.categories.analytics === true;

  // GA's built-in kill switch. If a visitor consented earlier this session
  // (loading gtag.js) and then revokes analytics consent, gtag.js can't be
  // unloaded — but honoring this flag stops it sending any further hits.
  useEffect(() => {
    (window as unknown as Record<string, boolean>)[
      `ga-disable-${GA_MEASUREMENT_ID}`
    ] = !analyticsAllowed;
  }, [analyticsAllowed]);

  if (!analyticsAllowed) return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
      </Script>

      {/* Google Analytics (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
