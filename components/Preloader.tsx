"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const letters = ["M", "A", "N", "I"];
  const numColumns = 10;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });

      // Typewriter effect - letters appear one by one with cursor blink
      tl.to(".name-text span", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: "power1.out",
        willChange: "transform, opacity",
      });

      // Hold the text visible
      tl.to(".name-text", {
        duration: 0.8,
      });

      // Columns animate upward while text is visible
      tl.to(
        ".preloader-item",
        {
          y: "-100%",
          opacity: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "sine.in",
          willChange: "transform, opacity",
        },
        "<0.2"
      );

      // Letters exit with typewriter backspace effect
      tl.to(
        ".name-text span",
        {
          y: -40,
          opacity: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "power2.in",
          willChange: "transform, opacity",
        },
        "-=0.3"
      );

      tl.to(
        preloaderRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
        },
        ">"
      );
    },
    { scope: preloaderRef }
  );

  return (
    <div className="fixed inset-0 z-[9999] flex bg-black" ref={preloaderRef}>
      {[...Array(numColumns)].map((_, index) => (
        <div
          key={index}
          className="preloader-item h-full w-[10%]"
          style={{ backgroundColor: "#6c2716" }}
        />
      ))}
      <p className="name-text absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-[20vw] leading-none lg:text-[200px]">
        {letters.map((letter, index) => (
          <span key={index} className="inline-block translate-y-full opacity-0">
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}
