// import React from 'react';
// export default function About() {
//   return (
//     <section id="about" className="py-15 px-40 bg-white">
//       <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-12">
//         {/* Left Title */}
//         <div className="md:w-1/3">
//           <h2 className="text-2xl font-semibold text-gray-800 relative inline-block mt-4">
//             About Me
//             <span className="block w-12 h-0.5 bg-blue-500 mt-2"></span>
//           </h2>
//         </div>

//         {/* Right Description */}
//         <div className="md:w-2/3 text-gray-600 text-ms leading-relaxed">
//           <p>
//             I'm Sakshi Mujawadiya, an aspiring software tester and frontend developer. I enjoy creating clean, responsive, and user-friendly interfaces. My passion lies in exploring new technologies, solving real-world problems, and continuously learning.
//           </p>
//           <p className="mt-4">
//             With a foundation in Python, React, and UI/UX principles, I aim to contribute to meaningful projects. When I’m not coding, I love diving into design inspiration, reading about AI advancements, and connecting with like-minded tech enthusiasts.
//           </p>
//         </div>     
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-purple-50 to-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Title */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
            About Me
            <span className="block w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"></span>
          </h2>
        </div>

        {/* Description */}
        <div className="md:w-2/3 text-gray-700 leading-relaxed space-y-5">
          <p>
            I’m <span className="font-semibold text-purple-600">Sakshi Mujawadiya</span>, a detail-oriented MERN stack developer with a passion for UI/UX and growing interest in testing. I believe in building not just apps, but enjoyable user experiences.
          </p>
          <p>
            With solid experience in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>, I’ve built projects ranging from e-commerce to dashboards.
          </p>
          <p>
            My background in <strong>graphic design</strong> and interest in visual storytelling help me design elegant, intuitive UIs.
          </p>
          <p>
            Outside coding, I enjoy sketching, exploring design trends, and expanding my creative thinking.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "Python", "UI/UX", "Software Testing", "MERN Stack", "Figma", "GitHub"].map((skill, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

