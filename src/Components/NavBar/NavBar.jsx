import React, { useState } from "react"; // Import React
import { MdDashboard } from "react-icons/md";
import { FaComputer, FaUsers } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoIosMan } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { MdConnectingAirports } from "react-icons/md";
import { PiMathOperationsBold } from "react-icons/pi";
import { IoFootballSharp } from "react-icons/io5";
import { MdStadium } from "react-icons/md";
export default function NavBar() {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // Access the current URL path

  // List of items
  const menuItems = [
   
    { name: "Users", link: "/users", icon: <FaUsers size={30} /> },
    { name: "Players", link: "/Players", icon: <IoIosMan size={30} /> },
    { name: "MStadium", link: "/MStadium", icon: <MdCategory size={30} /> },
    { name: "Stadium", link: "/stadium", icon: <MdStadium   size={30} /> },
    { name: "Match", link: "/Match", icon: <IoFootballSharp  size={30} /> },
    { name: "RequstPlayer", link: "/RequstPlayer", icon: <FaRegAddressBook size={30} /> },

  ];

  return (
    <nav
      className={` ${open ? "w-72" : "w-20"} bg-white h-screen pt-8 relative duration-300`}
    >
      <div className="flex justify-between items-center p-5">
        <div className={`${!open ? "hidden " : " "} flex text-2xl font-bold text-center`}>
          <img
            src="./images/archive.png"
            alt="archive"
            className={` "w-full h-12 " ${!open ? "hidden " : " "}`}
          />
          <h1
            className={` ${!open ? "hidden " : " "} text-2xl flex font-bold text-center justify-center my-auto mx-1 text-[#3100FF]`}
          >
           Stadium
          </h1>
        </div>
        <button onClick={() => setOpen(!open)} className="text-4xl mb-2">
          {open ? "☰" : "☰"}
        </button>
      </div>
      <hr className="mt-5" />
      <ul className="p-5">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.link;

          // Clone the icon with the conditional color
          const iconWithColor = React.cloneElement(item.icon, {
            color: isActive ? "#3100FF" : "#000", // Apply color conditionally
          });

          return (
            <li key={index} className="my-5">
              <Link to={item.link} className="font-bold flex items-center">
                {iconWithColor}
                <h2
                  className={` ${
                    !open ? "hidden" : ""
                  } text-2xl flex font-bold text-center justify-center my-auto mx-2 ${
                    isActive ? "text-[#3100FF]" : "text-[#000]"
                  }`}
                >
                  {item.name}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
