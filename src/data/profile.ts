// src/data/profile.ts 

// ───────────────────────────────────────────────────────────
// Types
// ───────────────────────────────────────────────────────────

export type SectionId = "home" |"experience" | "projects" | "skills" | "contact"

export type Project = {
  time: string
  title: string
  company: string
  description: string
  techStacks: string[]
  logo: string           // path to logo in /public/logos/
  link?: string          // optional project link
}

export type Experience = {
  time: string
  title: string
  company: string
  location: string
  summary: string
  bullets: string[]
  techStacks: string[]
  logo: string
  link?: string 
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
  brand: "Sherry Guo", 
  items: [
    { id: "home" as SectionId, label: "Home" },
    { id: "experience" as SectionId, label: "Experience" },
    { id: "projects" as SectionId, label: "Projects" },
    { id: "skills" as SectionId, label: "Skills" },
    { id: "contact" as SectionId, label: "Contact" },
  ],
}

export const sectionIds: SectionId[] = navConfig.items.map((i) => i.id)


export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "UI & Front-End",
    subtitle: "Web interfaces, components, accessibility",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "jQuery",
      "Streamlit",
      "Django",
      "Responsive Design",
      "WCAG Accessibility Standards",
    ],
  },
  {
    id: "backend",
    label: "Back-End & APIs",
    subtitle: "APIs, business logic, architecture",
    items: [
      "Java",
      "Spring Boot",
      "Spring JPA",
      "JDBC",
      "REST APIs",
      "Python",
      "PHP",
      "Dart",
      "PL/SQL",
      "OAuth2 and JWT Authentication",
      "Microservices",
      "Object-Oriented Design (DAO / DTO / Singleton)",
      "Maven",
      "JUnit Testing",
      "Bash scripting",
    ],
  },
  {
    id: "data",
    label: "Data & Databases",
    subtitle: "Storage, querying, analytics",
    items: [
      "MySQL",
      "PostgreSQL",
      "MS SQL Server",
      "MS Access",
      "Oracle",
      "SQLite",
      "MongoDB (NoSQL)",
      "Neo4j (Graph Database)",
      "ETL processes",
      "Query optimization",
      "Index tuning",
      "Data modeling",
    ],
  },
  {
    id: "cloud",
    label: "Cloud, Deployment & DevOps",
    subtitle: "Infrastructure, servers, CI/CD",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Ubuntu & Linux server configuration",
      "Nginx",
      "Cloudflare",
      "DigitalOcean Droplet",
      "Vite",
      "Git",
      "CI/CD pipelines",
      "SSL certificates",
      "SSH configuration",
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    subtitle: "Productivity and collaboration stack",
    items: [
      "WordPress CMS",
      "SharePoint",
      "Figma",
      "Postman",
      "Jira",
      "Visual Studio Code",
      "IntelliJ IDEA",
    ],
  },
]

// ───────────────────────────────────────────────────────────
// Profile (single object)
// ───────────────────────────────────────────────────────────


