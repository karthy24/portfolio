import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const orbsRef = useRef({
    orb1: null,
    orb2: null,
    orb3: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scroll state tracking with smooth lerp
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let scrollProgress = 0;

    // Mouse tracking
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    // Entry animation state (runs when page loads)
    let entryStartTime = performance.now();
    const entryDuration = 1400; // ms

    // Particle system configuration
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
    const particles = [];
    const colors = [
      { r: 99, g: 102, b: 241 },   // Indigo
      { r: 6, g: 182, b: 212 },    // Cyan
      { r: 168, g: 85, b: 247 },   // Violet
      { r: 59, g: 130, b: 246 },   // Sky Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[i % colors.length];
      const depth = 0.3 + Math.random() * 1.4; // 3D depth layer
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        baseSpeedX: (Math.random() - 0.5) * 0.45 * depth,
        baseSpeedY: (Math.random() - 0.5) * 0.45 * depth,
        size: (1.2 + Math.random() * 2.2) * (depth > 1 ? 1.2 : 0.8),
        color: color,
        depth: depth,
        alpha: 0.15 + Math.random() * 0.55,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Scroll listener
    const handleScroll = () => {
      targetScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = docHeight > 0 ? targetScrollY / docHeight : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse listener
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = (now) => {
      // Calculate entry expansion factor (0 -> 1 with ease-out cubic)
      const elapsed = now - entryStartTime;
      const entryRaw = Math.min(elapsed / entryDuration, 1);
      const entryProgress = 1 - Math.pow(1 - entryRaw, 3); // cubic ease-out

      // Smooth lerp for scroll position & velocity
      const scrollDiff = targetScrollY - currentScrollY;
      currentScrollY += scrollDiff * 0.08;
      scrollVelocity = (targetScrollY - lastScrollY) * 0.15;
      lastScrollY = targetScrollY;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Update background orbs in sync with scroll progress & entry animation
      if (orbsRef.current.orb1 && orbsRef.current.orb2 && orbsRef.current.orb3) {
        const orb1Y = -120 + scrollProgress * 350;
        const orb1X = -120 + Math.sin(scrollProgress * Math.PI * 2) * 150;
        const orb2Y = 200 - scrollProgress * 250;
        const orb2X = (width * 0.7) - Math.cos(scrollProgress * Math.PI * 2) * 120;
        const orb3Y = (height * 0.6) + Math.sin(scrollProgress * Math.PI) * 200;

        orbsRef.current.orb1.style.transform = `translate3d(${orb1X * entryProgress}px, ${orb1Y * entryProgress}px, 0)`;
        orbsRef.current.orb2.style.transform = `translate3d(${orb2X * entryProgress}px, ${orb2Y * entryProgress}px, 0)`;
        orbsRef.current.orb3.style.transform = `translate3d(${orb3Y * entryProgress}px, 0, 0)`;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw subtle responsive grid mesh that tilts slightly on scroll
      const gridSpacing = 64;
      const gridOffsetY = (currentScrollY * 0.15) % gridSpacing;
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.025)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -gridSpacing + gridOffsetY; y < height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render & Update Particles
      const len = particles.length;
      const scrollForce = prefersReducedMotion ? 0 : scrollVelocity * 0.8;

      for (let i = 0; i < len; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Entry animation: burst outward from center to target positions
          if (entryProgress < 1) {
            const centerX = width / 2;
            const centerY = height / 2;
            p.x = centerX + (p.originX - centerX) * entryProgress;
            p.y = centerY + (p.originY - centerY) * entryProgress;
          } else {
            // Normal floating movement
            p.x += p.baseSpeedX;
            // Scroll reactive motion: foreground particles move faster with scroll
            p.y += p.baseSpeedY - scrollForce * p.depth;
          }

          // Screen wrapping with buffer
          if (p.x < -30) p.x = width + 30;
          if (p.x > width + 30) p.x = -30;
          if (p.y < -30) p.y = height + 30;
          if (p.y > height + 30) p.y = -30;

          // Mouse interaction (repel gently when cursor is active)
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 140;
            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 2.5 * p.depth;
              p.x += (dx / dist) * force;
              p.y += (dy / dist) * force;
            }
          }
        }

        // Dynamic pulsing alpha
        const pulse = Math.sin(now * 0.002 + p.pulseOffset) * 0.2;
        const currentAlpha = Math.max(0.05, Math.min(0.9, (p.alpha + pulse) * entryProgress));

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.fill();

        // Connect nearby particles with luminous lines
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxConnectDist = 110;

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * 0.18 * entryProgress;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Animated Gradient Orbs */}
      <div
        ref={(el) => (orbsRef.current.orb1 = el)}
        className="orb orb-1 transition-transform duration-700 ease-out will-change-transform"
      />
      <div
        ref={(el) => (orbsRef.current.orb2 = el)}
        className="orb orb-2 transition-transform duration-700 ease-out will-change-transform"
      />
      <div
        ref={(el) => (orbsRef.current.orb3 = el)}
        className="orb orb-3 transition-transform duration-700 ease-out will-change-transform"
      />

      {/* Interactive Constellation & Scroll Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/80 pointer-events-none" />
    </div>
  );
}
