"use client";

import Script from "next/script";

/**
 * Contact form — JotForm embed (form ID 262255355524053).
 *
 * The `<script src=".../jsform/ID">` snippet JotForm hands out relies on
 * `document.write`, which no-ops once React has hydrated, so it can't be used
 * inside an App-Router client component. This renders the equivalent iframe
 * embed instead and loads JotForm's embed handler, which posts height messages
 * back so the iframe auto-resizes to the form's content (no inner scrollbar).
 */

const FORM_ID = "262255355524053";
const JOTFORM_ORIGIN = "https://form.jotform.com";

export function JotformContact() {
  return (
    <div>
      <iframe
        id={`JotFormIFrame-${FORM_ID}`}
        title="Contact Trades NKY"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={`${JOTFORM_ORIGIN}/${FORM_ID}`}
        scrolling="no"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          width: "100%",
          height: "760px",
          border: "none",
        }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as {
            jotformEmbedHandler?: (selector: string, origin: string) => void;
          };
          w.jotformEmbedHandler?.(
            `iframe[id='JotFormIFrame-${FORM_ID}']`,
            JOTFORM_ORIGIN,
          );
        }}
      />
    </div>
  );
}
