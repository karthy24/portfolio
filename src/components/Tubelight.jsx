import { useState, useEffect } from 'react';
import { animate } from 'animejs';

export const TUBELIGHT_COLORS = {
  pink: {
    id: 'pink',
    name: 'Neon Pink',
    glow: '#ec4899',
    wash: 'from-pink-500/35 via-purple-600/20 to-transparent',
    accent: '#f43f5e',
    textGlow: '0 0 25px rgba(244, 63, 94, 0.7)',
  },
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    glow: '#06b6d4',
    wash: 'from-cyan-500/35 via-blue-600/20 to-transparent',
    accent: '#22d3ee',
    textGlow: '0 0 25px rgba(6, 182, 212, 0.7)',
  },
  purple: {
    id: 'purple',
    name: 'Electric Purple',
    glow: '#a855f7',
    wash: 'from-purple-500/35 via-indigo-600/20 to-transparent',
    accent: '#c084fc',
    textGlow: '0 0 25px rgba(168, 85, 247, 0.7)',
  },
  amber: {
    id: 'amber',
    name: 'Warm Amber',
    glow: '#f59e0b',
    wash: 'from-amber-500/35 via-orange-600/20 to-transparent',
    accent: '#fbbf24',
    textGlow: '0 0 25px rgba(245, 158, 11, 0.7)',
  },
};

export default function Tubelight({ isOn, setIsOn, colorKey = 'pink', setColorKey }) {
  const [flickering, setFlickering] = useState(false);
  const color = TUBELIGHT_COLORS[colorKey] || TUBELIGHT_COLORS.pink;

  const toggleLight = () => {
    if (!isOn) {
      // Realistic fluorescent ignition flicker
      setFlickering(true);
      setTimeout(() => setFlickering(false), 380);
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  };

  useEffect(() => {
    if (isOn) {
      animate('.tubelight-beam', {
        opacity: [0, 1],
        scaleY: [0.4, 1],
        duration: 450,
        ease: 'outExpo',
      });
    }
  }, [isOn, colorKey]);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. THE FIGMA-STYLE TUBELIGHT SLIT & VOLUMETRIC WALL WASH
         ───────────────────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-30 flex justify-center overflow-hidden h-[750px]">
        {isOn && (
          <div
            className={`tubelight-beam relative w-full flex flex-col items-center transition-opacity duration-300 ${
              flickering ? 'animate-tubelight-flicker' : ''
            }`}
          >
            {/* The Physical Glowing Tubelight Slit */}
            <div
              className="relative z-20 h-[3.5px] w-[320px] sm:w-[480px] md:w-[640px] rounded-full"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: `0 0 10px 2px #fff, 0 0 30px 6px ${color.glow}, 0 0 70px 14px ${color.glow}`,
              }}
            />

            {/* Micro Lamp Mount Caps on both ends */}
            <div className="absolute top-0 w-[332px] sm:w-[492px] md:w-[652px] flex justify-between pointer-events-none z-20">
              <span className="w-2.5 h-1.5 bg-neutral-600 rounded-sm" />
              <span className="w-2.5 h-1.5 bg-neutral-600 rounded-sm" />
            </div>

            {/* Intense Core Bloom at the ceiling */}
            <div
              className="absolute top-0 w-[450px] sm:w-[650px] md:w-[850px] h-[70px] rounded-[50%]"
              style={{
                background: `radial-gradient(ellipse at top, ${color.glow} 0%, transparent 75%)`,
                filter: 'blur(20px)',
                opacity: 0.85,
              }}
            />

            {/* Volumetric Downward Conical Light Wash (as in Figma image) */}
            <div
              className={`w-full max-w-5xl h-[650px] bg-gradient-to-b ${color.wash}`}
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                filter: 'blur(35px)',
                transformOrigin: 'top center',
              }}
            />

            {/* Deep Ambient Floor/Hero Glow */}
            <div
              className="absolute top-20 w-[550px] sm:w-[750px] h-[450px] rounded-full"
              style={{
                background: `radial-gradient(circle, ${color.glow} 0%, transparent 65%)`,
                filter: 'blur(90px)',
                opacity: 0.28,
              }}
            />
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE INTERACTIVE TUBELIGHT CONTROL SWITCH (Floating Pill)
         ───────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-1.5 pl-3 bg-dark-950/90 backdrop-blur-xl border border-white/15 rounded-full shadow-2xl font-mono text-xs text-white">
        {/* State Label */}
        <span className="text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mr-1">
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              isOn ? 'animate-pulse' : 'bg-neutral-600'
            }`}
            style={{ backgroundColor: isOn ? color.accent : undefined }}
          />
          Tubelight:
        </span>

        {/* Physical Click Toggle */}
        <button
          onClick={toggleLight}
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
            isOn
              ? 'bg-white text-dark-950 shadow-lg'
              : 'bg-white/10 text-neutral-400 hover:text-white'
          }`}
          title="Toggle Tubelight On/Off"
        >
          <span>{isOn ? 'ON' : 'OFF'}</span>
          <span>{isOn ? '💡' : '🌑'}</span>
        </button>

        {/* Color Palette Switcher (shown when light is on) */}
        {isOn && (
          <div className="flex items-center gap-1 pl-2 border-l border-white/15">
            {Object.keys(TUBELIGHT_COLORS).map((k) => {
              const c = TUBELIGHT_COLORS[k];
              const isSelected = colorKey === k;
              return (
                <button
                  key={k}
                  onClick={() => setColorKey(k)}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    isSelected ? 'scale-125 ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.glow }}
                  title={`Switch color to ${c.name}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
