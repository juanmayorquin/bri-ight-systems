// ============================================================
// DATOS DEL EQUIPO
// Para añadir un miembro: copia un objeto y llena los campos.
// - image: ruta relativa a /public (ej. "/team/foto.jpg"), o null para usar iniciales
// - linkedin / github: URL completa, o null para ocultar el enlace
// ============================================================
export interface TeamMember {
  name: string
  role: string
  initials: string
  color: string
  image?: string | null
  linkedin?: string | null
  github?: string | null
}

export const teamMembers: TeamMember[] = [
  {
    name: "Felipe",
    role: "Marketing & Data Analyst",
    initials: "FE",
    color: "from-violet-500 to-indigo-500",
    image: null,
    linkedin: null,
    github: null,
  },
  {
    name: "Luis Felipe Villota",
    role: "Backend Developer & Database Specialist",
    initials: "LV",
    color: "from-cyan-500 to-blue-500",
    image: null,
    linkedin: "https://www.linkedin.com/in/lvillo/",
    github: "https://github.com/LuisVillota",
  },
  {
    name: "Julian David Velasquez",
    role: "Backend Developer & Database Specialist",
    initials: "JV",
    color: "from-emerald-500 to-teal-500",
    image: null,
    linkedin: "https://www.linkedin.com/in/julian-velasquezdev/",
    github: null,
  },
  {
    name: "Juan José Mayorquín",
    role: "Frontend Dev & Automation Specialist",
    initials: "MA",
    color: "from-orange-500 to-rose-500",
    image: null,
    linkedin: "https://www.linkedin.com/in/juan-mayorquin/",
    github: "https://github.com/juanmayorquin",
  },
  {
    name: "Bri",
    role: "Backend & Organization",
    initials: "BR",
    color: "from-pink-500 to-purple-500",
    image: null,
    linkedin: null,
    github: null,
  },
]

// ============================================================
// DATOS DE PROYECTOS
// Para añadir un proyecto: copia un objeto y llena los campos.
// - screenshots: array de rutas a /public (ej. ["/projects/app/1.png"])
//   Si está vacío, se muestra el placeholder de color.
// - deployUrl / githubUrl: URL completa, o null para ocultar el botón
// ============================================================
export interface Project {
  title: string
  description: string
  industry: string
  techStack: string[]
  screenshots: string[]
  gradient: string
  deployUrl?: string | null
  githubUrl?: string | null
}

export const projects: Project[] = [
  {
    title: "LogiTrack",
    description:
      "Sistema de Gestión Médica Quirúrgico-Plástica.",
    industry: "Logística",
    techStack: ["Next.js", "Node.js", "Redis", "MapboxGL"],
    screenshots: [],
    gradient: "from-cyan-500/20 to-blue-500/20",
    deployUrl: null,
    githubUrl: null,
  },
  {
    title: "RetailFlow Pro",
    description:
      "Sistema de gestión de inventario potenciado por IA con predicción de demanda y reabastecimiento automático.",
    industry: "Retail",
    techStack: ["React", "Python", "TensorFlow", "PostgreSQL"],
    screenshots: [],
    gradient: "from-violet-500/20 to-indigo-500/20",
    deployUrl: null,
    githubUrl: null,
  },
  {
    title: "FinSight Dashboard",
    description:
      "Analítica financiera avanzada con alertas inteligentes e informes ejecutivos automatizados.",
    industry: "Finanzas",
    techStack: ["Vue.js", "Python", "FastAPI", "MongoDB"],
    screenshots: [],
    gradient: "from-emerald-500/20 to-teal-500/20",
    deployUrl: null,
    githubUrl: null,
  },
]
