import { useState } from "react";
import emailjs from "@emailjs/browser";
import payflow from "./assets/payflow.png";
import doubleA from "./assets/double-a.png";
import morgal from "./assets/morgal-preview.jpg";

const external = { target: "_blank", rel: "noopener noreferrer" };
const linkedin = "https://linkedin.com/in/adham-tarek-726394250/";
const projects = [
  {
    id: "payflow",
    name: "PayFlow",
    category: "FULL-STACK APPLICATION",
    tagline: "Everyday money, made simpler.",
    image: payflow,
    intro:
      "A digital wallet bringing voice-based expense entry, transfers, budgets, and spending insights into one experience.",
    problem:
      "Make recording expenses and understanding spending easier across web and mobile.",
    build:
      "Implemented Arabic and English voice entry, JWT authentication, peer-to-peer transfers, and Recharts analytics, with a Capacitor mobile app.",
    result:
      "Explore the public landing page, or review the implementation on GitHub. Wallet features require an account.",
    stack: ["React", "Next.js", "Prisma", "PostgreSQL", "Capacitor"],
    demo: "https://pay-flow-fe.vercel.app/",
    source: "https://github.com/adhaamtarekk/PayFlow",
  },
  {
    id: "double-a",
    name: "Double A",
    category: "BILINGUAL WEBSITE · INDEPENDENT CONCEPT",
    tagline: "A considered space for design.",
    image: doubleA,
    intro:
      "An architecture and interior design website concept, designed to give visual work room to speak.",
    problem:
      "Present a design studio’s services and portfolio clearly for both English and Arabic audiences.",
    build:
      "Designed and built responsive layouts with Arabic RTL support, a filterable project gallery, project dialogs, and an enquiry preview.",
    result:
      "An independent concept with illustrative photography. The demo enquiry form does not submit or store messages.",
    stack: ["HTML", "CSS", "JavaScript", "Arabic / RTL"],
    demo: "https://double-a-concept.vercel.app/",
  },
  {
    id: "morgal",
    name: "Morgal International",
    category: "BUSINESS WEBSITE",
    tagline: "Making a technical catalog approachable.",
    image: morgal,
    intro:
      "A company website presenting electromechanical products through a clear, accessible browsing experience.",
    problem:
      "Help visitors discover an electromechanical product range and understand the business behind it.",
    build:
      "Built a React interface to present the company and its product catalog, with responsive styling for different screen sizes.",
    result:
      "Review the website implementation and component structure in the source repository.",
    stack: ["React", "CSS"],
    source: "https://github.com/adhaamtarekk/Morgal-International",
  },
];
const roles = [
  {
    company: "Deloitte Innovation Hub",
    role: "Full Stack Engineer Analyst",
    date: "May 2025 — Present",
    points: [
      "Build enterprise applications with Java, Spring Boot, and MySQL.",
      "Develop responsive React and Angular interfaces and integrate REST APIs.",
    ],
  },
  {
    company: "Yodawy",
    role: "Full Stack Software Engineer",
    date: "Mar 2024 — Apr 2025",
    points: [
      "Developed order management and orchestration systems using Laravel, Livewire, and Java Vert.x.",
      "Integrated healthcare and insurance systems, and contributed React interfaces for the AXA mobile application.",
    ],
  },
  {
    company: "Lirten Solutions",
    role: "Front-end Mobile Developer Intern",
    date: "Sep 2021 — Sep 2022",
    points: [
      "Built Flutter interfaces for the Stract mobile application.",
      "Connected user-facing features to backend services through REST APIs.",
    ],
  },
];

