import React from 'react';
export default function About() {
  return (
    <section id="about" className="py-15 px-40 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-12">
        {/* Left Title */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-800 relative inline-block mt-4">
            About Me
            <span className="block w-12 h-0.5 bg-blue-500 mt-2"></span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="md:w-2/3 text-gray-600 text-ms leading-relaxed">
          <p>
            I'm Sakshi Mujawadiya, an aspiring software tester and frontend developer. I enjoy creating clean, responsive, and user-friendly interfaces. My passion lies in exploring new technologies, solving real-world problems, and continuously learning.
          </p>
          <p className="mt-4">
            With a foundation in Python, React, and UI/UX principles, I aim to contribute to meaningful projects. When I’m not coding, I love diving into design inspiration, reading about AI advancements, and connecting with like-minded tech enthusiasts.
          </p>
        </div>     
      </div>
    </section>
  );
}
