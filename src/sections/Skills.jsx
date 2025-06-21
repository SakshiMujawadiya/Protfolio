// import SectionTitle from "../components/SectionTitle";
// import { skills } from "../data/skills";

// export default function Skills() {
//   return (
    
    
//     <section id="skills" className="py-20 bg-white text-center px-6 md:px-20">
//   <h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block">
//     Skills
//     <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></span>
//   </h2>

//   <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fadeIn">
//     {skills.map((skill, index) => (
//       <span
//         key={index}
//         className="px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm md:text-base rounded-full shadow-sm hover:shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-default"
//       >
//         {skill}
//       </span>
//     ))}
//   </div>
// </section>


//   );
// }

import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-center px-6 md:px-20">
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
            className="px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm md:text-base rounded-full shadow hover:shadow-md hover:scale-105 transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

