"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { EXPERIENCES } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });
      tl.from(".experience-item", { y: 50, opacity: 0, stagger: 0.3 });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
      tl.to(containerRef.current, { y: -150, opacity: 0 });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-section" id="my-experience">
      <div className="container" ref={containerRef}>
        <SectionTitle title="My Experience" />
        <div className="relative grid gap-14 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10">
          {EXPERIENCES.map((item) => (
            <div key={item._id} className="experience-item relative">
              <span
                className="absolute -left-7.25 top-1.5 size-3 rounded-full border-2 border-white/20"
                style={{ backgroundColor: "#8b5cf6" }}
              />
              <p className="cursor text-xl text-white/80">{item.company}</p>
              <p className="cursor mt-3.5 mb-2.5 text-3xl leading-none md:text-4xl">
                {item.title}
              </p>
              <p className="cursor text-lg text-white/80">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
