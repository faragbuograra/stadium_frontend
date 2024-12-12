import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
export default function AppBar() {

  return (
    <header
      className={` bg-white h-16 w-full  relative duration-300 border-b border-gray-200`}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <MdDashboard className="text-2xl text-blue-500" />
          <span className="text-xl font-bold text-gray-800 ml-2">Dashboard</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-gray-700">Hello, </span>
            <span className="text-gray-800 font-semibold">User</span>
          </div>
          <div className="ml-4">
           <Link to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Logout</button>
            </Link>
          </div>
        </div>
      </div>

  
    </header>
  );
}
