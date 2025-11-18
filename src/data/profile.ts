// src/data/profile.ts

// ───────────────────────────────────────────────────────────
// Types
// ───────────────────────────────────────────────────────────

export type SectionId = "home" | "projects" | "skills" | "contact"

export type Project = {
  time: string
  title: string
  company: string
  description: string
  techStacks: string[]
  logo: string           // path to logo in /public/logos/
  link?: string          // optional project link
}

export type SkillGroupId = "frontend" | "backend" | "data" | "cloud" | "tools"

export type SkillGroup = {
  id: SkillGroupId
  label: string
  subtitle?: string
  items: string[]
}

// ───────────────────────────────────────────────────────────
// Navigation
// ───────────────────────────────────────────────────────────

export const navConfig = {
  brand: "<SherryGuo />", // text in navbar
  items: [
    { id: "home" as SectionId, label: "Home" },
    { id: "projects" as SectionId, label: "Projects" },
    { id: "skills" as SectionId, label: "Skills" },
    { id: "contact" as SectionId, label: "Contact" },
  ],
}

export const sectionIds: SectionId[] = navConfig.items.map((i) => i.id)

// ───────────────────────────────────────────────────────────
// Profile (single object)
// ───────────────────────────────────────────────────────────

export const profile = {
  name: "Sherry Guo",
  title: "Software Developer",
  description:
    "I build modern web applications with Vue, TypeScript, Tailwind, and cloud technologies. Passionate about clean code, UI/UX, and solving real-world problems.",
  portrait: "/portrait.jpg",

  links: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { label: "Portfolio", url: "https://yourwebsite.com" },
  ],

  // ────────────────────────────────────────────────────────
  // Projects
  // ────────────────────────────────────────────────────────
  projects: <Project[]>[
    {
      time: "2024 – Present",
      title: "SmartPix – AI Image Toolkit",
      company: "Personal Project",
      description:
        "AI-powered image editing and generation toolkit with a modern Vue front-end and Python microservices backend.",
      techStacks: ["Vue", "TypeScript", "Tailwind", "Python", "FastAPI", "OpenAI API"],
      logo: "/logos/smartpix.png",
      link: "#",
    },
    {
      time: "2023 – 2024",
      title: "SmartStockSelector",
      company: "Personal Project",
      description:
        "Stock analysis dashboard built with Streamlit and Python, featuring data filters, watchlists, and CSV export.",
      techStacks: ["Python", "Streamlit", "SQLite", "REST APIs"],
      logo: "/logos/stockselector.png",
      link: "#",
    },
    {
      time: "2023",
      title: "FSMO Issue Articles Manager",
      company: "Northern Way Consulting",
      description:
        "Custom WordPress plugin for managing magazine articles, image resizing automation, pagination, proofing workflow, and category structure.",
      techStacks: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      logo: "/logos/fsmomanager.png",
      link: "#",
    },
  ],

  // ────────────────────────────────────────────────────────
  // Skills (grouped, toggleable)
// ────────────────────────────────────────────────────────
  skills: <SkillGroup[]>[
    {
      id: "frontend",
      label: "UI & Front-End",
      subtitle: "Web interfaces, components, accessibility",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material UI",
        "jQuery",
        "Streamlit",
        "Responsive Design",
        "WCAG Accessibility Standards",
      ],
    },
    {
      id: "backend",
      label: "Back-End",
      subtitle: "APIs, business logic, architecture",
      items: [
        "Java",
        "Spring Boot",
        "Spring JPA",
        "JDBC",
        "REST APIs",
        "Python",
        "PHP",
        "OAuth2 and JWT Authentication",
        "Microservices",
        "Object-Oriented Design (DAO / DTO / Singleton)",
        "JUnit Testing",
      ],
    },
    {
      id: "data",
      label: "Data & Databases",
      subtitle: "Storage, querying, analytics",
      items: [
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "Oracle",
        "SQLite",
        "MongoDB",
        "ETL processes",
        "Query optimization",
        "Index tuning",
        "Data modeling",
        "Neo4j",
        "Power BI",
      ],
    },
    {
      id: "cloud",
      label: "Cloud, Deployment & DevOps",
      subtitle: "Infrastructure, security, pipelines",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Ubuntu & Linux server configuration",
        "Nginx",
        "Cloudflare",
        "Git",
        "CI/CD pipelines",
        "SSL certificates",
        "SSH configuration",
        "Vite",
        "DigitalOcean",
      ],
    },
    {
      id: "tools",
      label: "Tools & Platforms",
      subtitle: "Productivity and collaboration stack",
      items: [
        "WordPress CMS",
        "Figma",
        "Postman",
        "Jira",
        "SharePoint",
        "Visual Studio Code",
        "IntelliJ IDEA",
      ],
    },
  ],
}
