import { Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-4xl mt-12 ms-12 flex items-center gap-[160px] font-semibold">
      <NavLink to="/">
        <img
          src="https://avatars.githubusercontent.com/u/27155389?..."
          alt="logo-test"
          style={{ width: "60px", height: "60px" }}
        />
      </NavLink>
      <p className="text-1xl">NIKOS BAKOGIANNIS</p>
      <button className="ml-auto">
        <Moon size={20} />
      </button>
    </div>
  );
};

export default Header;
