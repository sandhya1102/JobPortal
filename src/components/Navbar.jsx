import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar w-full h-18 top-0 px-2 py-3 shadow-lg bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-32 h-12" />

        {/* Tagline */}
        <div className="hidden lg:block text-2xl">
          <h1 className="flex gap-2 text-gray-500">
            Bringing You <p className="text-blue-800">The Perfect Job</p>
          </h1>
        </div>

        {/* Hamburger Button */}
        <div
          className="menu-toggle md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-1 bg-black transition-all ${
              isOpen ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black transition-all ${
              isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links ${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-10 text-md text-black font-semibold items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none px-4 py-4 lg:p-0`}
        >
          <h2 className="px-4 py-2 hover:text-white hover:bg-blue-800">
            Active Employers
          </h2>
          <h2 className="px-4 py-2 hover:text-white hover:bg-blue-800">
            Pricing
          </h2>
          <h2 className="p-2 border-[1px] border-gray-400 rounded hover:text-white hover:bg-blue-800">
            Jobseeker Login
          </h2>
          <h2 className="p-2 bg-yellow-400 rounded hover:text-white hover:bg-blue-800">
            Employer Login
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

