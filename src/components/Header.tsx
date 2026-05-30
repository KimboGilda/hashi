import { HiOutlineDocumentDownload } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-6xl mt-12 ms-12 flex items-center gap-[160px] font-semibold text-gray-900">
      <NavLink to="/">
        <img
          src="https://avatars.githubusercontent.com/u/27155389?..."
          alt="logo-test"
          className="w-[60px] h-[60px] rounded-full object-cover ring-2 ring-gray-200 shadow-sm hover:shadow-md transition"
        />
      </NavLink>

      <p className="text-xl tracking-wide font-bold">Nikos Bakogiannis</p>

      <a
        href="https://kimbogilda.github.io/my-cv/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <div className="inline-flex items-center gap-1 border p-0.5 border border-gray-300 rounded-md text-gray-500 hover:text-green-500 hover:border-green-400 transition-colors">
          <HiOutlineDocumentDownload className="w-4 h-4" />
          <span className="text-xs">CV</span>
        </div>
      </a>
    </div>
  );
};

export default Header;
