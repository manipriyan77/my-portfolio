import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ParticleBackground from "@/components/ParticleBackground";
import Preloader from "@/components/Preloader";
import ScrollButton from "@/components/ScrollButton";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import StickyEmail from "@/components/StickyEmail";

import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Mani Priyan | %s",
    default: "Mani Priyan | Full-Stack Developer",
  },
  description:
    "Full-Stack developer building modern, responsive web applications. Personal portfolio of Mani Priyan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative text-white antialiased select-none`}
        style={{ backgroundColor: "#0c0a14" }}
      >
        <ReactLenis root options={{ lerp: 0.1, duration: 1.4 }}>
          <Nav />
          <div className="flex min-h-screen flex-col">
            <main className="relative flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollProgressIndicator />
          <Preloader />
          <Cursor />
          <StickyEmail />
          <ParticleBackground />
          <div className="relative mx-auto max-w-[1600px]">
            <div className="right-6 bottom-6 hidden xl:absolute xl:block">
              <ScrollButton scrollToTop />
            </div>
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
