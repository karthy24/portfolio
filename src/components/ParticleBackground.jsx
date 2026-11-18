import { useEffect, useRef } from 'react';
import { ParticleStudio } from '../lib/particle-field/engine.js';

const SETTINGS = {
  count: 250000,
  size: 1.95,
  speed: 0.45,
  opacity: 0.7,
  bloomStrength: 0.75,
  bloomRadius: 0.08,
  bloomThreshold: 0.21,
  colorA: '#25b8ff',
  colorB: '#b04dff',
  autorotate: false,
};

const FORM = {
  kind: 'tree',
  seed: 2371866854,
};

const DPR_CAP = 2;

export default function ParticleBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const studio = new ParticleStudio(canvas, { ...SETTINGS });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      studio.setSpeed(Math.min(SETTINGS.speed, 0.12));
    }

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      studio.resize(w, h, Math.min(window.devicePixelRatio || 1, DPR_CAP));
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Initial form: gather particles in from a wide sphere
    studio.showForm(FORM.kind, FORM.seed, 'gather');

    let playing = true;
    let last = performance.now();
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        playing = entry.isIntersecting;
        last = performance.now();
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(container);

    let animId;
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (playing) {
        studio.renderFrame(dt);
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      studio.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10 bg-black overflow-hidden pointer-events-auto"
      style={{ touchAction: 'none' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
