import { NavLink } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Sidebar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-500 hover:text-green-500 transition-colors";

  return (
    <div className="flex flex-col gap-3 max-w-[80px] text-sm">
      <NavLink to="/" end className={linkClass}>
        About me
      </NavLink>
      <NavLink to="/Experience" className={linkClass}>
        Experience
      </NavLink>
      <NavLink to="/Projects" className={linkClass}>
        Projects
      </NavLink>

      <a
        href="https://kimbogilda.github.io/my-cv/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <div className="inline-flex items-center gap-1 border p-0.5 border border-gray-300 rounded-md text-gray-500 hover:text-green-500 hover:border-green-400 transition-colors">
          <HiOutlineDocumentDownload className="w-4 h-4" />
          <span className="text-xs">CV</span>
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
