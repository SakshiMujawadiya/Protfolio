// import SectionTitle from "../components/SectionTitle";
// import { education } from "../data/education";

// export default function Education() {
//   return (
//     // <section id="education" className="py-20 bg-white px-50">
//     //   <div className="max-w-5xl mx-auto px-4 md:px-0">
//     //     <SectionTitle title="Education"/>

//     //     <div className="space-y-8">
//     //       {education.map((edu, index) => (
//     //         <div
//     //           key={index}
//     //           className="border border-gray-200 rounded-md p-6 flex flex-col md:flex-row justify-between"
//     //         >
//     //           <div>
//     //             <h3 className="text-lg font-semibold text-gray-800">{edu.school}</h3>
//     //             <p className="text-blue-600 font-medium">{edu.degree}</p>
//     //             <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
//     //           </div>
//     //           <p className="text-sm text-gray-500 mt-4 md:mt-0 md:text-right whitespace-nowrap">
//     //             {edu.date}
//     //           </p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>
    

//   );
// }
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Education" />

        <div className="space-y-10 mt-12 relative border-l-2 border-purple-500">
          {education.map((edu, index) => (
            <div
              key={index}
              className="ml-6 bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-lg p-6 relative group shadow-md hover:shadow-lg transition"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-6 w-5 h-5 bg-purple-500 border-4 border-white rounded-full shadow-md"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition">
                    {edu.school}
                  </h3>
                  <p className="text-purple-600 font-medium">{edu.degree}</p>
                  <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4 md:mt-0">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
