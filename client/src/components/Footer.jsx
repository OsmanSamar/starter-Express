import React from "react";

const Footer = () => {
  return (
    <footer className="text-black  py-20 bg_gradient  ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center ">
            Book<span className=" text-xl">Store</span>
          </p>
        </div>

        <div className="">
          <p>QUICK LINKS</p>

          <div className="flex flex-col text-start mb-4 md:mb-0">
            <a
              href="/"
              alt="Home Page"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Home
            </a>

            <a
              href="/about"
              alt="About Page"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              About
            </a>
            <a
              href="/services"
              alt="Service Page"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Product
            </a>
            <a
              href="/contact"
              alt="Contact Page"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
            <a
              href="/terms"
              alt="Terms and Conditions"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Terms and Conditions
            </a>
            <a
              href="/license"
              alt="License Agreement"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              License Agreement
            </a>
            <a
              href="/privacy"
              alt="Privacy Policy"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Privacy Policy
            </a>
            <a
              href="/copyright"
              alt="Copyright Information"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Copyright Information
            </a>
            <a
              href="/policy"
              alt="Cookies Policy"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        {/* <SocialMedia /> */}
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="  leading-10">S.Osman &copy; 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
