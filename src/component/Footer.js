import React from "react";
import logo from "../../assest/white-min.png";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div className="relative mt-40">
      <div className="border absolute -top-16 left-1/3 px-20 py-6 text-center bg-white rounded-lg">
        <h4 className="text-3xl font-bold">Have a project in Mind ?</h4>
        <button className="rounded-md px-4 py-2 border mt-4 font-semibold text-xl bg-blue-600 text-white">
          Book Now
        </button>
      </div>
      <div className="border mt-5 px-24 pt-24 pb-5">
        <div className="flex justify-between">
          <div className="border">
            <img src={logo} alt="logo" className="w-40" />
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl">Viewer Guides</p>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li>Feature</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl">Community</p>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li>About Us</li>
              <li>Our Clients</li>
              <li>Legal Notice</li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xl">
              Sign up for News Letter
            </p>
            <div className="flex border border-blue-600 ">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="p-2  border-r-2 border-blue-600"
              />
              <button className=" p-2">
                <SendIcon className="-rotate-45 text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-20 py-2">
        <p>&copy; 2023 AI Right Reserved</p>
        <p>Developed By Rahul</p>
      </div>
    </div>
  );
};

export default Footer;
