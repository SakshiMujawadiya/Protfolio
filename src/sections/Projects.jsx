import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    

    <section id="projects" className="py-20 bg-gray-100 px-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12 relative">
          Projects
          <span className="block w-12 h-0.5 bg-blue-500 mx-auto mt-2"></span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 object-cover"
              />
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
