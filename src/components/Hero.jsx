import { useState, useEffect } from 'react';
import ElasticStringCanvas from './ElasticStringCanvas';
import { personal } from '../data';

const disciplines = [
  'Web Development & Front-End',
  'Full-Stack Architecture',
  'Data Analytics & Power BI',
  'SEO & Digital Strategy',
];

export default function Hero() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDiscipline((prev) => (prev + 1) % disciplines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-28 pb-12 overflow-hidden border-b border-white/5"
    >
      {/* Interactive Elastic String across the middle */}
      <ElasticStringCanvas />

      {/* Top Header Row of Hero */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pointer-events-none">
        {/* Monogram Initial */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 border border-white/20 rounded-none flex items-center justify-center font-mono text-2xl font-bold tracking-tighter text-white bg-white/[0.02] backdrop-blur-sm">
            K<span className="text-primary-400">.</span>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">Portfolio</p>
            <p className="text-sm font-medium text-white">{personal.name}</p>
          </div>
        </div>

        {/* Dynamic Caption [ ] */}
        <div className="flex items-center gap-3 font-mono text-xs md:text-sm tracking-wider text-neutral-400">
          <span className="text-neutral-600">[</span>
          <span className="text-primary-300 font-semibold transition-all duration-500 ease-out">
            {disciplines[activeDiscipline]}
          </span>
          <span className="text-neutral-600">]</span>
        </div>

        {/* Availability Badge */}
        <div className="flex items-center gap-2.5 font-mono text-xs text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE FOR HIRE
        </div>
      </div>

      {/* Centerpiece / Typography */}
      <div className="relative z-10 my-auto py-12 max-w-5xl pointer-events-none">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-[0.3em] mb-4">
          Creative Developer · Full-Stack Engineer · Tamil Nadu, IN
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] uppercase">
          Great code <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-500">
            speaks with purpose.
          </span>
        </h1>
        <p className="mt-8 text-neutral-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
          Designing responsive digital experiences that balance bold technical execution with meticulous attention to detail.
        </p>
      </div>

      {/* Bottom Bar of Hero */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/5 pointer-events-auto">
        <div className="flex items-center gap-6 font-mono text-xs text-neutral-500">
          <span>01 / 05 SECTIONS</span>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <span className="hidden sm:inline">DRAG OR HOVER CURSOR ON LINE TO INTERACT</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-white text-dark-950 hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            Explore Selected Work ↓
          </button>
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            download="Karthikeyan-N-Resume.pdf"
            className="px-5 py-2.5 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
          >
            Download CV ↗
          </a>
        </div>
      </div>
    </section>
  );
}
