import React from "react";
import dashboard from "../assets/dashboard.png";
import password from "../assets/Password.png";  
import pj from "../assets/pj.jfif";
import portfolio from "../assets/protfolio.jfif"; 


export const projects = [
    
  {
    title: "Social Media Dashboard",
    description:
      "Designed and developed a visually engaging and responsive social media dashboard using React and Tailwind CSS. The dashboard displays real-time statistics for platforms like Twitter, Instagram, and Facebook using modular, reusable components. Features include dark/light mode toggle via React Context API, dynamic user engagement cards, and accessible layout that adapts seamlessly across devices.",
    image: dashboard,
    link: "https://your-project-link.com",
  },
  {
    title: "Password Strength Checker",
    description:
      "Created a password validation tool using vanilla JavaScript, HTML, and CSS. This interactive web app provides instant feedback on password strength using regular expressions. Features include real-time character validation (uppercase, lowercase, numbers, symbols, and minimum length), a visual strength meter, and suggestions for creating stronger passwords. A helpful tool for improving user security awareness.",
    image: password,
    link: "https://your-project-link.com",
  },
  {
    title: "Prachin Jadibuti – Ayurvedic E-Commerce UI",
    description:
      "Developed the front-end interface for Prachin Jadibuti, an Ayurvedic herbal products website. Built using React and Tailwind CSS, the project emphasizes clean design, smooth navigation, and responsive layouts. Created product listing sections, detail views, and a structured reusable component system. The interface allows users to explore herbs, read about their benefits, and experience an intuitive and culturally relevant browsing experience.",
    image:  pj,
    link: "https://your-prachin-jadibuti-link.com",
  },
  

  {
    title: "Portfolio Website",
    description:
      "Designed and developed my personal portfolio website using React, Tailwind CSS, and Framer Motion for animations. The site showcases my projects, skills, and experiences in a visually appealing manner. Features include smooth scrolling, responsive design, and interactive elements that enhance user engagement. This project reflects my design sensibility and technical proficiency.",
    image: portfolio,
    link: "https://your-portfolio-link.com",
  },


];