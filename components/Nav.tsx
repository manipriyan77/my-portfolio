"use client";

import { useLenis } from "lenis/react";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

import { GENERAL_INFO, SOCIAL_LINKS } from "@/lib/data";

const COLORS = [
  "bg-yellow-500 text-black",
  "bg-blue-500 text-white",
  "bg-teal-500 text-black",
  "bg-indigo-500 text-white",
];

const MENU_LINKS = [
  { name: "Home", url: "#" },
  { name: "About Me", url: "#about-me" },
  { name: "Experience", url: "#my-experience" },
  { name: "Projects", url: "#selected-projects" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleClick = (target: string) => {
    if (!lenis) return;
    if (target === "#") {
      lenis.scrollTo(0);
    } else {
      lenis.scrollTo(target, { offset: -30 });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40">
        <button
          className="no-cursor group absolute top-5 right-5 z-20 size-12 cursor-pointer md:right-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className="absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 rounded-full bg-white duration-300"
            style={{
              transform: isMenuOpen
                ? "translate(-50%, -50%) rotate(45deg) scaleX(0.8)"
                : "translate(-50%, calc(-50% - 5px))",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
          <span
            className="absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 rounded-full bg-white duration-300"
            style={{
              transform: isMenuOpen
                ? "translate(-50%, -50%) rotate(-45deg) scaleX(0.8)"
                : "translate(-50%, calc(-50% + 5px))",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-20 bg-black/70 transition-all duration-300"
        style={{
          pointerEvents: isMenuOpen ? "auto" : "none",
          visibility: isMenuOpen ? "visible" : "hidden",
          opacity: isMenuOpen ? 1 : 0,
          backdropFilter: isMenuOpen ? "blur(4px)" : "blur(0px)",
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out panel */}
      <div
        className="fixed top-0 right-0 z-30 h-svh w-[500px] max-w-[calc(100vw-3rem)] overflow-hidden transition-transform duration-500 flex flex-col py-10 lg:justify-center gap-y-14"
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Background bubble */}
        <div
          className="fixed inset-0 z-[-1] rounded-[50%] duration-500"
          style={{
            backgroundColor: "#8b5cf6",
            transform: isMenuOpen
              ? "translateX(0) scale(1.5)"
              : "translateX(50%) scale(1.5)",
            transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />

        <div className="mx-8 flex w-full max-w-[300px] grow sm:mx-auto md:items-center">
          <div className="flex w-full gap-10 max-lg:flex-col lg:justify-between">
            <div className="max-lg:order-2">
              <p className="mb-5 text-white md:mb-8">SOCIAL</p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-lg capitalize hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="mb-5 md:mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                MENU
              </p>
              <ul className="space-y-3">
                {MENU_LINKS.map((link, idx) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        handleClick(link.url);
                        setIsMenuOpen(false);
                      }}
                      className="no-cursor group flex items-center gap-3 text-xl"
                    >
                      <span
                        className={`flex size-3.5 items-center justify-center rounded-full transition-all group-hover:scale-[200%] ${COLORS[idx]}`}
                        style={{ backgroundColor: undefined }}
                      >
                        <MoveUpRight
                          size={8}
                          className="scale-0 transition-all group-hover:scale-100"
                        />
                      </span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-8 w-full max-w-[300px] sm:mx-auto">
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            GET IN TOUCH
          </p>
          <a className="text-lg" href={`mailto:${GENERAL_INFO.email}`}>
            {GENERAL_INFO.email}
          </a>
        </div>
      </div>
    </>
  );
}
