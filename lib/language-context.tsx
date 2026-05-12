"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.portfolio": { es: "Portafolio", en: "Portfolio" },
  "nav.team": { es: "Equipo", en: "Team" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.cta": { es: "Hablemos", en: "Let's Talk" },
  
  // Hero
  "hero.headline": {
    es: "Construimos el software que tu empresa necesita.",
    en: "We build the software your business actually needs."
  },
  "hero.headline.line1": {
    es: "Construimos el software",
    en: "We Build Software"
  },
  "hero.headline.line2": {
    es: "que tu empresa necesita.",
    en: "Your Business Actually Needs."
  },
  "hero.subheadline": {
    es: "Desarrollo web, inteligencia artificial y analítica de datos para optimizar, sistematizar y automatizar tu operación.",
    en: "Custom web development, AI integration, and data analytics to optimize, systematize, and automate your operations."
  },
  "hero.cta.primary": { es: "Escríbenos", en: "Message Us" },
  "hero.cta.secondary": { es: "Ver servicios", en: "See Services" },
  "hero.badge": { es: "IA · Datos · Negocio", en: "AI-Powered · Data-Driven · Business-Ready" },
  
  // Services
  "services.title": { es: "Lo que hacemos", en: "What We Do" },
  "services.web.title": { es: "Desarrollo Web a Medida", en: "Custom Web Development" },
  "services.web.desc": {
    es: "Soluciones web personalizadas que se adaptan perfectamente a las necesidades únicas de tu negocio.",
    en: "Tailored web solutions that perfectly adapt to your business's unique requirements."
  },
  "services.ai.title": { es: "Integración de IA", en: "AI Integration & Automation" },
  "services.ai.desc": {
    es: "Potencia tu negocio con inteligencia artificial y automatización de procesos inteligente.",
    en: "Empower your business with artificial intelligence and smart process automation."
  },
  "services.analytics.title": { es: "Analítica de Datos", en: "Data Analytics & BI" },
  "services.analytics.desc": {
    es: "Transforma datos en decisiones estratégicas con dashboards y reportes inteligentes.",
    en: "Transform data into strategic decisions with intelligent dashboards and reports."
  },
  "services.process.title": { es: "Optimización de Procesos", en: "Process Optimization" },
  "services.process.desc": {
    es: "Identificamos ineficiencias y diseñamos flujos de trabajo más ágiles y efectivos.",
    en: "We identify inefficiencies and design more agile and effective workflows."
  },
  "services.consulting.title": { es: "Consultoría de Software", en: "Software Consulting" },
  "services.consulting.desc": {
    es: "Asesoría experta para guiar la transformación digital de tu organización.",
    en: "Expert guidance to lead your organization's digital transformation journey."
  },
  
  // Portfolio
  "portfolio.title": { es: "Casos de éxito", en: "Our Work" },
  "portfolio.viewMore": { es: "Ver más", en: "View More" },
  "portfolio.project1.name": { es: "RetailFlow Pro", en: "RetailFlow Pro" },
  "portfolio.project1.industry": { es: "Retail", en: "Retail" },
  "portfolio.project1.desc": {
    es: "Sistema de gestión de inventario con predicción de demanda mediante IA para cadena de tiendas.",
    en: "AI-powered inventory management system with demand prediction for retail chain."
  },
  "portfolio.project2.name": { es: "LogiTrack AI", en: "LogiTrack AI" },
  "portfolio.project2.industry": { es: "Logística", en: "Logistics" },
  "portfolio.project2.desc": {
    es: "Plataforma de optimización de rutas y seguimiento en tiempo real para flotas de distribución.",
    en: "Route optimization and real-time tracking platform for distribution fleets."
  },
  "portfolio.project3.name": { es: "FinSight Dashboard", en: "FinSight Dashboard" },
  "portfolio.project3.industry": { es: "Finanzas", en: "Finance" },
  "portfolio.project3.desc": {
    es: "Dashboard de análisis financiero con alertas inteligentes y proyecciones automatizadas.",
    en: "Financial analytics dashboard with smart alerts and automated projections."
  },
  
  // Team
  "team.title": { es: "El equipo", en: "The Team" },
  "team.member1.name": { es: "Felipe", en: "Felipe" },
  "team.member1.role": { es: "Marketing & Data Analyst", en: "Marketing & Data Analyst" },
  "team.member2.name": { es: "Villota", en: "Villota" },
  "team.member2.role": { es: "Backend Developer & Database Specialist", en: "Backend Developer & Database Specialist" },
  "team.member3.name": { es: "Julian", en: "Julian" },
  "team.member3.role": { es: "Backend Developer & Database Specialist", en: "Backend Developer & Database Specialist" },
  "team.member4.name": { es: "Juan Mayorquín", en: "Juan Mayorquín" },
  "team.member4.role": { es: "Frontend Dev & Automation Specialist", en: "Frontend Dev & Automation Specialist" },
  "team.member5.name": { es: "Bri", en: "Bri" },
  "team.member5.role": { es: "Backend y Organización", en: "Backend & Organization" },
  
  // Contact
  "contact.headline": {
    es: "¿Listo para transformar tu empresa?",
    en: "Ready to transform your business?"
  },
  "contact.subtext": {
    es: "Platiquemos sobre cómo podemos ayudarte a optimizar y automatizar tus procesos.",
    en: "Let's discuss how we can help you optimize and automate your processes."
  },
  "contact.cta": { es: "Escríbenos ahora", en: "Message us now" },
  
  // Footer
  "footer.tagline": {
    es: "Ingeniería con propósito. Inteligencia que transforma.",
    en: "We engineer clarity. We build intelligence."
  },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const toggleLanguage = () => {
    setLanguage(prev => prev === "es" ? "en" : "es")
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
