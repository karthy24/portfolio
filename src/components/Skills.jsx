import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 bg-dark-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-3 tracking-widest uppercase">What I Know</p>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mx-auto mb-4" />
          <p className="section-sub mx-auto text-center">
            A diverse skill set spanning frontend, backend, data analytics, and digital marketing.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div key={category.category} className={`glass-card p-6 border ${category.border}`}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{category.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-badge bg-white/5 border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom marquee */}
        <div className="mt-16 overflow-hidden">
          <p className="text-center text-neutral-600 text-sm mb-6">Technologies I work with</p>
          <div className="flex gap-6 animate-pulse-slow flex-wrap justify-center">
            {['React', 'Node.js', 'JavaScript', 'MySQL', 'Power BI', 'Python', 'Bootstrap', 'SQL', 'Excel', 'SEO', 'Google Ads', 'Express.js'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400 text-sm font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
