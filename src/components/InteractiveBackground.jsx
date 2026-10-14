import { useEffect, useRef } from 'react';

// Programming & Computer Science syntax symbols
const CODE_SYMBOLS = [
  '</>', '{ }', '=>', '0101', 'const', 'async', 'SELECT', 'SQL',
  'fn()', '[ ]', 'API', 'db', 'git', '&&', '200 OK', 'POST',
  'import', 'return', 'state', 'cache', 'npm', '0x2A'
];

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scroll state tracking with smooth lerp
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    // Mouse tracking
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    // Entry animation
    const entryStartTime = performance.now();
    const entryDuration = 1200;

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCircuits();
    };
    window.addEventListener('resize', handleResize);

    // Scroll listener
    const handleScroll = () => {
      targetScrollY = window.scrollY;
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

    // 1. Floating Code Syntax Particles
    const codeParticles = [];
    const codeCount = Math.min(Math.floor((width * height) / 28000), 40);

    for (let i = 0; i < codeCount; i++) {
      codeParticles.push({
        text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        depth: 0.4 + Math.random() * 1.1,
        alpha: 0.12 + Math.random() * 0.38,
        fontSize: Math.floor(10 + Math.random() * 6),
        color: Math.random() > 0.4 ? '6, 182, 212' : '99, 102, 241', // Cyan or Indigo
      });
    }

    // 2. Circuit Board Bus Network
    let circuits = [];
    function initCircuits() {
      circuits = [];
      const colSpacing = Math.max(140, Math.floor(width / 8));
      const rowSpacing = Math.max(140, Math.floor(height / 6));

      for (let x = colSpacing / 2; x < width; x += colSpacing) {
        for (let y = rowSpacing / 2; y < height; y += rowSpacing) {
          // Add occasional right-angle circuit trace
          const connectsRight = Math.random() > 0.45;
          const connectsDown = Math.random() > 0.45;

          if (connectsRight) {
            circuits.push({
              x1: x,
              y1: y,
              x2: x + colSpacing,
              y2: y,
              packetProgress: Math.random(),
              packetSpeed: 0.002 + Math.random() * 0.003,
              activePulse: 0,
            });
          }
          if (connectsDown) {
            circuits.push({
              x1: x,
              y1: y,
              x2: x,
              y2: y + rowSpacing,
              packetProgress: Math.random(),
              packetSpeed: 0.002 + Math.random() * 0.003,
              activePulse: 0,
            });
          }
        }
      }
    }
    initCircuits();

    // 3. Render Loop
    const render = (now) => {
      const elapsed = now - entryStartTime;
      const entryProgress = Math.min(elapsed / entryDuration, 1);

      // Smooth scroll lerp
      const scrollDiff = targetScrollY - currentScrollY;
      currentScrollY += scrollDiff * 0.08;
      scrollVelocity = (targetScrollY - lastScrollY) * 0.15;
      lastScrollY = targetScrollY;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle cyber grid background
      const gridSize = 48;
      const offsetY = (currentScrollY * 0.2) % gridSize;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = -gridSize + offsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render Circuit Traces & Digital Packets
      const circuitLen = circuits.length;
      for (let i = 0; i < circuitLen; i++) {
        const c = circuits[i];

        // Check proximity to cursor
        const midX = (c.x1 + c.x2) / 2;
        const midY = (c.y1 + c.y2) / 2;
        const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
        const isNearMouse = mouse.active && distToMouse < 180;

        if (isNearMouse) {
          c.activePulse = Math.min(1, c.activePulse + 0.1);
        } else {
          c.activePulse = Math.max(0, c.activePulse - 0.03);
        }

        const baseAlpha = 0.04 * entryProgress;
        const hoverAlpha = c.activePulse * 0.35;
        const lineAlpha = baseAlpha + hoverAlpha;

        // Draw circuit trace
        ctx.beginPath();
        ctx.moveTo(c.x1, c.y1);
        ctx.lineTo(c.x2, c.y2);
        ctx.strokeStyle = isNearMouse
          ? `rgba(6, 182, 212, ${lineAlpha})`
          : `rgba(99, 102, 241, ${lineAlpha})`;
        ctx.lineWidth = isNearMouse ? 1.5 : 1;
        ctx.stroke();

        // Node junction points
        ctx.beginPath();
        ctx.arc(c.x1, c.y1, isNearMouse ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? 'rgba(6, 182, 212, 0.6)' : 'rgba(255, 255, 255, 0.1)';
        ctx.fill();

        // Traveling Digital Packet (Data Bit)
        if (!prefersReducedMotion) {
          const scrollBoost = Math.abs(scrollVelocity) * 0.002;
          c.packetProgress = (c.packetProgress + c.packetSpeed + scrollBoost) % 1;
          const px = c.x1 + (c.x2 - c.x1) * c.packetProgress;
          const py = c.y1 + (c.y2 - c.y1) * c.packetProgress;

          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, ${0.45 * entryProgress + hoverAlpha})`;
          ctx.fill();
        }
      }

      // Render Floating Code Syntax Tokens
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const codeLen = codeParticles.length;
      for (let i = 0; i < codeLen; i++) {
        const cp = codeParticles[i];

        if (!prefersReducedMotion) {
          // Floating motion
          cp.x += cp.speedX;
          // Scroll responsiveness: syntax tokens shift with parallax depth
          cp.y += cp.speedY - (scrollVelocity * 0.7 * cp.depth);

          // Wrap boundaries
          if (cp.x < -60) cp.x = width + 60;
          if (cp.x > width + 60) cp.x = -60;
          if (cp.y < -60) cp.y = height + 60;
          if (cp.y > height + 60) cp.y = -60;

          // Mouse proximity interaction (cursor illuminates nearby code)
          if (mouse.active) {
            const dx = cp.x - mouse.x;
            const dy = cp.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 150 && dist > 0) {
              const repel = (1 - dist / 150) * 1.5;
              cp.x += (dx / dist) * repel;
              cp.y += (dy / dist) * repel;
            }
          }
        }

        // Draw monospace code symbol
        ctx.font = `${cp.fontSize}px "JetBrains Mono", Consolas, monospace`;
        const pulse = Math.sin(now * 0.002 + i) * 0.08;
        const currentAlpha = Math.max(0.04, Math.min(0.65, (cp.alpha + pulse) * entryProgress));

        ctx.fillStyle = `rgba(${cp.color}, ${currentAlpha})`;
        ctx.fillText(cp.text, cp.x, cp.y);
      }

      // Interactive Cursor Tech Glow / Logic Probe
      if (mouse.active && !prefersReducedMotion) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 140
        );
        glowGradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
        glowGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient background glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Cyber Circuit & Code Matrix Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-950/90 pointer-events-none" />
    </div>
  );
}
