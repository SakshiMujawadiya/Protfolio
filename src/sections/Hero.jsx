// import backgroundImage from "../assets/Hero.jpg"; 

// export default function Hero() {
//   return (
    
// <section
//   id="hero"
//   className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
// >
//   {/* Background Image Layer with Opacity */}
//   <div
//     className="absolute inset-0"
//     style={{
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       opacity: 0.4, 
//       zIndex: 0,
//     }}
//   ></div>
//   {/* Gradient Overlay */}
//   <div
//   className="absolute inset-0"
//   style={{
//     background: "linear-gradient(to bottom, rgba(72, 145, 195, 0.85), rgba(72, 145, 195, 0.85))",
//   }}
// ></div>



//   {/* Content */}
//   <div className="relative z-10 px-4">
//     <h1 className="text-4xl md:text-4xl font-bold uppercase leading-tight">
//       Sakshi  Mujawadiya
//     </h1>
//     <p className="text-xl md:text-2xl text-gray-200 mt-4">
//       Software Engineer
//     </p>
//     <a
//       href="/resume.pdf"
//       download
//       className="mt-8 inline-block border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300"
//     >
//       Download Resume
//     </a>
//   </div>

//   {/* Scroll Icon */}
//   <div className="absolute bottom-8 z-10 animate-bounce">
//     <a href="#about">
//       <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//         <span className="text-white text-xl">&#8595;</span>
//       </div>
//     </a>
//   </div>
// </section>

//   );
// }


import { motion } from "framer-motion";
import resume from "../assets/Resume.pdf"; 

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-6xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Name + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Hello, <br />
            I’m <span className="text-indigo-600">Sakshi</span> <br />
            Mujawadiya
          </h1>

          <p className="text-indigo-500 font-medium text-lg mb-4">
            MERN Stack Developer • UI/UX Enthusiast
          </p>

          <a
            href={resume}
            download
            className="inline-block mt-2 px-7 py-3 bg-indigo-600 text-white font-semibold tracking-wide rounded-lg shadow hover:bg-indigo-700 transition"
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right Side - Description */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed"
        >
          <p>
            I’m a passionate frontend and MERN stack developer from India who loves
            crafting sleek, intuitive UIs and responsive web experiences.
            I recently completed a MERN internship, where I built real-world applications
            and honed my skills in solving complex problems with elegant code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
