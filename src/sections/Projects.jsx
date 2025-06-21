import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 px-6 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" />

        <div className="mt-12 space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg object-cover w-full h-100 md:h-80"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
                  {project.description}
                </p>
                {/* Uncomment if using project links */}
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  View Project
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
