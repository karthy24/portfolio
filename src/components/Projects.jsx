import { projects, personal } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-3">02 / Selected Works</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Real-world systems spanning computer vision AI, agricultural IoT dashboards, and secure generative AI platforms.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const indexStr = `0${idx + 1}`;
            return (
              <div
                key={project.title}
                className="group relative border border-white/10 hover:border-white/30 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
                  {/* Left Column: Number + Info */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Top Meta */}
                      <div className="flex items-center gap-4 font-mono text-xs text-neutral-400 mb-6">
                        <span className="text-primary-400 font-bold text-sm">{indexStr}</span>
                        <span className="text-neutral-700">/</span>
                        <span className="uppercase tracking-widest">{project.tags.slice(0, 2).join(' · ')}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-primary-200 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2.5 mb-8">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 font-mono">
                            <span className="text-primary-400 mt-0.5">↳</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono text-neutral-400 bg-white/5 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Custom Generative Visual Card */}
                  <div className="lg:col-span-5 relative aspect-[4/3] rounded-none border border-white/10 bg-dark-900 overflow-hidden flex flex-col justify-between p-6">
                    {/* Generative Visual Elements per Project */}
                    {idx === 0 && (
                      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-indigo-950/40 via-dark-950 to-dark-900">
                        <div className="flex justify-between items-center font-mono text-xs text-neutral-500">
                          <span>AI_VISION_SYS // YOLO</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <div className="my-auto text-center">
                          <div className="inline-block p-4 border border-indigo-500/30 bg-indigo-500/10 mb-3">
                            <span className="text-4xl">🚨</span>
                          </div>
                          <p className="font-mono text-xs text-indigo-300 uppercase tracking-widest">
                            Real-time Spatial Tracking
                          </p>
                          <p className="font-mono text-[10px] text-neutral-500 mt-1">Twilio API · SMTP Relay · OpenCV</p>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-600 flex justify-between">
                          <span>LATENCY: &lt;15ms</span>
                          <span>STATUS: ACTIVE</span>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-emerald-950/40 via-dark-950 to-dark-900">
                        <div className="flex justify-between items-center font-mono text-xs text-neutral-500">
                          <span>AGRI_GUIDE // IOT</span>
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        </div>
                        <div className="my-auto text-center">
                          <div className="inline-block p-4 border border-cyan-500/30 bg-cyan-500/10 mb-3">
                            <span className="text-4xl">🌱</span>
                          </div>
                          <p className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
                            Intelligent Irrigation Schedule
                          </p>
                          <p className="font-mono text-[10px] text-neutral-500 mt-1">MERN Stack · Crop Health Logic</p>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-600 flex justify-between">
                          <span>SOIL_TELEMETRY: OPTIMAL</span>
                          <span>REACT_DASHBOARD: V2</span>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-purple-950/40 via-dark-950 to-dark-900">
                        <div className="flex justify-between items-center font-mono text-xs text-neutral-500">
                          <span>NEURAL_STUDIO // GEN_AI</span>
                          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        </div>
                        <div className="my-auto text-center">
                          <div className="inline-block p-4 border border-purple-500/30 bg-purple-500/10 mb-3">
                            <span className="text-4xl">✨</span>
                          </div>
                          <p className="font-mono text-xs text-purple-300 uppercase tracking-widest">
                            AI Synthesis Engine
                          </p>
                          <p className="font-mono text-[10px] text-neutral-500 mt-1">OpenAI API · Express Security Proxy</p>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-600 flex justify-between">
                          <span>ENCRYPTED_AUTH: ENABLED</span>
                          <span>MERN: FULL-STACK</span>
                        </div>
                      </div>
                    )}

                    {/* View Code Overlay Button */}
                    <div className="relative z-10 mt-auto pt-4 flex justify-end">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-dark-950 font-mono text-xs uppercase tracking-wider transition-colors"
                      >
                        View Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all on GitHub */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            Interested in source architecture and code repos?
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-white hover:text-primary-300 uppercase tracking-wider flex items-center gap-2"
          >
            Visit GitHub Profile (@karthy24) ↗
          </a>
        </div>
      </div>
    </section>
  );
}
