import { useState } from 'react';
import { experience } from '../data';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-3">03 / Background</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Work &amp; Experience
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Professional trajectory across front-end engineering, database architecture, and full-stack development.
          </p>
        </div>

        {/* Experience List - mbrown.work client row style */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={exp.company}
                className="group transition-colors duration-300"
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-white/[0.015] px-4 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-neutral-600">0{idx + 1}</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white group-hover:text-primary-300 transition-colors">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline font-mono text-xs px-2.5 py-1 border border-white/10 text-neutral-400">
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs text-neutral-400">
                    <span className="text-neutral-300">{exp.role}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-500 whitespace-nowrap">{exp.period}</span>
                    <span className="text-primary-400 text-lg transition-transform duration-300 transform">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-4 pb-8 pt-2 pl-12 sm:pl-16 border-t border-white/5 animate-fade-in">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-8 space-y-3">
                        {exp.description.map((point, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed font-light">
                            <span className="text-primary-400 font-mono mt-0.5">↳</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                      <div className="md:col-span-4 font-mono text-xs text-neutral-500 flex flex-col justify-between">
                        <div>
                          <p className="uppercase tracking-widest text-neutral-400 mb-1">Location</p>
                          <p className="text-neutral-300 mb-4">{exp.location}, India</p>
                          <p className="uppercase tracking-widest text-neutral-400 mb-1">Focus Area</p>
                          <p className="text-neutral-300">
                            {idx === 0 ? 'Front-End UI & Responsive Systems' : 'DBMS Architecture & SQL Optimization'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
