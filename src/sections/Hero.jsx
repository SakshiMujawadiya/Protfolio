import { motion } from "framer-motion";
import resume from "../assets/Resume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl w-full px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Name + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6">
            Hello, <br />
            I’m <span className="text-indigo-600 dark:text-indigo-400">Sakshi</span> <br />
            Mujawadiya
          </h1>

          <p className="text-indigo-500 dark:text-indigo-300 font-medium text-lg mb-4">
            MERN Stack Developer • UI/UX Enthusiast
          </p>

          <a
            href={resume}
            download
            className="inline-block mt-2 px-7 py-3 bg-indigo-600 text-white font-semibold tracking-wide rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-500 transition"
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right Side - Description */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
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
