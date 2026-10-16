import { useState, useCallback } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadingDone} />}

      <div className={`relative min-h-screen transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Interactive & Scroll-Responsive Animated Background */}
        <InteractiveBackground />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
