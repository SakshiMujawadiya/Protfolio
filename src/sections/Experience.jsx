// import SectionTitle from "../components/SectionTitle";
// import { experience } from "../data/experience";

// export default function Experience() {
//   return (
//     <section id="experience" className="bg-gray-50 py-20 px-40">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <SectionTitle title="Experience" />

//         <div className="relative ml-6">
//           {experience.map((exp, index) => (
//             <div key={index} className="flex ">
//               {/* Left side: Date */}
//               <div className="w-32 text-right pr-4">
//                 <p className="text-sm text-gray-500 mt-1.5">{exp.date}</p>
//               </div>

//               {/* Center: Line and Dot */}
//               <div className="relative flex flex-col items-center w-6">
//                 {/* Timeline dot */}
//                 <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10 mb-[-1px]">
//                   <svg
//                     className="text-white w-3.5 h-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10 20s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z" />
//                   </svg>
//                 </div>

//                 {/* Vertical line extending downward */}
//                 <div className="flex-1 w-0.5 bg-blue-500" />
//               </div>


//               {/* Right side: Card */}
//               <div className="ml-8 flex-1 mb-12">
//                 <div className="bg-white p-6 rounded-md shadow-md">
//                   <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
//                   <h4 className="text-blue-600 font-medium text-md mb-2">{exp.title}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-indigo-50 py-20 px-6 md:px-20">
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
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full shadow">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{exp.date}</p>
                  </div>
                </div>
              </div>

              {/* Role & Description */}
              <div className="mt-4">
                <h4 className="text-indigo-600 font-semibold text-lg mb-2">{exp.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{exp.description}</p>
              </div>

              {/* Skills/Tech Stack */}
              {exp.skills?.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-medium rounded-full shadow-sm"
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

