"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const id = params.id as string;

  const project = PROJECTS.find((p) => p.slug === id);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [project]);

  useGSAP(
    () => {
      if (!containerRef.current || !project) return;

      gsap.set(".fade-in-later", {
        autoAlpha: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.5,
      });
      tl.to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef, dependencies: [project] },
  );

  if (!project) {
    return (
      <section className="px-6 pt-5 pb-14 md:px-0">
        <div className="container" ref={containerRef}>
          <button
            onClick={() => router.back()}
            className="group mb-16 inline-flex h-12 items-center gap-2 hover:text-purple-500 transition-all"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </button>
          <div className="flex min-h-[50vh] items-center justify-center">
            <p className="text-white/60 text-2xl">Project not found!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-5 pb-14 md:px-0">
      <div className="container" ref={containerRef}>
        <button
          onClick={() => router.back()}
          className="group mb-16 inline-flex h-12 items-center gap-2 hover:text-purple-500 transition-all"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back
        </button>

        <div className="flex flex-col gap-16">
          {/* Project Header */}
          <div>
            <div className="mb-10 flex items-start justify-between gap-6">
              <h1 className="fade-in-later text-5xl md:text-6xl font-bold text-white leading-tight">
                {project.name}
              </h1>
              <div className="fade-in-later flex items-center gap-4">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-purple-500 transition-colors"
                    title="Source Code"
                  >
                    <Code size={28} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-purple-500 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={28} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              <div className="fade-in-later">
                <p className="text-white/60 mb-3 text-sm uppercase tracking-widest">
                  Period
                </p>
                <p className="text-white text-lg">
                  {project.startDate} – {project.endDate}
                </p>
              </div>
              <div className="fade-in-later">
                <p className="text-white/60 mb-3 text-sm uppercase tracking-widest">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm text-white bg-purple-500/20 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="fade-in-later">
                <p className="text-white/60 mb-3 text-sm uppercase tracking-widest">
                  Role
                </p>
                <p className="text-white text-lg">
                  {project.role || "Developer"}
                </p>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="fade-in-later space-y-6">
            <div>
              <p className="text-white/60 mb-4 text-sm uppercase tracking-widest">
                Overview
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights && (
              <div>
                <p className="text-white/60 mb-4 text-sm uppercase tracking-widest">
                  Key Highlights
                </p>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-white/80 text-lg flex items-start gap-3"
                    >
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Project Image */}
          {project.thumbnail && (
            <div className="fade-in-later">
              <p className="text-white/60 mb-4 text-sm uppercase tracking-widest">
                Preview
              </p>
              <div
                className="group relative w-full aspect-video bg-black rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {project.thumbnail && (
                  <a
                    href={project.thumbnail}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute top-4 right-4 inline-flex size-12 items-center justify-center bg-gray-950/70 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-500"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
