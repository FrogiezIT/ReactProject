import profileImage from "../assets/aman.jpg";

const projects = [
  {
    title: "ShopSphere",
    description:
      "A sleek e-commerce frontend with category filters, cart state management, and smooth checkout flow.",
    stack: ["React", "Context API", "Tailwind"],
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Forecastly",
    description:
      "Real-time weather dashboard with location search, dynamic condition visuals, and fast response cards.",
    stack: ["React", "API", "Charts"],
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "TaskFlow",
    description:
      "A productivity app to plan daily goals with drag-drop organization and progress insights.",
    stack: ["React", "DnD", "LocalStorage"],
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80"
  }
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Context API",
  "REST APIs",
  "Git",
  "Responsive UI"
];

const highlights = [
  { label: "Projects Built", value: "12+" },
  { label: "UI Components", value: "60+" },
  { label: "Years Learning", value: "2+" }
];

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-0 h-80 w-80 rounded-full bg-orange-400/25 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:py-12">
        <section className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Front-End Developer
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                I design interfaces that feel
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-orange-200 bg-clip-text text-transparent">
                  fast, modern, and alive.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-slate-300">
                React-focused developer creating polished web experiences with
                clean architecture, smooth interactions, and pixel-perfect
                responsiveness.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Explore Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Hire Me
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              <article className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/50 p-3">
                <img
                  src={profileImage}
                  alt="Aman portrait"
                  className="h-40 w-full rounded-xl object-cover object-top sm:h-28 md:h-44"
                />
              </article>
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-slate-900/50 p-4"
                >
                  <p className="text-3xl font-black text-cyan-200">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-bold md:text-3xl">About Me</h2>
            <p className="mt-3 leading-7 text-slate-300">
              I build React interfaces that are easy to use, visually refined,
              and performance-oriented. My focus is transforming product ideas
              into maintainable components and delightful user journeys.
            </p>
            <p className="mt-3 leading-7 text-slate-300">
              I enjoy collaboration, thoughtful UI details, and shipping work
              that makes users feel confident from the first click.
            </p>
          </article>

          <article className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-bold md:text-3xl">Core Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section
          id="projects"
          className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
            <p className="text-sm text-slate-300">Selected UI-focused builds</p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/15 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-40 w-full rounded-xl object-cover"
                />

                <div className="flex items-center justify-between">
                  <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
                  <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-2 py-0.5 text-xs font-semibold text-cyan-100">
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-400/20 via-sky-300/10 to-orange-300/20 p-6 backdrop-blur-xl md:p-8"
        >
          <h2 className="text-2xl font-bold md:text-3xl">Let&apos;s Build Something Great</h2>
          <p className="mt-2 max-w-2xl text-slate-200">
            Open to freelance, internships, and full-time roles where I can
            contribute to impactful products and clean frontend systems.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-4 inline-block rounded-full bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-white"
          >
            hello@example.com
          </a>
        </section>
      </div>
    </main>
  );
}

export default Portfolio;
