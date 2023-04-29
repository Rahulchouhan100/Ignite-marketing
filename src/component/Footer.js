import React from "react";
import logo from "../../assest/white.png";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div className="relative  mt-40 bg-gradient-to-r from-purple-500 to-pink-500 sm:mt-30">
      <div className="border absolute -top-16 left-1/3 px-20 py-6 text-center bg-white rounded-lg sm:p-2 sm:left-[10%]">
        <h4 className="text-3xl font-bold sm:text-xl">
          Have a project in Mind ?
        </h4>
        <button className="rounded-md px-4 py-2 border mt-4 font-semibold text-xl bg-blue-600 text-white">
          Book Now
        </button>
      </div>
      <div className="border mt-5 px-24 pt-24 pb-5 sm:p-5">
        <div className="flex justify-between sm:flex-col">
          <div>
            <img src={logo} alt="logo" className="w-40 sm:-ml-10" />
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl text-white">
              Viewer Guides
            </p>
            <ul className="flex flex-col gap-2 cursor-pointer text-white">
              <li>Feature</li>
              <li>Careers</li>
              <li>Blog</li>
              <li className="sm:mb-5">Help & Support</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl text-white">Community</p>
            <ul className="flex flex-col gap-2 cursor-pointer text-white">
              <li>About Us</li>
              <li>Our Clients</li>
              <li className="sm:mb-5">Legal Notice</li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl text-white">
              Sign up for News Letter
            </p>
            <div className="flex border border-black-600 ">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="p-2  border-r-2 border-black-600"
              />
              <button className="p-2 sm:p-0">
                <SendIcon className="-rotate-45 text-white sm:ml-5 sm:-mt-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-20 py-2 sm:px-3 sm:text-xs">
        <p>&copy; 2023 AI Right Reserved</p>
        <p>Developed By Rahul</p>
      </div>
    </div>
  );
};

export default Footer;
