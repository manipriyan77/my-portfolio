"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { SKILLS } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");
      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });

      tl.from(slideUpEl, { opacity: 0, y: 40, ease: "none", stagger: 0.4 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.to(containerRef.current, { y: -150, opacity: 0 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <section id="my-stack" ref={containerRef}>
      <div className="container">
        <SectionTitle title="My Stack" />
        <div className="space-y-20">
          {SKILLS.map(({ type, items }) => (
            <div className="grid md:grid-cols-12" key={type}>
              <div className="mb-10 md:col-span-5 md:mb-0">
                <p className="slide-up text-5xl leading-none text-white/80 uppercase">
                  {type}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-11 gap-y-9 md:col-span-7">
                {items.map((item) => (
                  <div
                    className="slide-up flex items-center gap-3.5 leading-none transition-transform duration-200 hover:scale-110 hover:translate-x-2"
                    key={item.name}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="max-h-10"
                      />
                    </div>
                    <span className="text-2xl capitalize">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
