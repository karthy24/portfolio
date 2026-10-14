import { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Tubelight from './components/Tubelight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [tubelightOn, setTubelightOn] = useState(true);
  const [tubelightColor, setTubelightColor] = useState('pink');

  return (
    <div className="relative min-h-screen">
      {/* Interactive & Scroll-Responsive Animated Background */}
      <InteractiveBackground />

      {/* Figma-style Downward Volumetric Tubelight Effect */}
      <Tubelight
        isOn={tubelightOn}
        setIsOn={setTubelightOn}
        colorKey={tubelightColor}
        setColorKey={setTubelightColor}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar
          tubelightOn={tubelightOn}
          setTubelightOn={setTubelightOn}
        />
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
  );
}
