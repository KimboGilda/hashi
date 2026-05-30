import { Outlet } from "react-router-dom";

const Mainbar = () => {
  return (
    <div className="flex flex-col h-full">
      <Outlet />
    </div>
  );
};

export default Mainbar;
