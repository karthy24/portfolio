import { useState, useEffect } from 'react';
import { personal } from '../data';

const navItems = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'projects', label: 'Work', num: '02' },
  { id: 'experience', label: 'Experience', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'about', label: 'About', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((n) => document.getElementById(n.id));
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'py-6 border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex items-center justify-between">
        {/* Brand Mark */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-primary-400 transition-colors">
            K
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-primary-300 transition-colors">
            Karthikeyan N<span className="text-primary-400">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`group relative py-1 transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] text-neutral-600 group-hover:text-primary-400 mr-1.5">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: Resume only */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            download="Karthikeyan-N-Resume.pdf"
            className="px-4 py-1.5 border border-white/20 hover:border-primary-400 font-mono text-xs uppercase tracking-wider text-white hover:text-primary-300 transition-colors"
          >
            CV (PDF) ↗
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-white/20 text-white"
        >
          {menuOpen ? 'CLOSE ✕' : 'MENU //'}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-8">
          <ul className="space-y-4 font-mono text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left py-2 flex items-center justify-between text-neutral-300 hover:text-white border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-neutral-600">{item.num}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              download="Karthikeyan-N-Resume.pdf"
              className="block w-full text-center py-3 bg-white text-dark-950 font-mono text-xs font-bold uppercase tracking-wider"
            >
              Download CV ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
