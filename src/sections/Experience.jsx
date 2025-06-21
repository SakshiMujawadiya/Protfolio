import { Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-indigo-50 dark:bg-gray-900 py-20 px-6 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Work Experience" />

        <div className="grid gap-10 mt-14">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-2 rounded-full shadow">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {exp.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role & Description */}
              <div className="mt-4">
                <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-2">
                  {exp.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>

              {/* Skills/Tech Stack */}
              {exp.skills?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-3 py-1 text-sm font-medium rounded-full shadow-sm transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
