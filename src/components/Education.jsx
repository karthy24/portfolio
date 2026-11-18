import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { education } from '../data';

export default function Education() {
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  // Entrance animation using anime.js
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            // Header entrance
            animate('.edu-header', {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              ease: 'outExpo',
            });

            // Left side years horizontal sliding motion
            animate('.edu-year-box', {
              opacity: [0, 1],
              translateX: [-80, 0],
              delay: stagger(180, { start: 150 }),
              duration: 1000,
              ease: 'outExpo',
            });

            // Education content cards entrance
            animate('.edu-card-content', {
              opacity: [0, 1],
              translateX: [40, 0],
              delay: stagger(180, { start: 220 }),
              duration: 900,
              ease: 'outExpo',
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-reactive dynamic movement for the left-side year:
  // As the user scrolls through the education section, the years subtly glide horizontally!
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = sectionRef.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const viewportH = window.innerHeight;
            // Calculate progress through viewport (-1 to 1)
            const progress = (viewportH - rect.top) / (viewportH + rect.height);
            // Move left-side year by up to 28px based on scroll position
            const moveX = Math.max(-15, Math.min(28, (progress - 0.5) * 55));
            setScrollYOffset(moveX);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="edu-header opacity-0 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-16">
          <div>
            <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-3">
              Academic Background
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Education
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base font-light leading-relaxed font-mono text-xs uppercase tracking-wider">
            Foundations in Computer Science, engineering problem-solving &amp; technical fundamentals.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 relative">
          {education.map((item, idx) => (
            <div
              key={item.degree}
              className="group relative border border-white/10 hover:border-primary-400/40 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-10 items-center">
                
                {/* Left Side: Animated Moving Year Box */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div
                    className="edu-year-box opacity-0 inline-flex items-center gap-3 transition-transform duration-300 ease-out"
                    style={{
                      transform: `translateX(${scrollYOffset}px)`,
                    }}
                  >
                    <div className="w-10 h-10 border border-primary-500/30 bg-primary-500/10 flex items-center justify-center text-lg shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-mono text-lg sm:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors tracking-tight">
                        {item.period}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Degree, Institution & Details */}
                <div className="edu-card-content opacity-0 lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-4 lg:pt-0 lg:pl-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-primary-200 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-primary-300/90 mb-4 flex items-center gap-2">
                      <span className="text-neutral-500">📍</span>
                      <span>{item.institution}</span>
                    </p>
                  </div>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      {item.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed"
                        >
                          <span className="text-primary-400 font-mono mt-0.5">↳</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Subtle Glowing Line Indicator */}
              <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{
                  background: 'linear-gradient(90deg, #14b8a6, #34d399, transparent)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
