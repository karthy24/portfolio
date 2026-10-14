import { personal } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 sm:px-12 md:px-16 border-t border-white/10 bg-dark-950 font-mono text-xs text-neutral-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 border border-white/20 flex items-center justify-center text-white font-bold text-[10px]">
            K
          </span>
          <span className="text-neutral-400">
            © 2026 <span className="text-white">Karthikeyan N</span> · All rights reserved.
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-neutral-600">
          <span>DEV</span>
          <span>·</span>
          <span>SQL</span>
          <span>·</span>
          <span>DATA ANALYTICS</span>
          <span>·</span>
          <span>DIGITAL MARKETING</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN ↗
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors text-primary-400 flex items-center gap-1"
          >
            <span>TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
