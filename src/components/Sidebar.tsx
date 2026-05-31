import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-500 hover:text-green-500 transition-colors";

  return (
    <div className="flex flex-col gap-3 max-w-[80px] text-sm">
      <NavLink to="/" end className={linkClass}>
        {({ isActive }) => (
          <span className="relative">
            {isActive && (
              <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" />
            )}
            About me
          </span>
        )}
      </NavLink>
      <NavLink to="/Experience" className={linkClass}>
        {({ isActive }) => (
          <span className="relative">
            {isActive && (
              <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" />
            )}
            Experience
          </span>
        )}
      </NavLink>
      <NavLink to="/Projects" className={linkClass}>
        {({ isActive }) => (
          <span className="relative">
            {isActive && (
              <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-600" />
            )}
            Projects
          </span>
        )}
      </NavLink>
    </div>
  );
};

export default Sidebar;
