import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#262e41] h-screen sticky p-3">
      <div className="h-full relative flex flex-col gap-4 ml-[10px]">
        <Link to={"/user"}>
          <h1 className="text-white text-[20px] cursor-pointer">User</h1>
        </Link>
        <Link to={"/products"}>
          <h1 className="text-white text-[20px] cursor-pointer">Product</h1>
        </Link>
        <Link to={"/profile"}>
          <h1 className="text-white text-[20px] cursor-pointer">Profile</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
