import { useEffect, useRef } from 'react';

export default function ElasticStringCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let centerY = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      centerY = height / 2;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let targetX = -100, targetY = -100;
    let currentX = -100, currentY = -100;
    let displayX = -100, displayY = -100;
    let lastMouseX = null, lastMouseY = null;
    let smoothedSpeed = 0;
    let isMouseIn = false;
    let lastMoveTime = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (lastMouseX !== null && lastMouseY !== null) {
        const dx = clientX - lastMouseX;
        const dy = clientY - lastMouseY;
        const speed = Math.hypot(dx, dy);
        smoothedSpeed += (speed - smoothedSpeed) * 0.2;
      }
      lastMouseX = clientX;
      lastMouseY = clientY;

      targetX = clientX - rect.left;
      targetY = clientY - rect.top;
      isMouseIn = true;
      lastMoveTime = performance.now();
    };

    const onMouseEnter = () => { isMouseIn = true; };
    const onMouseLeave = () => { isMouseIn = false; };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    let animId;

    const render = (now) => {
      if (isMouseIn) {
        currentX += (targetX - currentX) * 0.09;
        currentY += (targetY - currentY) * 0.09;
      } else {
        currentY += (centerY - currentY) * 0.1;
      }

      displayX += (currentX - displayX) * 0.09;
      displayY += (currentY - displayY) * 0.09;

      if (Math.abs(currentX - targetX) > 0.5 || Math.abs(currentY - targetY) > 0.5) {
        lastMoveTime = now;
      }
      if (now - lastMoveTime > 50) {
        smoothedSpeed *= 0.9;
      }

      ctx.clearRect(0, 0, width, height);

      const flattenDuration = 350;
      const timeSince = now - lastMoveTime;
      const flattenFactor = Math.max(0, 1 - timeSince / flattenDuration);

      ctx.beginPath();
      const pts = 120;
      let influence = width * 0.14;
      if (smoothedSpeed > 0) {
        const sf = Math.min(1, smoothedSpeed / 30);
        influence += width * 0.12 * sf;
      }
      const maxDev = 45;
      const vertOff = Math.max(-maxDev, Math.min(maxDev, displayY - centerY));

      for (let i = 0; i <= pts; i++) {
        const x = (i / pts) * width;
        let y = centerY;
        const dx = Math.abs(x - displayX);
        if (dx < influence) {
          const inf = 1 - dx / influence;
          const str = Math.pow(Math.sin((inf * Math.PI) / 2), 2);
          y += vertOff * str * flattenFactor;
        }
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // High-end glowing line style
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Subtle center dot cursor on the string
      if (isMouseIn && flattenFactor > 0.1) {
        ctx.beginPath();
        ctx.arc(displayX, centerY + vertOff * flattenFactor, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#6366f1';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-20 pointer-events-auto cursor-crosshair overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
