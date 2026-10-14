import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { skills } from '../data';

export default function Skills() {
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            // Header entrance
            animate('.skills-header', {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              ease: 'outExpo',
            });

            // Staggered cards entrance
            animate('.skill-card', {
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.96, 1],
              delay: stagger(140, { start: 150 }),
              duration: 900,
              ease: 'outExpo',
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-3">04 / Capabilities</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Technical Stack &amp; Domain
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed">
            Multidisciplinary competencies combining modern full-stack development, database query optimization, data analytics, and digital marketing infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <div
              key={category.category}
              className="skill-card opacity-0 p-8 border border-white/10 bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Number & Category Name */}
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500 mb-6">
                  <span>0{idx + 1} // DOMAIN</span>
                  <span className="text-lg">{category.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-6">
                  {category.category}
                </h3>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 font-mono text-xs text-neutral-300 bg-white/5 border border-white/10 hover:border-primary-400/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric */}
              <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[11px] text-neutral-500 flex justify-between">
                <span>SKILLS COUNT: {category.items.length}</span>
                <span className="text-primary-400">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
