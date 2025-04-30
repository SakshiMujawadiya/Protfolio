import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    // <section id="skills">
    //   <SectionTitle title="Skills" />
    //   <ul className="flex flex-wrap gap-3">
    //     {skills.map((skill, index) => (
    //       <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full">
    //         {skill}
    //       </li>
    //     ))}
    //   </ul>
    // </section>
    <section id="skills" className="py-16 bg-white text-center px-80">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 relative">
        Skills
        <span className="block w-12 h-0.5 bg-blue-500 mx-auto mt-2"></span>
      </h2>
      <div className="flex flex-wrap justify-center  gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 px-4 py-2 rounded-full mb-3 text-ms text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>

  );
}

