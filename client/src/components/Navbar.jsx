import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import { ReactComponents as Logo } from "../assets/books.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* <div className="pt-2 flex items-center"> */}
        <div className="pt-2">
          {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
          {/* <Logo alt="Logo Icon" /> */}
          {/* <img src={logo} alt="" /> */}
          {/* <img src={books} alt="logo" /> */}
          <h1 className="text-3xl font-bold ">BookStore</h1>
        </div>

        <div className="hidden space-x-6  md:flex">
          <a href="/" className="hover:text-gray-500">
            Home
          </a>
          <a href="product" className="hover:text-gray-500">
            Product
          </a>

          <a href="aboutus" className="hover:text-gray-500">
            About Us
          </a>
        </div>

        {/* Button */}
        <a
          href="#Get Started"
          className="hidden  p-3 px-6 pt-2 text-white bg-orange-500 
            rounded self-baseline hover:bg-red-400 md:block"
        >
          Log in
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className=""
            aria-controls=",online-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={` ${isOpen ? "hidden" : "block"}  text-gray-700  `}
            />

            <AiOutlineClose
              size={26}
              className={` ${isOpen ? "block" : "hidden"} h-6 w-6  `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={` ${isOpen ? "block pt-4" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className=" absolute flex flex-col items-center 
           self-end py-8 mt-10 space-y-6
         font-bold bg-[#d4d4d8] sm:w-auto 
         sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#home" onClick={toggleMenu} className="cursor-pointer">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="cursor-pointer">
            Product
          </a>
          <a href="#projects" onClick={toggleMenu} className="cursor-pointer">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
