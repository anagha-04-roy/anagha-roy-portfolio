const projects = [
  {
    name: "Sandra's Art",
    tagline: "Full-stack e-commerce & commission platform",
    year: "2026",
    context: "Team capstone project, SAIT",
    problem:
      "An independent artist needed one platform to sell finished artwork online and manage custom commission requests, work she'd been doing by hand.",
    contribution: [
      "Set up Azure Key Vault to securely store and rotate API keys, with fallback handling for when external services failed.",
      "Built AI-powered admin tools using OpenRouter (GPT-4o-mini) to auto-generate artwork descriptions, categorize items, and draft commission replies — used across 2 of the platform's 5 microservices.",
      "Built a live Instagram feed on the homepage from scratch using Instagram's Graph API, including setting up the Business account and handling login tokens.",
      "Found and fixed 2 real production bugs — a security path-matching crash and a text encoding issue — and standardized error handling across all 3 backend microservices.",
      "Tested the deployed app end-to-end as part of a 5-person team, including real Stripe payments and file-upload edge cases with JUnit.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Azure",
    ],
    link: "https://github.com/pricewowen/sandras-art",
    linkLabel: "View on GitHub",
    note: "Live deployment was taken down after the course ended to avoid ongoing Azure hosting costs.",
  },
  {
    name: "CareerQuest",
    tagline: "AI-powered job match & interview prep tool",
    year: "2026",
    context: "Group project, SAIT",
    problem:
      "Job seekers struggle to tell how well their resume matches a specific job posting, or to prepare for the interview questions it's likely to raise.",
    contribution: [
      "Built and connected 2 REST API endpoints (analyze + feedback) linking the AI pipeline to the app.",
      "Helped build the AI pipeline that compares a resume to a job posting, finds skill gaps, and generates custom interview questions.",
      "Used Google Gemini's embedding model and MongoDB vector search to match resume content against job requirements.",
      "Worked in a 5-person team, using Git to manage and merge code across all branches.",
    ],
    stack: [
      "Node.js",
      "Express",
      "React",
      "Google Gemini API",
      "MongoDB Atlas",
    ],
    link: "https://github.com/gjasmeen/CareerQuest",
    linkLabel: "View on GitHub",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  { label: "Frontend", items: ["React", "Next.js", "HTML", "CSS"] },
  { label: "Backend", items: ["Spring Boot", "Node.js", "Express"] },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB Atlas", "SQL", "Flyway"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Microsoft Azure", "Docker", "GitHub Actions (CI/CD)", "Git"],
  },
  {
    label: "APIs & AI",
    items: [
      "REST APIs",
      "Google Gemini API",
      "OpenRouter (GPT-4o-mini)",
      "Stripe API",
      "Postman",
    ],
  },
  {
    label: "QA & Testing",
    items: [
      "Manual Testing",
      "Test Case Design",
      "JUnit",
      "Regression Testing",
    ],
  },
];

const education = [
  {
    school: "Southern Alberta Institute of Technology (SAIT)",
    program: "Diploma in Software Development",
    period: "Jan 2025 – Aug 2026",
    location: "Calgary, AB",
  },
  {
    school: "Kerala State Rutronix",
    program: "Professional Diploma in Computerized Financial Accounting",
    period: "Oct 2023 – Apr 2024",
    location: "India",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-xs text-signal mb-4 tracking-tight">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-wide px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="hero-rise mb-24 sm:mb-32">
        <p className="font-mono text-sm text-muted mb-6 tracking-widest">
          WHO AM I
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] mb-6 max-w-content">
          Anagha Roy
        </h1>
        <p className="text-lg sm:text-xl text-paper max-w-content mb-3">
          Software developer building full-stack applications and the AI
          features layered into them.
        </p>
        <p className="text-muted max-w-content mb-10">
          Diploma in Software Development, SAIT — Calgary, AB
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a
            href="#projects"
            className="text-signal border-b border-signal/40 hover:border-signal transition-colors"
          >
            View projects
          </a>
          <a
            href="mailto:anagharoy411@gmail.com"
            className="text-muted hover:text-paper transition-colors"
          >
            anagharoy411@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/anagha-roy-13b201351"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mb-24 sm:mb-32 max-w-content">
        <SectionLabel>01 — About</SectionLabel>
        <p className="text-paper leading-relaxed">
          I'm a Software Development diploma graduate in Calgary who builds
          full-stack web applications — React and Next.js on the frontend,
          Java/Spring Boot and Node.js on the backend — and wires real AI
          features into them using tools like Google Gemini and OpenRouter. I'm
          comfortable with REST APIs, SQL and NoSQL databases, and deploying on
          Microsoft Azure. I care as much about reviewing and correcting what an
          AI tool produces as I do about writing the code myself, and I enjoy
          working directly with people who aren't developers to turn a real
          problem into something they can use.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-24 sm:mb-32">
        <SectionLabel>02 — Projects</SectionLabel>
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.name}
              className="max-w-content border-t border-line pt-8"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <span className="font-mono text-xs text-muted shrink-0">
                  {project.year}
                </span>
              </div>
              <p className="text-signal text-sm mb-1">{project.tagline}</p>
              <p className="text-muted text-sm mb-5">{project.context}</p>

              <p className="text-paper leading-relaxed mb-5">
                {project.problem}
              </p>

              <ul className="space-y-2 mb-5">
                {project.contribution.map((line, i) => (
                  <li
                    key={i}
                    className="text-paper/90 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted border border-line rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-signal border-b border-signal/40 hover:border-signal transition-colors"
              >
                {project.linkLabel}
              </a>

              {project.note && (
                <p className="text-muted text-xs mt-3 italic">{project.note}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-24 sm:mb-32">
        <SectionLabel>03 — Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 max-w-wide">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-sm text-muted mb-3">{group.label}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-paper/90 border border-line rounded px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-24 sm:mb-32 max-w-content">
        <SectionLabel>04 — Education</SectionLabel>
        <div className="space-y-6">
          {education.map((ed) => (
            <div key={ed.school} className="border-t border-line pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-semibold">{ed.program}</h4>
                <span className="font-mono text-xs text-muted shrink-0">
                  {ed.period}
                </span>
              </div>
              <p className="text-muted text-sm">
                {ed.school} — {ed.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="border-t border-line pt-10 max-w-content">
        <SectionLabel>05 — Contact</SectionLabel>
        <p className="text-paper mb-6 leading-relaxed">
          Open to full-time roles, internships, and co-ops in software
          development. Based in Calgary, AB.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a
            href="mailto:anagharoy411@gmail.com"
            className="text-signal border-b border-signal/40 hover:border-signal transition-colors"
          >
            anagharoy411@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/anagha-roy-13b201351"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-paper transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-muted text-xs mt-12">
          © {new Date().getFullYear()} Anagha Roy
        </p>
      </footer>
    </main>
  );
}
