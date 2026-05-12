"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Portfolio } from "@/components/landing/portfolio"
import { Team } from "@/components/landing/team"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
