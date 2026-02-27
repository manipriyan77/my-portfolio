"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import ShinyText from "./ShinyText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });
      tl.from(".slide-up-and-fade", { y: 150, opacity: 0, stagger: 0.05 });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });
      tl.to(".slide-up-and-fade", { y: -150, opacity: 0, stagger: 0.02 });
    },
    { scope: container },
  );

  return (
    <section className="pb-[250px]" id="about-me">
      <div className="container" ref={container}>
        <h2 className="slide-up-and-fade mb-20 text-4xl md:text-6xl">
          <ShinyText
            className="cursor"
            text="I build fast, user-friendly web applications and deploy them on robust cloud infrastructure — creating seamless experiences at scale."
          />
        </h2>

        <p className="slide-up-and-fade border-b pb-3 text-gray-400">
          This is me.
        </p>

        <div className="mt-9 grid items-start gap-8 md:grid-cols-12">
          <div className="cursor space-y-4 md:col-span-5">
            <h1 className="slide-up-and-fade text-4xl leading-tight font-semibold sm:text-5xl">
              I&apos;m Mani Priyan.
            </h1>
            <p className="slide-up-and-fade max-w-md text-lg text-white/75">
              Also known as Mani, a Frontend Developer with cloud engineering
              expertise — I specialize in building responsive interfaces and
              deploying scalable cloud solutions.
            </p>
          </div>

          <div className="cursor md:col-span-7">
            <div className="max-w-[500px] space-y-3 text-base text-white/80 sm:text-lg">
              <p className="slide-up-and-fade">
                I focus on frontend development and cloud infrastructure. From
                building interactive UIs and optimizing performance to deploying
                applications on cloud platforms — I create solutions that are
                both beautiful and reliable.
              </p>
              <p className="slide-up-and-fade">
                Whether it's making a UI fast enough to feel instant or making a
                backend resilient enough to handle failure gracefully, I focus
                on the decisions that matter long after the first deploy.
              </p>
            </div>
          </div>

          <div className="slide-up-and-fade col-span-full mt-10 overflow-hidden">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: "marquee 16s linear infinite" }}
            >
              {[...Array(4)].map((_, i) => (
                <span
                  key={i}
                  className="shrink-0 pr-16 text-xl uppercase lg:text-4xl"
                  style={{ color: "#8b5cf6" }}
                >
                  i can&apos;t stop learning and building
                  <span className="mx-6 opacity-30">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
