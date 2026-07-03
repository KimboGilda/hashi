import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const linkClass = ({ isActive }) => isActive
        ? "text-green-600 font-semibold"
        : "text-gray-500 hover:text-green-500 transition-colors";
    return (_jsxs("div", { className: "flex flex-col gap-3 max-w-[80px] text-sm", children: [_jsx(NavLink, { to: "/", end: true, className: linkClass, children: ({ isActive }) => (_jsxs("span", { className: "relative", children: [isActive && (_jsx("span", { className: "absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" })), "About me"] })) }), _jsx(NavLink, { to: "/Experience", className: linkClass, children: ({ isActive }) => (_jsxs("span", { className: "relative", children: [isActive && (_jsx("span", { className: "absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" })), "Experience"] })) }), _jsx(NavLink, { to: "/Projects", className: linkClass, children: ({ isActive }) => (_jsxs("span", { className: "relative", children: [isActive && (_jsx("span", { className: "absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" })), "Projects"] })) })] }));
};
export default Sidebar;
