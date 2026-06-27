import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CurrentFocus from "./components/CurrentFocus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen">
      <AuroraBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar dark={dark} toggleDark={() => setDark((d) => !d)} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
