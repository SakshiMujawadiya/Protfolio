import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme(); // use context directly
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const toggleTheme = () => setDarkMode((prev) => !prev); // toggle function

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md px-4 md:px-10 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
          Sakshi Mujawadiya
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-base font-semibold">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-black transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-base font-medium">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
