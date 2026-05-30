import { skillGroups } from "../data/skills";

const Experience = () => {
  return (
    <div>
      <p className="text-lg mb-5 font-semibold tracking-wide text-green-600">
        Experience
      </p>

      <p className="text-[15px] text-gray-500 mb-5 leading-7">
        Skill level:
        <span className="ml-2 px-2 py-1 bg-gray-900 text-white rounded-full text-xs">
          Core
        </span>
        <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
          Advanced
        </span>
        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
          Familiar
        </span>
      </p>

      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p className="text-[15px] font-bold mb-3 text-gray-900">
              {group.category}
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {group.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition
                    ${
                      skill.level === "core"
                        ? "bg-gray-900 text-white"
                        : skill.level === "advanced"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
