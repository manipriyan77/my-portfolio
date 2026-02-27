"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function ParticleBackground() {
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!particlesRef.current.length) return;

    particlesRef.current.forEach((particle, index) => {
      const duration = Math.random() * 12 + 15;
      const xMovement = (Math.random() - 0.5) * 200; // Horizontal drift
      const delay = (index / particlesRef.current.length) * 2; // Stagger effect

      gsap.set(particle, {
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight,
      });

      // Floating upward with horizontal drift and rotation
      gsap.to(particle, {
        y: -window.innerHeight * 1.5,
        x: xMovement,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "sine.inOut",
        willChange: "transform, opacity",
      });
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-white"
        />
      ))}
    </div>
  );
}
