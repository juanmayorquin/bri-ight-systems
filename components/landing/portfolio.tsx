"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { t } = useLanguage()
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const hasScreenshots = project.screenshots.length > 0

  return (
    <div className="group glass-card flex h-full flex-col rounded-2xl overflow-hidden transition-all hover:scale-[1.02]">
      {/* Preview: screenshot carousel o placeholder */}
      <div className="relative w-full h-44 flex-shrink-0 bg-secondary/30">
        {hasScreenshots ? (
          <>
            <Image
              src={project.screenshots[currentScreenshot]}
              alt={`${project.title} - screenshot ${currentScreenshot + 1}`}
              fill
              className="object-cover"
            />
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentScreenshot((p) =>
                      p === 0 ? project.screenshots.length - 1 : p - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    setCurrentScreenshot((p) =>
                      p === project.screenshots.length - 1 ? 0 : p + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentScreenshot(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentScreenshot
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-lg border border-white/10 bg-white/5"
                  style={{ transform: `rotate(${(i - 1) * 10}deg)` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Industry Tag */}
        <span className="mb-3 inline-flex w-fit rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          {project.industry}
        </span>

        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              {t("portfolio.viewMore")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              Código
            </a>
          )}
          {!project.deployUrl && !project.githubUrl && (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground/50">
              {t("portfolio.viewMore")}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = sectionRef.current?.querySelectorAll(".fade-in")
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Section divider */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="fade-in mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="gradient-text">{t("portfolio.title")}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in min-w-[300px] flex-shrink-0 md:min-w-0"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
