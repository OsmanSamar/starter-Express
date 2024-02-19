import React from "react";
// import bookbg from "../../src/assets/bookbg.jpg";
import SearchBar from "./SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <div
      className="container flex flex-col-reverse 
  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  md:flex-row "
      //   style={{
      //     backgroundImage: `url(${bookbg})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "600px",
      //     backgroundPosition: "-25% -100%",
      //   }}
    >
      {/* Right Side */}
      {/* <div className="md:w-1/2 ">
        <img
          src={bookbg}
          alt=""
          className="w-full h-full object-cover"
          bg-left-top
        />
      </div> */}

      <div className="md:w-1/2 hidden sm:block   ">
        <h1
          className="max-w-md mb-40 text-4xl font-bold text-center 
           md:text-5xl md:text-left"
        ></h1>
      </div>

      {/* Right Side */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1
          className="max-w-md text-4xl font-bold text-center 
           md:text-5xl md:text-left"
        >
          Read Novels Journals, and Non-fictions you like
        </h1>
        <p className="max-w-sm text-center text-black md:text-gray-500 md:text-left">
          You can find and request any book you want.
        </p>

        {/* <div className=" justify-end hidden sm:flex">
          <a
            href="#"
            className="p-3 px-6 pt-2  text-white bg-orange-500 
            rounded-full self-baseline hover:bg-red-400 "
          >
            Get Started
          </a>
        </div> */}

        <form className="w-full lg:w-2/4">
          <SearchBar
            placeholder="Search book or author"
            // handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-black" />}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
