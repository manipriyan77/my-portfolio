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
    <section className="py-[250px]" id="my-experience">
      <div className="container" ref={containerRef}>
        <SectionTitle title="My Experience" />
        <div className="grid gap-14">
          {EXPERIENCES.map((item) => (
            <div key={item._id} className="experience-item">
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
