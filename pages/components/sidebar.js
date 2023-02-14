import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
const Sidebar = () => {
  const { routes } =
    useContext(AppContext);
  return (
    <div className="md:w-3/12 w-6/12 h-screen shadow-2xl bgOverlay">
      <div className=" border-b flex justify-around header p-0">
        <div className="logoBox">
        <img src="/logo.webp" />
        </div>
        {/* <p className="text-lg text-white mb-0 font-semibold">Student Management System</p> */}
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          {routes
            ? routes?.map((routes, index) => {
                return (
                  <Link key={index} className=" " href={routes?.url}>
                    <div className="justify-content-center sidebarItems flex p-3 text-white text-md space-x-4 0 hover:bg-gray-50 cursor-pointer">
                      {routes?.name}
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
