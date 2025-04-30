
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md px-4 md:px-10 py-5 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold tracking-wider">Sakshi</a>
      
      <div className="hidden md:flex space-x-8 text-base font-semibold">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#education" className="hover:text-blue-600">Education</a>
        <a href="#experience" className="hover:text-blue-600">Experience</a>
      </div>
      
      <button
        onClick={() => setDarkMode(prev => !prev)}
        aria-label="Toggle Dark Mode"
        className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-black"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </nav>
  );
}
