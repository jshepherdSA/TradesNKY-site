import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | Trades NKY",
  description:
    "TradesNKY connects schools, industry, and community partners to prepare Northern Kentucky students for high-demand skilled-trades careers.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
