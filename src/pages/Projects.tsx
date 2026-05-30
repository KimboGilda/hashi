import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <p className="text-lg mb-5">Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        {projects.map((pr) => (
          <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col h-[420px]">
            <p className="text-sm font-bold mb-2">{pr.title}</p>

            <a href={pr.link} target="_blank">
              <img
                className="w-full h-40 object-cover rounded-md cursor-pointer transition duration-300 hover:opacity-80 hover:scale-105"
                src={pr.image}
                alt="logos"
              />
            </a>

            <p className="desc text-xs mt-1 mb-1">{pr.description}</p>

            <a href={pr.repo} target="_blank">
              <FaGithub className="w-4 h-4" />
            </a>

            <div className="flex flex-nowrap gap-2 mt-auto overflow-x-auto text-xs">
              {pr.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 rounded-full whitespace-nowrap shrink-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
