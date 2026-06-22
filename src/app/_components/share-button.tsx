"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

const SHARE_DATA = {
  title: "TradesNKY",
  text: "Check out TradesNKY — career pathways for skilled trades in Northern Kentucky",
  url: "https://tradesnky.org",
};

/**
 * Share button. Uses the Web Share API (native share sheet) when available;
 * otherwise copies the URL to the clipboard and shows a brief "Copied!"
 * confirmation for 2 seconds. `className` lets the caller match the
 * surrounding button styling.
 */
export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(SHARE_DATA);
      } catch {
        // User dismissed the share sheet, or it failed — nothing to do.
      }
      return;
    }

    // Fallback: copy the URL and confirm on the button for 2s.
    try {
      await navigator.clipboard.writeText(SHARE_DATA.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — no-op.
    }
  };

  return (
    <button type="button" onClick={handleShare} className={className}>
      {copied ? (
        <>
          Copied!
          <Check className="h-4 w-4" aria-hidden="true" />
        </>
      ) : (
        <>
          Share TradesNKY
          <Share2 className="h-4 w-4" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
