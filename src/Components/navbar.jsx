import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-12 py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tighter uppercase leading-none">
          Dunder
        </h1>
        <h1 className="text-2xl font-bold tracking-tighter uppercase leading-none">
          Mifflin
        </h1>
        <span className="text-[0.5rem] tracking-widest uppercase opacity-70">
          Paper Company
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Branches
        </a>
        <a href="#" className="hover:text-gray-300">
          Our Employees
        </a>
        <a href="#" className="hover:text-gray-300">
          Careers
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <button className="bg-white text-black px-5 py-2 rounded font-medium hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
