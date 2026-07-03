import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
const Mainbar = () => {
    return (_jsx("div", { className: "flex flex-col h-full", children: _jsx(Outlet, {}) }));
};
export default Mainbar;
