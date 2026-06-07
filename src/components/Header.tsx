import { HiOutlineDocumentDownload } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl items-center gap-4 border-b border-gray-200 px-4 pb-3 pt-12 font-semibold text-gray-900 sm:px-8">
      <NavLink to="/">
        <img
          src="https://avatars.githubusercontent.com/u/27155389?..."
          alt="logo-test"
          className="w-[50px] h-[50px] rounded-full object-cover ring-2 ring-gray-200 shadow-sm"
        />
      </NavLink>

      <p className="text-normal self-center tracking-wide font-bold leading-none">
        Nikos Bakogiannis
      </p>

      <a
        href="https://kimbogilda.github.io/cv_nikosbako/"
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
