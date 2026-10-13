import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3 tracking-widest uppercase">What I've Built</p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mx-auto mb-4" />
          <p className="section-sub mx-auto text-center">
            Real-world projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`glass-card border ${project.border} flex flex-col overflow-hidden group`}
            >
              {/* Card header */}
              <div className={`p-6 pb-4 bg-gradient-to-br ${project.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Source Code"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-6 pt-4 flex flex-col flex-1">
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-neutral-300">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects note */}
        <div className="mt-10 text-center">
          <p className="text-neutral-500 text-sm">
            More projects on{' '}
            <a href="#" className="text-primary-400 hover:text-primary-300 underline underline-offset-4">
              GitHub ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
