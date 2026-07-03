import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MapComponent from "./components/MapComponent";
import { FaGithub, FaEnvelope } from "react-icons/fa";
function App() {
    return (_jsxs("div", { className: "min-h-screen overflow-x-hidden flex flex-col", children: [_jsx(MapComponent, {}), _jsx(Header, {}), _jsxs("main", { className: "flex flex-1 min-h-0 w-full max-w-6xl flex-col gap-10 px-4 pt-24 pb-8 sm:px-8 lg:flex-row lg:items-start lg:gap-[150px] lg:mx-auto", children: [_jsx(Sidebar, {}), _jsx(Routes, { children: _jsxs(Route, { element: _jsx(Mainbar, {}), children: [_jsx(Route, { index: true, element: _jsx(About, {}) }), _jsx(Route, { path: "experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "projects", element: _jsx(Projects, {}) })] }) })] }), _jsxs("div", { className: "mx-auto flex w-full max-w-6xl gap-4 px-4 pb-2 text-xs font-light sm:px-8", children: [_jsx("p", { children: "\u00A9 2026 Nikos Bakogiannis. All rights reserved." }), _jsx("span", { className: "text-gray-400", children: "|" }), _jsx("a", { href: "https://github.com/KimboGilda", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaGithub, { className: "w-4 h-4" }) }), _jsx("a", { href: "mailto:n.bakogiannis@outlook.com", children: _jsx(FaEnvelope, { className: "w-4 h-4" }) })] })] }));
}
export default App;
