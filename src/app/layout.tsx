import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Comfortaa, Geist } from "next/font/google";
import "./globals.css";
import { Nav } from "./_components/nav";
import { NavHeightObserver } from "./_components/nav-height-observer";
import { ScrollManager } from "./_components/scroll-manager";
import { Footer } from "./_components/Footer";
import { CookieConsent } from "./_components/cookie-consent";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const galano = localFont({
  variable: "--font-galano",
  display: "swap",
  src: [
    { path: "./fonts/GalanoGrotesqueLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/GalanoGrotesqueRegular.otf", weight: "400", style: "normal" },
    { path: "./fonts/GalanoGrotesqueItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/GalanoGrotesqueMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/GalanoGrotesqueSemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/GalanoGrotesqueBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/GalanoGrotesqueBoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/GalanoGrotesqueExtraBold.otf", weight: "800", style: "normal" },
    { path: "./fonts/GalanoGrotesqueHeavy.otf", weight: "900", style: "normal" },
    { path: "./fonts/GalanoGrotesqueBlack.otf", weight: "950", style: "normal" },
    { path: "./fonts/GalanoGrotesqueBlackItalic.otf", weight: "950", style: "italic" },
  ],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trades NKY — Build Skills. Build Futures.",
  description:
    "Connecting K-12 students in Northern Kentucky to skilled trades careers. Real careers, real paychecks, no student debt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", galano.variable, montserrat.variable, comfortaa.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-tnky-cream text-tnky-ink font-body antialiased">
        <Nav />
        <NavHeightObserver />
        <ScrollManager />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
