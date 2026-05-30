import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <p className="text-lg mb-5 font-semibold tracking-wide text-gray-900">
        Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        {projects.map((pr) => (
          <div
            key={pr.title}
            className="border rounded-lg p-4 shadow-sm bg-white flex flex-col h-[420px]"
          >
            <p className="text-sm font-bold mb-2">{pr.title}</p>

            <a href={pr.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-40 object-cover rounded-md cursor-pointer transition duration-300 hover:opacity-80 hover:scale-105"
                src={pr.image}
                alt="logos"
              />
            </a>

            <p className="text-xs mt-2 text-gray-600 leading-relaxed">
              {pr.description}
            </p>

            <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={pr.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-xs">Code</span>
              </a>

              <div className="flex flex-wrap gap-2 text-xs">
                {pr.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap shrink-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
