import { Moon } from "lucide-react";
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

      <button className="ml-auto p-2 rounded-full hover:bg-gray-100 transition text-gray-700 hover:text-gray-900">
        <Moon size={20} />
      </button>
    </div>
  );
};

export default Header;
