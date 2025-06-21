// src/App.jsx
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    </ThemeProvider>
  );
}
