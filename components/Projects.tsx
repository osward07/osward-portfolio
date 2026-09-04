"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type UIEvent } from "react";

interface Project {
  title: string;
  imagePath: string;
  liveUrl: string | null;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "SmartFind",
    imagePath: "/projects/smartfind.png",
    liveUrl: "https://smart-find-eight.vercel.app/",
    description:
      "SmartFind was made to change the traditional way of handling lost items in colleges, which was previously managed physically by OSAS.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Tech Superens",
    imagePath: "/projects/techsuperens.png",
    liveUrl: "https://tech-superens-official-website.vercel.app/",
    description:
      "Tech Superens was a real makeup company we started during our second year of high school. It was a meaningful project that showed our creativity, teamwork, and ambition at the time.",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "PennyPilot",
    imagePath: "/projects/pennypilot.png",
    liveUrl: "https://pennypilot.fwh.is/",
    description:
      "A simple budgeting and savings tool that helps users manage their finances and track expenses more effectively.",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "LHS JS Prom",
    imagePath: "/projects/lhsjsprom.png",
    liveUrl: "https://lhsjsprom.gt.tc/?i=1",
    description:
      "LHS JS Prom was created as an alternative to the traditional way of handling JS from ticketing for Lagro High School, making the process more convenient and digital.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "QCU Campus",
    imagePath: "/projects/QCU Campus Tour.png",
    liveUrl: null,
    description:
      "An offline / desktop campus-focused software system developed specifically for Quezon City University.",
    tech: ["Java", "JavaFX", "Desktop"],
  },
];

function ProjectCard({ project, mobile = false }: { project: Project; mobile?: boolean }) {
  return (
    <motion.div
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] ${mobile ? "w-[80%] shrink-0 snap-center md:w-[60%]" : ""}`}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
      data-project-card={mobile ? true : undefined}
    >
      <div className="group/image relative aspect-video w-full overflow-hidden rounded-t-xl bg-linear-to-br from-gray-800 to-gray-900">
        <Image
          src={project.imagePath}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover/image:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-6 grow text-sm leading-7 text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span key={technology} className="rounded bg-white/10 px-2 py-1 text-xs text-gray-300">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-violet-300 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.8)]"
            >
              Live Demo -&gt;
            </a>
          ) : (
            <span className="text-sm font-semibold text-gray-500">Desktop / Offline</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateIsDesktop() {
      setIsDesktop(window.innerWidth >= 768);
    }

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  function handleCarouselScroll(event: UIEvent<HTMLDivElement>) {
    const carousel = event.currentTarget;
    const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const cards = carousel.querySelectorAll<HTMLElement>("[data-project-card]");

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - carouselCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }

  function scrollToProject(index: number) {
    setActiveIndex(index);
    carouselRef.current?.querySelectorAll<HTMLElement>("[data-project-card]")[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function showPreviousProject() {
    scrollToProject((activeIndex - 1 + projects.length) % projects.length);
  }

  function showNextProject() {
    scrollToProject((activeIndex + 1) % projects.length);
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 pb-20 pt-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            My Projects
          </h2>
        </div>

        <div className="relative lg:hidden">
          <motion.div
            ref={carouselRef}
            className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto py-10 scrollbar-none"
            onScroll={handleCarouselScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: isDesktop ? 0.2 : 0 } } }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} mobile />
            ))}
          </motion.div>
          <button
            type="button"
            aria-label="Previous project"
            onClick={showPreviousProject}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white/10"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={showNextProject}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white/10"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 lg:hidden">
          {projects.map((project, index) => (
            <span
              key={project.title}
              className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-neon-cyan" : "w-4 bg-white/20"}`}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 hidden w-full grid-cols-1 gap-8 lg:grid lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: isDesktop ? 0.2 : 0 } } }}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : index === 4 ? "lg:col-start-4" : ""}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
