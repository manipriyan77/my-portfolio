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
        y: 120,
        opacity: 0,
        rotation: -5,
        duration: 1.2,
        ease: "cubic.out",
      });
      tl.from(
        ".hero-tagline",
        { y: 50, opacity: 0, x: -30, duration: 1, ease: "back.out" },
        "-=0.7",
      );
      tl.from(
        ".hero-cta",
        {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      );
    },
    { scope: containerRef },
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
        { y: -180, opacity: 0, rotation: 3, stagger: 0.03 },
      );
    },
    { scope: containerRef },
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
            x: "-20px",
            opacity: 0,
            duration: 1.8,
            delay: 1.5,
            ease: "back.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: codeRef.current,
              start: "top+=100 bottom",
              toggleActions: "play none none reverse",
            },
          });
      }
    },
    { scope: codeRef },
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
              FULLSTACK
            </span>
            <br />
            <span className="cursor lg:ml-4">DEVELOPER</span>
          </h1>
          <ShinyText
            className="slide-up-and-fade hero-tagline cursor text-lg md:text-xl"
            text="Hi! I'm Mani Priyan. A fullstack developer specializing in frontend engineering and cloud infrastructure — building fast, responsive web applications and scalable backend systems."
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
                  Crafting beautiful frontends and robust
                </span>
              </div>
              <div className="wrapper">
                <span className="animateUp inline-block">
                  cloud infrastructure — shipping web apps
                </span>
              </div>
              <div className="wrapper">
                <span className="animateUp inline-block">
                  that perform and scale with ease.
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
                Crafting beautiful frontends and robust cloud infrastructure —
                shipping web apps that perform and scale with ease.
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
