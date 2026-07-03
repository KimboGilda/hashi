import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { skillGroups } from "../data/skills";
const Experience = () => {
    return (_jsxs("div", { children: [_jsx("p", { className: "text-lg mb-5 font-semibold tracking-wide text-green-600", children: "Experience" }), _jsxs("p", { className: "text-[15px] text-gray-500 mb-5 leading-7", children: ["Skill level:", _jsx("span", { className: "ml-2 px-2 py-1 bg-gray-900 text-white rounded-full text-xs", children: "Core" }), _jsx("span", { className: "ml-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs", children: "Advanced" }), _jsx("span", { className: "ml-2 px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs", children: "Familiar" })] }), _jsx("div", { className: "flex flex-col gap-6", children: skillGroups.map((group) => (_jsxs("div", { className: "border rounded-lg p-4 shadow-sm bg-white", children: [_jsx("p", { className: "text-[15px] font-bold mb-3 text-gray-900", children: group.category }), _jsx("div", { className: "flex flex-wrap gap-2 text-xs", children: group.skills.map((skill, index) => (_jsx("span", { className: `px-3 py-1 rounded-full whitespace-nowrap transition
                    ${skill.level === "core"
                                    ? "bg-gray-900 text-white"
                                    : skill.level === "advanced"
                                        ? "bg-gray-200 text-gray-800"
                                        : "bg-gray-100 text-gray-500"}`, children: skill.name }, index))) })] }, group.category))) })] }));
};
export default Experience;
