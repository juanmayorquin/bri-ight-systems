"use client"

import { useLanguage } from "@/lib/language-context"
import { MessageCircle, ArrowDown } from "lucide-react"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export function Hero() {
  const { t } = useLanguage()

  return (
    <HeroGeometric
      badge={t("hero.badge")}
      title1={t("hero.headline.line1")}
      title2={t("hero.headline.line2")}
    >
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
        {t("hero.subheadline")}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-4">
        <a
          href="https://wa.me/573174804719"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          <MessageCircle className="h-5 w-5" />
          {t("hero.cta.primary")}
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-border"
        >
          {t("hero.cta.secondary")}
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </HeroGeometric>
  )
}
