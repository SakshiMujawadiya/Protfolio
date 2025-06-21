
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-900 px-6 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Education" />

        <div className="space-y-10 mt-12 relative border-l-2 border-purple-500 dark:border-purple-400">
          {education.map((edu, index) => (
            <div
              key={index}
              className="ml-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-purple-100 dark:border-gray-700 rounded-lg p-6 relative group shadow-md hover:shadow-lg transition"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-6 w-5 h-5 bg-purple-500 border-4 border-white dark:border-gray-900 rounded-full shadow-md"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                    {edu.school}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {edu.description}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
                  {edu.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
