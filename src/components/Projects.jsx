import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Featured Projects" title="What I've built" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <div className="group relative flex flex-col h-full p-6 rounded-xl glass-card hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/30 dark:hover:shadow-indigo-950/40">
        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-1 ring-indigo-400/50 dark:ring-indigo-500/40" />

        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
            >
              <Github size={16} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech stack — rounded pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Feature tags — rounded pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex gap-4 mt-5 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
          >
            <Github size={13} /> View Code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          ) : (
            <span className="text-xs font-medium text-gray-300 dark:text-gray-700 flex items-center gap-1">
              <ExternalLink size={13} /> No live demo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
