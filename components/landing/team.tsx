"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Linkedin, Github } from "lucide-react"
import { teamMembers } from "@/lib/data"

export function Team() {
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
      id="team"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Section divider */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="fade-in mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="gradient-text">{t("team.title")}</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card group flex flex-col items-center rounded-2xl p-6 text-center transition-all hover:scale-[1.02]">
                {/* Avatar: imagen o iniciales */}
                <div className="relative mb-6">
                  {member.image ? (
                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
                    >
                      {member.initials}
                    </div>
                  )}
                  {/* Decorative ring */}
                  <div
                    className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${member.color} opacity-20 blur-lg`}
                  />
                </div>

                {/* Name */}
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mb-4 text-sm text-muted-foreground">
                  {member.role}
                </p>

                {/* Social Links */}
                {(member.linkedin || member.github) && (
                  <div className="flex gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn de {member.name}</span>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub de {member.name}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
