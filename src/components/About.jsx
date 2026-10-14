import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { personal } from '../data';

const metrics = [
  { label: 'Production Systems', value: '3+', desc: 'MERN Stack & AI Vision' },
  { label: 'Internships', value: '02', desc: 'BluonTech & Vibhathi Labs' },
  { label: 'Technical Domains', value: '04', desc: 'Dev · SQL · BI · Marketing' },
  { label: 'Verified Skills', value: '20+', desc: 'Modern Tools & Stacks' },
];

export default function About() {
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

            animate('.about-header', {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              ease: 'outExpo',
            });

            animate('.about-narrative', {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 900,
              delay: 150,
              ease: 'outExpo',
            });

            animate('.about-metric-card', {
              opacity: [0, 1],
              scale: [0.95, 1],
              translateY: [30, 0],
              delay: stagger(120, { start: 250 }),
              duration: 850,
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
      id="about"
      className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="about-header opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-3">05 / Profile</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              About &amp; Perspective
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500">
            <span>LOCATION: {personal.location.toUpperCase()}</span>
          </div>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Indented Editorial Narrative */}
          <div className="about-narrative opacity-0 lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight leading-snug">
              Bridging clean code, relational databases, and data-driven insight.
            </h3>

            <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
              <p className="indent-8">
                I'm <span className="text-white font-medium">Karthikeyan N</span>, a software developer and technical analyst
                passionate about creating responsive, high-performance web applications backed by solid database architectures
                and actionable business intelligence.
              </p>
              <p>
                Through my hands-on internships at <span className="text-white font-medium">BluonTech</span> (Web Development) and{' '}
                <span className="text-white font-medium">Vibhathi Labs</span> (SQL &amp; Oracle Apex), I've engineered responsive web interfaces,
                optimized complex database queries, and implemented full-cycle front-end solutions.
              </p>
              <p>
                My multidisciplinary approach integrates <span className="text-cyan-300">Data Analytics</span> (Power BI, Advanced Excel)
                with <span className="text-primary-300">Digital Marketing</span> (SEO, Google Ads, Google Analytics, Tag Manager),
                giving me a unique advantage to engineer digital products that perform technically while driving measurable growth.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                download="Karthikeyan-N-Resume.pdf"
                className="px-6 py-3 bg-white text-dark-950 hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <span>Download Resume (PDF)</span>
                <span>↓</span>
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Let's Discuss Projects ↗
              </button>
            </div>
          </div>

          {/* Right Column: Metric Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="about-metric-card opacity-0 p-6 border border-white/10 bg-white/[0.015] flex flex-col justify-between shadow-xl"
              >
                <p className="font-mono text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
                  {m.value}
                </p>
                <div>
                  <p className="text-xs uppercase font-mono font-semibold text-neutral-300 tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 mt-1">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Status Box */}
            <div className="about-metric-card opacity-0 col-span-2 p-6 border border-primary-500/20 bg-primary-500/5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs text-primary-300 uppercase tracking-widest font-semibold">Ready for Deployment</p>
                <p className="text-neutral-400 text-xs mt-0.5">Available for full-time, contract, or freelance technical roles.</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
