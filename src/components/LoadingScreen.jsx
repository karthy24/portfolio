import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';

export default function LoadingScreen({ onDone }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate logo letter
    animate('.ls-letter', {
      opacity: [0, 1],
      scale: [0.3, 1],
      duration: 500,
      ease: 'outBack(1.4)',
    });

    // Animate name chars
    animate('.ls-char', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 400,
      delay: stagger(50, { start: 300 }),
      ease: 'outExpo',
    });

    // Animate tagline
    animate('.ls-tagline', {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 500,
      delay: 800,
      ease: 'outExpo',
    });

    // Animate grid lines
    animate('.ls-grid-line', {
      scaleX: [0, 1],
      duration: 600,
      delay: stagger(80, { start: 200 }),
      ease: 'outExpo',
    });

    // Animate dots
    animate('.ls-dot', {
      opacity: [0, 1],
      scale: [0, 1],
      duration: 300,
      delay: stagger(120, { start: 400 }),
      ease: 'outBack(2)',
    });

    // Progress bar
    animate(barRef.current, {
      width: ['0%', '100%'],
      duration: 1700,
      delay: 300,
      ease: 'inOutQuart',
      onUpdate: (anim) => {
        setProgress(Math.round(anim.progress));
      },
    });

    // Fade out entire loading screen
    const exitTimer = setTimeout(() => {
      animate(containerRef.current, {
        opacity: [1, 0],
        duration: 500,
        ease: 'inQuart',
        onComplete: () => onDone(),
      });
    }, 2100);

    return () => clearTimeout(exitTimer);
  }, [onDone]);

  const nameChars = 'KARTHIKEYAN N'.split('');

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at 30% 30%, #0b1a17 0%, #050d0b 60%, #030808 100%)' }}
    >
      {/* Animated Grid Lines (horizontal) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="ls-grid-line absolute left-0 right-0 h-px"
            style={{
              top: `${10 + i * 12}%`,
              background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.12), transparent)',
              transformOrigin: 'left',
              scaleX: 0,
            }}
          />
        ))}
        {/* Vertical center line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(20,184,166,0.08), transparent)' }} />
      </div>

      {/* Corner Dots */}
      {[
        'top-8 left-8', 'top-8 right-8',
        'bottom-8 left-8', 'bottom-8 right-8',
      ].map((pos, i) => (
        <div
          key={i}
          className={`ls-dot absolute ${pos} w-1.5 h-1.5 rounded-full`}
          style={{ background: '#14b8a6', boxShadow: '0 0 8px #14b8a6' }}
        />
      ))}

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 px-8">

        {/* Monogram Box */}
        <div className="relative">
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: 'transparent',
              boxShadow: '0 0 40px 8px rgba(20,184,166,0.25), 0 0 80px 20px rgba(20,184,166,0.08)',
            }}
          />
          <div
            className="ls-letter relative w-20 h-20 border-2 flex items-center justify-center font-mono text-4xl font-black"
            style={{
              borderColor: '#14b8a6',
              color: '#14b8a6',
              textShadow: '0 0 20px #14b8a6, 0 0 40px rgba(20,184,166,0.5)',
              opacity: 0,
            }}
          >
            K
          </div>
        </div>

        {/* Name */}
        <div className="flex items-center gap-[3px] font-mono text-lg sm:text-xl tracking-[0.3em] uppercase">
          {nameChars.map((ch, i) => (
            <span
              key={i}
              className="ls-char"
              style={{
                color: ch === ' ' ? 'transparent' : '#e2fdf8',
                opacity: 0,
                display: 'inline-block',
                minWidth: ch === ' ' ? '12px' : undefined,
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="ls-tagline font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: '#14b8a6', opacity: 0 }}
        >
          Full-Stack · Analytics · Digital
        </p>

        {/* Progress Bar */}
        <div className="w-56 sm:w-72 mt-4">
          <div className="flex justify-between font-mono text-[10px] tracking-widest mb-2"
            style={{ color: 'rgba(20,184,166,0.5)' }}>
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
          <div
            className="w-full h-px relative overflow-hidden"
            style={{ background: 'rgba(20,184,166,0.15)' }}
          >
            <div
              ref={barRef}
              className="absolute top-0 left-0 h-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg, #14b8a6, #34d399, #06b6d4)',
                boxShadow: '0 0 10px #14b8a6, 0 0 20px rgba(20,184,166,0.4)',
              }}
            />
          </div>
        </div>

        {/* Quote */}
        <p
          className="ls-tagline font-mono text-[10px] text-center mt-2 max-w-xs"
          style={{ color: 'rgba(209,250,229,0.35)', letterSpacing: '0.05em', opacity: 0 }}
        >
          &ldquo;As long as I live, there are infinite chances.&rdquo;
        </p>
      </div>
    </div>
  );
}
