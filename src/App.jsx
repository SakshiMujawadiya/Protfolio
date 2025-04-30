import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    
    <>
        <Navbar />
       
      <Hero />
      <About />
       <Experience />
       <Education />
       <Projects />
      <Skills />
      <Contact />
       
      </>
   
  );
}






