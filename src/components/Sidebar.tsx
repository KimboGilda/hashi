import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-green-600 font-semibold' : 'text-gray-500 hover:text-green-500 transition-colors'

  return (
    <div className="flex flex-col gap-3 max-w-[80px] text-sm">
      <NavLink to="/" end className={linkClass}>About me</NavLink>
      <NavLink to="/Experience" className={linkClass}>Experience</NavLink>
      <NavLink to="/Projects" className={linkClass}>Projects</NavLink>
    </div>
  )
}

export default Sidebar;