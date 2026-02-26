"use client";

import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

export default function ScrollProgressIndicator() {
  const [hidden, setHidden] = useState(true);
  const [scroll, setScroll] = useState(0);
  const lenis = useLenis();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ progress }: Lenis) => {
      const nextScroll = +progress;
      setScroll((prev) => (prev === nextScroll ? prev : nextScroll));

      if (nextScroll > 0.01 && nextScroll < 0.99) {
        setHidden(false);
      } else {
        setHidden(true);
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setHidden(true);
      }, 300);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lenis]);

  return (
    <div
      className="fixed top-1/2 right-[2%] h-[150px] w-1.5 -translate-y-1/2 overflow-hidden rounded-full transition-opacity duration-500"
      style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        opacity: hidden ? 0 : 1,
      }}
    >
      <div
        className="w-full rounded-full"
        style={{
          height: `${scroll * 100}%`,
          backgroundColor: "#8b5cf6",
        }}
      />
    </div>
  );
}
