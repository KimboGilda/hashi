import { Moon } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-4xl mt-12 ms-12 flex items-center gap-[160px] font-semibold">
      <img src="https://avatars.githubusercontent.com/u/27155389?s=400&u=7315e28d95777a4a8635593e4875d5cb98b95bf4&v=4" alt="logo-test" style={{ width: "60px", height: "60px" }} />
      <p className="text-1xl">NIKOS BAKOGIANNIS</p>
      <button className="ml-auto" >
        <Moon size={20} />
      </button>
    </div>
  )
}

export default Header;


