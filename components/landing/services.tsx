"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { Code2, Brain, BarChart3, Cog, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Code2,
    titleKey: "services.web.title",
    descKey: "services.web.desc",
  },
  {
    icon: Brain,
    titleKey: "services.ai.title",
    descKey: "services.ai.desc",
  },
  {
    icon: BarChart3,
    titleKey: "services.analytics.title",
    descKey: "services.analytics.desc",
  },
  {
    icon: Cog,
    titleKey: "services.process.title",
    descKey: "services.process.desc",
  },
  {
    icon: MessageSquare,
    titleKey: "services.consulting.title",
    descKey: "services.consulting.desc",
  },
]

export function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative px-4 py-24 sm:py-32"
    >
      {/* Section divider */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="fade-in mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="gradient-text">{t("services.title")}</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.titleKey}
                className="fade-in service-card glass-card rounded-2xl p-6 sm:p-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t(service.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
