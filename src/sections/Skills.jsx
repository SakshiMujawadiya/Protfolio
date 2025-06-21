import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 text-center px-6 md:px-20 transition-colors duration-500"
    >
      <SectionTitle title="Skills" />

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-800 dark:to-pink-800 dark:text-purple-200 text-sm md:text-base rounded-full shadow hover:shadow-md hover:scale-105 transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
