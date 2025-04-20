import React from "react";
import soul from "../assets/soul.png";

const Navbar = () => {
  return (
    <nav className="bg-[#3a76ae] text-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img src={soul} alt="Logo" className="h-10 inline-block mr-2" />
      </div>

      {/* Links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
