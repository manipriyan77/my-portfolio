"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MouseEvent, useRef, useState } from "react";

import { PROJECTS } from "@/lib/data";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ProjectItem({
  index,
  project,
  selectedProject,
  onMouseEnter,
}: {
  index: number;
  project: (typeof PROJECTS)[0];
  selectedProject: string | null;
  onMouseEnter: (slug: string) => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const boxRef = useRef<SVGPathElement>(null);
  const arrowLineRef = useRef<SVGPathElement>(null);
  const arrowCurbRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    return () => { timelineRef.current?.kill(); };
  }, { scope: svgRef });

  const handleMouseEnter = () => {
    if (!svgRef.current || !boxRef.current || !arrowLineRef.current || !arrowCurbRef.current) return;
    onMouseEnter(project.slug);

    const boxLength = boxRef.current.getTotalLength();
    const arrowLineLength = arrowLineRef.current.getTotalLength();
    const arrowCurbLength = arrowCurbRef.current.getTotalLength();

    gsap.set(svgRef.current, { autoAlpha: 0 });
    gsap.set(boxRef.current, { opacity: 0, strokeDasharray: boxLength, strokeDashoffset: boxLength });
    gsap.set(arrowLineRef.current, { opacity: 0, strokeDasharray: arrowLineLength, strokeDashoffset: arrowLineLength });
    gsap.set(arrowCurbRef.current, { opacity: 0, strokeDasharray: arrowCurbLength, strokeDashoffset: arrowCurbLength });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(svgRef.current, { autoAlpha: 1, duration: 0.2 })
      .to(boxRef.current, { opacity: 1, strokeDashoffset: 0, duration: 0.4 })
      .to(arrowLineRef.current, { opacity: 1, strokeDashoffset: 0, duration: 0.4 }, "<0.2")
      .to(arrowCurbRef.current, { opacity: 1, strokeDashoffset: 0, duration: 0.4 })
      .to(svgRef.current, { autoAlpha: 0, duration: 0.3 }, "+=1");

    timelineRef.current = tl;
  };

  const handleMouseLeave = () => {
    timelineRef.current?.kill();
    timelineRef.current = null;
    if (svgRef.current) gsap.set(svgRef.current, { autoAlpha: 0 });
  };

  return (
    <a
      href={`#`}
      className="project-item group py-5 leading-none transition-all first:pt-0 last:border-none last:pb-0 md:border-b md:group-hover/projects:opacity-30 md:hover:opacity-100"
      style={{ borderColor: "rgba(255,255,255,0.1)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {selectedProject === null && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.thumbnail}
          alt="Project"
          className="mb-6 w-full object-contain object-top"
          loading="lazy"
        />
      )}
      <div className="flex gap-2 md:gap-5">
        <div className="text-white/80">
          _{(index + 1).toString().padStart(2, "0")}.
        </div>
        <div>
          <h4
            className="flex gap-4 text-3xl font-bold xs:text-6xl bg-clip-text text-transparent transition-all duration-700"
            style={{
              backgroundImage: `linear-gradient(to right, #d84e2c 50%, white 50%)`,
              backgroundSize: "200%",
              backgroundPosition: "right",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = "left";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundPosition = "right";
            }}
          >
            {project.name}
            <span className="text-white opacity-0 transition-all group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                ref={svgRef}
              >
                <path ref={boxRef} d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path ref={arrowLineRef} d="M10 14 21 3" />
                <path ref={arrowCurbRef} d="M15 3h6v6" />
              </svg>
            </span>
          </h4>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/80">
            {project.techStack.slice(0, 3).map((tech, idx, arr) => (
              <div className="flex items-center gap-3" key={tech}>
                <span>{tech}</span>
                {idx !== arr.length - 1 && (
                  <span className="inline-block size-2 rounded-full bg-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>("");

  useGSAP(
    (_, contextSafe) => {
      if (window.innerWidth < 768) {
        setSelectedProject(null);
        return;
      }

      const handleMouseMove = contextSafe?.((e: MouseEvent) => {
        if (!containerRef.current || !imageContainer.current) return;
        if (window.innerWidth < 768) { setSelectedProject(null); return; }

        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageContainer.current.getBoundingClientRect();
        const offsetTop = e.clientY - containerRect.y;

        if (
          containerRect.y > e.clientY ||
          containerRect.bottom < e.clientY ||
          containerRect.x > e.clientX ||
          containerRect.right < e.clientX
        ) {
          return gsap.to(imageContainer.current, { duration: 0.3, opacity: 0 });
        }

        gsap.to(imageContainer.current, {
          y: offsetTop - imageRect.height / 2,
          duration: 1,
          opacity: 1,
        });
      }) as any;

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef, dependencies: [PROJECTS] }
  );

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 80%",
          toggleActions: "restart none none reverse",
          scrub: 1,
        },
      });
      tl.from(containerRef.current, { y: 150, opacity: 0 });
    },
    { scope: containerRef }
  );

  return (
    <section className="pb-[250px]" id="selected-projects">
      <div className="container">
        <SectionTitle title="SELECTED PROJECTS" />
        <div className="group/projects relative" ref={containerRef}>
          {selectedProject !== null && (
            <div
              className="pointer-events-none absolute top-0 right-0 z-10 aspect-[3/4] w-[200px] overflow-hidden opacity-0 max-md:hidden xl:w-[350px]"
              ref={imageContainer}
            >
              {PROJECTS.map((project) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.thumbnail}
                  alt="Project"
                  className="absolute inset-0 h-full w-full object-contain object-top transition-all duration-500"
                  style={{ opacity: project.slug !== selectedProject ? 0 : 1 }}
                  key={project.slug}
                />
              ))}
            </div>
          )}

          <div className="flex flex-col max-md:gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectItem
                key={project._id}
                index={index}
                project={project}
                selectedProject={selectedProject}
                onMouseEnter={(slug) => {
                  if (window.innerWidth < 768) { setSelectedProject(null); return; }
                  setSelectedProject(slug);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
