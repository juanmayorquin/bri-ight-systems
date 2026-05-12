"use client"

import { useLanguage } from "@/lib/language-context"
import { Linkedin, Github, Mail, Phone } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#team", label: t("nav.team") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="relative border-t border-border px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <a href="#" className="mb-4 inline-block">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Br<span className="gradient-text">ii</span>ght Systems
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-sm font-semibold text-foreground">Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/573174804719"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +57 317 480 4719
              </a>
              <a
                href="mailto:bri.ght.systems.email@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                bri.ght.systems.email@gmail.com
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Bri-ight Systems. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground">
            Made with precision & intelligence
          </p>
        </div>
      </div>
    </footer>
  )
}
