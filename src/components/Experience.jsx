import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 bg-dark-900/40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3 tracking-widest uppercase">Work History</p>
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mx-auto mb-4" />
          <p className="section-sub mx-auto text-center">
            Hands-on internship experience in web development and database management.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={exp.company} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl border-2 flex items-center justify-center text-xl flex-shrink-0 bg-dark-800 z-10"
                    style={{ borderColor: exp.accent }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div className={`glass-card border ${exp.color} p-6 flex-1`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="font-semibold" style={{ color: exp.accent }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-neutral-300 whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-500 text-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-neutral-300 text-sm leading-relaxed">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke={exp.accent}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
