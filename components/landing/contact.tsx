"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle } from "lucide-react"

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-24 sm:py-32"
    >
      {/* Section divider */}
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Decorative glows */}
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Headline */}
        <h2 className="fade-in mb-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          <span className="gradient-text text-balance">
            {t("contact.headline")}
          </span>
        </h2>

        {/* Subtext */}
        <p className="fade-in mb-10 text-lg leading-relaxed text-muted-foreground" style={{ transitionDelay: "0.1s" }}>
          {t("contact.subtext")}
        </p>

        {/* CTA Button */}
        <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
          <a
            href="https://wa.me/573174804719"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
          >
            <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
            {t("contact.cta")}
          </a>
        </div>

        {/* WhatsApp decoration */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span>WhatsApp</span>
        </div>
      </div>
    </section>
  )
}