function ContactForm() {
  const [state, setState] = useState("idle");
  async function submit(event) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setState("sending");
    try {
      await emailjs.send(
        "service_difg3as",
        "template_jlhmwm5",
        {
          from_name: fields.get("name"),
          to_name: "Adham Tarek",
          from_email: fields.get("email"),
          to_email: "adhaam.tarekk2000@gmail.com",
          message: fields.get("message"),
        },
        "FdJ34xb5NxXq6S3SW",
      );
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            required
            maxLength={180}
          />
        </label>
      </div>
      <label>
        What are you working on?
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about the role or project you have in mind."
          required
          maxLength={4000}
        />
      </label>
      <div className="form-bottom">
        <button
          className="button primary"
          disabled={state === "sending"}
          type="submit"
        >
          {state === "sending" ? "Sending…" : "Send message"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <span className="form-note">Or reach me directly by email.</span>
      </div>
      <p
        className={`form-status ${state === "error" ? "error" : ""}`}
        role="status"
      >
        {state === "success"
          ? "Thanks for reaching out. Your message has been sent."
          : state === "error"
            ? "Your message could not be sent. Please email adhaam.tarekk2000@gmail.com."
            : ""}
      </p>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Adham Tarek home">
            <span className="monogram">
              at<span>.</span>
            </span>
            <span>Adham Tarek</span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {menuOpen ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
          </button>
          <nav
            id="navigation"
            className={menuOpen ? "open" : ""}
            aria-label="Main navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-top">
            <p className="eyebrow">
              <span className="status-dot" /> FULL-STACK SOFTWARE ENGINEER
            </p>
            <span className="location">
              BASED IN EGYPT / WORKING EVERYWHERE
            </span>
          </div>
          <h1>
            Thoughtful interfaces.
            <br />
            <span>Reliable systems.</span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-description">
                I’m Adham, a software engineer at Deloitte. I build web and
                mobile applications that connect clear user experiences with
                dependable backend systems.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <span aria-hidden="true">↘</span>
                </a>
                <a className="button secondary" href="#contact">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-aside">
              <span className="small-label">
                FROM INTERFACE TO INFRASTRUCTURE
              </span>
              <p>
                React & Angular
                <br />
                Java & Spring Boot
                <br />
                Laravel & REST APIs
              </p>
              <a href="https://github.com/adhaamtarekk" {...external}>
                Explore GitHub ↗
              </a>
            </div>
          </div>
          <div className="company-strip">
            <span>EXPERIENCE ACROSS</span>
            <p>
              Deloitte<span> / </span>Yodawy<span> / </span>Lirten Solutions
            </p>
            <a href="#experience" aria-label="View experience">
              ↓
            </a>
          </div>
        </section>
        <section className="section container" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>Built with purpose.</h2>
            </div>
            <p>
              A closer look at the products and websites
              <br className="desktop-break" /> I’ve designed and developed.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article className={`project project-${p.id}`} key={p.id}>
                <div className="project-visual">
                  <div className="browser-chrome">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>
                      {p.name.toLowerCase().replaceAll(" ", "")} / preview
                    </span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <a
                    href={p.demo || p.source}
                    {...external}
                    aria-label={`Explore ${p.name}`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} desktop website preview`}
                      loading="lazy"
                      width="1440"
                      height="900"
                    />
                  </a>
                </div>
                <div className="project-copy">
                  <div className="project-kicker">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.category}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-intro">{p.intro}</p>
                  <div className="tags">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.demo && (
                      <a href={p.demo} {...external}>
                        Live website <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {p.source && (
                      <a href={p.source} {...external}>
                        Source code <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                  <details>
                    <summary>
                      Project notes <span aria-hidden="true">+</span>
                    </summary>
                    <div className="case-study">
                      <h4>The problem</h4>
                      <p>{p.problem}</p>
                      <h4>My implementation</h4>
                      <p>{p.build}</p>
                      <h4>Explore the result</h4>
                      <p>{p.result}</p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">02 / ABOUT ME</p>
              <h2>
                Good software starts
                <br />
                with understanding
                <br />
                <span>the whole picture.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                I work across the stack, from the first interaction to the API
                and data behind it.
              </p>
              <p>
                My experience spans enterprise platforms, healthcare
                integrations, business websites, and mobile applications. I care
                about clear interfaces, maintainable code, and the details that
                make a product work well.
              </p>
              <p>
                Currently at Deloitte Innovation Hub. Open to discussing
                full-time roles and part-time remote collaborations.
              </p>
              <a href={linkedin} {...external} className="text-link">
                Connect on LinkedIn ↗
              </a>
              <div className="skill-groups">
                <div>
                  <h3>Frontend & mobile</h3>
                  <p>
                    React · Angular · TypeScript
                    <br />
                    Flutter · Capacitor · CSS
                  </p>
                </div>
                <div>
                  <h3>Backend & data</h3>
                  <p>
                    Java · Spring Boot · Laravel
                    <br />
                    REST APIs · MySQL · PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section container" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / EXPERIENCE</p>
              <h2>Where I’ve contributed.</h2>
            </div>
            <a
              href="mailto:adhaam.tarekk2000@gmail.com?subject=R%C3%A9sum%C3%A9%20request"
              className="text-link"
            >
              Request my résumé ↗
            </a>
          </div>
          <div className="experience-list">
            {roles.map((r, i) => (
              <article className="experience-row" key={r.company}>
                <div className="experience-date">
                  <span className={i === 0 ? "status-dot" : "timeline-dot"} />
                  {r.date}
                </div>
                <div>
                  <h3>{r.company}</h3>
                  <p className="role">{r.role}</p>
                </div>
                <ul>
                  {r.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">04 / NEXT CHAPTER</p>
              <h2>
                Have something
                <br />
                in mind?
                <br />
                <span>Let’s build it.</span>
              </h2>
              <p>
                For opportunities, collaborations,
                <br />
                or a conversation about your next project.
              </p>
              <a
                className="email-link"
                href="mailto:adhaam.tarekk2000@gmail.com"
              >
                adhaam.tarekk2000@gmail.com ↗
              </a>
              <div className="social-links">
                <a href={linkedin} {...external}>
                  LinkedIn ↗
                </a>
                <a href="https://github.com/adhaamtarekk" {...external}>
                  GitHub ↗
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="brand" href="#home">
          Adham Tarek<span className="accent">.</span>
        </a>
        <p>Software engineer. Thoughtful by design.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
