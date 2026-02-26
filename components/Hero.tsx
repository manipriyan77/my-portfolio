"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import Magnet from "./Magnet";
import ShinyText from "./ShinyText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 1.5 });
      tl.from(".banner-title", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });
      tl.from(
        ".hero-tagline",
        { y: 40, opacity: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
      tl.from(
        ".hero-cta",
        { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    (context: gsap.Context) => {
      if (!context) return;

      const animateUps = context.selector?.(".animateUp") ?? [];

      if (animateUps.length > 0) {
        const wrapperTl = gsap.timeline();

        wrapperTl
          .to(".wrapper", { overflow: "hidden", duration: 0.4 })
          .from(animateUps, {
            y: "100%",
            duration: 2,
            delay: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: codeRef.current,
              start: "top+=100 bottom",
              toggleActions: "play none none reverse",
            },
          });
      }
    },
    { scope: codeRef }
  );

  return (
    <section id="banner" className="relative">
      <div
        className="container flex h-svh justify-center gap-10 max-lg:flex-col max-md:pb-10 lg:items-end lg:justify-between lg:gap-0"
        ref={containerRef}
      >
        <div className="max-w-[544px] flex-col items-start justify-center self-center pt-20 max-lg:flex md:pt-0">
          <h1 className="banner-title slide-up-and-fade text-6xl leading-[.95] sm:text-[80px]">
            <span className="cursor" style={{ color: "#8b5cf6" }}>
              SOFTWARE
            </span>
            <br />
            <span className="cursor lg:ml-4">ARCHITECT</span>
          </h1>
          <ShinyText
            className="slide-up-and-fade hero-tagline cursor text-lg md:text-xl"
            text="Hi! I'm Mani Priyan. I architect scalable frontend systems and cloud infrastructure — turning complex requirements into clean, performant, and maintainable solutions."
          />
          <Magnet magnetStrength={4} wrapperClassName="hero-cta">
            <button
              className="slide-up-and-fade cursor mt-9 rounded-md font-semibold text-white transition-colors duration-500 hover:text-black group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase tracking-widest outline-none relative overflow-hidden"
              style={{ backgroundColor: "#8b5cf6" }}
              onClick={() => {
                document
                  .getElementById("selected-projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute top-[200%] right-0 left-0 h-full scale-150 rounded-[50%] bg-white transition-all duration-500 group-hover:top-0" />
              <span className="z-10">My Projects</span>
            </button>
          </Magnet>
        </div>

        <div className="cursor lg:mb-20">
          <code
            ref={codeRef}
            className="slide-up-and-fade hidden flex-col text-xs tracking-widest text-white md:text-sm lg:flex"
          >
            <span
              className="block text-lg font-bold"
              style={{ color: "#8b5cf6" }}
            >
              {"<span>"}
            </span>
            <div className="inline-block leading-7 md:translate-x-5">
              <div className="wrapper">
                <span className="animateUp inline-block">
                  Bridging frontend precision and cloud-scale
                </span>
              </div>
              <div className="wrapper">
                <span className="animateUp inline-block">
                  thinking — shipping systems that perform
                </span>
              </div>
              <div className="wrapper">
                <span className="animateUp inline-block">
                  under pressure, at any scale.
                </span>
              </div>
            </div>
            <span
              className="block text-lg font-bold"
              style={{ color: "#8b5cf6" }}
            >
              {"</span>"}
            </span>
          </code>

          <code className="slide-up-and-fade flex flex-col text-xs tracking-widest text-white lg:hidden lg:text-sm">
            <span
              className="block text-lg font-bold"
              style={{ color: "#8b5cf6" }}
            >
              {"<span>"}
            </span>
            <div className="inline-block leading-7 lg:translate-x-5">
              <span className="ms-4 inline-block">
                Bridging frontend precision and cloud-scale thinking — shipping systems that perform under pressure, at any scale.
              </span>
            </div>
            <span
              className="block text-lg font-bold"
              style={{ color: "#8b5cf6" }}
            >
              {"</span>"}
            </span>
          </code>
        </div>
      </div>
    </section>
  );
}