export const profile = {
  name: "Sherry Guo",
  title: "Analytical Software Developer",
  description:
    "Analytical software developer experienced across Java-based systems, cloud environments, databases, and full-stack web applications. Adept at troubleshooting complex issues, reading and debugging JVM stack traces, and managing the lifecycle of systems from design to deployment.",

  portrait: "./portrait.jpg",

  links: [
    {
      label: "GitHub",
      url: "https://github.com/SherryGuoXin",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sherry-guo-xin/",
    },
  ],

  experiences:[
    {
      time: "May 2025 – Present",
      title: "Web Developer Intern",
      company: "Northern Way Consulting",
      location: "Ottawa, Canada",
      summary:
        "Developing and maintaining full-stack WordPress-based web applications, improving performance, accessibility, and reliability across on-premises and cloud-hosted environments.",
      bullets: [
        "Develop and maintain on-premises and cloud-hosted web applications supporting dynamic content publishing.",
        "Engineer back-end functionality in PHP to automate content distribution and improve publishing efficiency.",
        "Execute database migration from SQL Server to MySQL, including ETL, schema restructuring, and index tuning.",
        "Build responsive front-end interfaces with JavaScript, jQuery, and Tailwind CSS to improve interactivity and WCAG 2.0 AA accessibility.",
        "Configure and optimize Ubuntu servers (SSH authentication, .htaccess rules, SSL certificates) to enhance security and reliability.",
        "Provide CMS user training and documentation, reinforcing accessibility and web content governance best practices.",
      ],
      techStacks: [
        "PHP",
        "JavaScript",
        "Python",
        "jQuery",
        "Tailwind CSS",
        "WordPress",
        "MySQL",
        "Cloudflare",
        "DigitalOcean Droplet",
        "Ubuntu",
      ],
      logo: "./northernway.png",
      link: "https://www.northernwayconsulting.ca/",
    },
  ],

  // ────────────────────────────────────────────────────────
  // Projects (from resume)
// ────────────────────────────────────────────────────────
  projects: [
    {
      time: "May 2025",
      title: "SmartPix – Full-Stack AI-Powered Image Editing Web Application",
      company: "Team Project | Ottawa",
      description:
        "Built a full-stack AI-powered image editing web app using React.js, Python microservices, and MongoDB Atlas. Integrated OpenAI and Stability.ai APIs for real-time processing and implemented OAuth2 authentication with Auth0 plus analytics and CI/CD deployment.",
      techStacks: [
        "React.js",
        "JavaScript / TypeScript",
        "Python microservices",
        "MongoDB Atlas",
        "OpenAI API",
        "Stability.ai API",
        "Auth0 (OAuth2)",
        "CI/CD pipelines",
      ],
      logo: "./logos/smartpix.png",
      link: "https://github.com/SherryGuoXin/Smartpix",
    },
    {
      time: "May 2025",
      title: "SmartStockSelector – Full-Stack Stock Screening Web App",
      company: "Personal Project | Ottawa",
      description:
        "Developed a full-stack stock screening web application using Streamlit for the UI and Python REST services with SQLite storage. Implemented secure login, filter-based stock search, CSV export, and email-based password recovery to support end-to-end user workflows.",
      techStacks: [
        "Python",
        "Streamlit",
        "SQLite",
        "REST APIs",
        "Secure login",
        "CSV export",
        "Email password recovery",
      ],
      logo: "./logos/smartstockselector.png",
      link: "https://github.com/SherryGuoXin/smartStock",
    },
    {
      time: "May 2025",
      title: "Mock Facebook Backend – Spring Boot Microservices Application",
      company: "Academic Project | Ottawa",
      description:
        "Built a modular microservices backend with Spring Boot, MySQL, and RESTful APIs using OOP principles. Implemented JWT authentication, role-based access, and Spring JPA-based optimization, and deployed containerized services with Docker and Kubernetes for scalability and fault isolation.",
      techStacks: [
        "Java",
        "Spring Boot",
        "Spring JPA",
        "RESTful microservices",
        "MySQL",
        "JWT authentication",
        "Docker",
        "Kubernetes",
      ],
      logo: "./logos/mockfacebook.png",
      link: "#",
    },
    {
      time: "Sep 2024 – Jan 2025",
      title: "Java Application Suite — API, JDBC & OOP Systems",
      company: "Academic Project | Ottawa",
      description:
        "Developed multiple Java console applications integrating public JSON APIs, JDBC, and file I/O. Applied DAO/DTO patterns, thread-safe Singleton connections, CRUD operations, exception handling, and JUnit tests to deliver reliable, maintainable, production-style code.",
      techStacks: [
        "Java",
        "JDBC",
        "JSON APIs",
        "DAO / DTO patterns",
        "Singleton pattern",
        "File I/O",
        "Exception handling",
        "JUnit testing",
      ],
      logo: "./logos/java-suite.png",
      link: "#",
    },
  ],

  // ────────────────────────────────────────────────────────
  // Skills (grouped, toggleable - enriched from resume)
// ────────────────────────────────────────────────────────
skills: skillGroups,

  // ────────────────────────────────────────────────────────
  // Contact (from resume header)
// ────────────────────────────────────────────────────────
  contact: {
    email: "sherry.guoxin@gmail.com",
    location: "Hamilton, ON, Canada",
    availability:"Open to full-time roles, contract work, and internships in Software Developer, Full-Stack Developer, and Data Analyst positions",
    linkedin: "https://www.linkedin.com/in/sherry-guo-xin/",
    github: "https://github.com/SherryGuoXin",
  },
}
