import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
