"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function ScrollButton({ scrollToTop = false }: { scrollToTop?: boolean }) {
  const lenis = useLenis();
  const circleRef = useRef<SVGCircleElement | null>(null);

  const handleClick = () => {
    if (!lenis) return;
    if (scrollToTop) {
      lenis.scrollTo(0);
    } else {
      lenis.scrollTo("#selected-projects", { offset: -30 });
    }
  };

  useGSAP(() => {
    if (circleRef.current) {
      const length = circleRef.current.getTotalLength();
      gsap.set(circleRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
      gsap.to(circleRef.current, {
        strokeDashoffset: 0 - length,
        duration: 5,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <button
      onClick={handleClick}
      className="cursor group relative size-[120px] cursor-pointer opacity-20"
      style={{ transform: scrollToTop ? "rotate(180deg)" : undefined }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="48"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
      <div className="flex aspect-square w-full items-center justify-center rounded-full">
        <ChevronDown className="size-20 transition duration-300" />
      </div>
    </button>
  );
}
