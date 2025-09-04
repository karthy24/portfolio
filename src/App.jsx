import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="font-display">
      <nav className="sticky top-0 z-40 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center gap-6 text-sm">
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all"></span>
          </a>
          <a href="#skills" className="relative group">
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all"></span>
          </a>
          <a href="#projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all"></span>
          </a>
          <a href="#timeline" className="relative group">
            Timeline
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all"></span>
          </a>
          <a href="#contact" className="ml-auto relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all"></span>
          </a>
        </div>
      </nav>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <footer className="py-10 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Karthikeyan N. Built with React + Tailwind.
      </footer>
    </div>
  )
}
