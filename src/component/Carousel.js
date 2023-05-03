import cone from "../../assest/cone.png";
import ctwo from "../../assest/ctwo.png";
import cthree from "../../assest/cthree.png";
import logo from "../../assest/white.png";
import "./carousel.css";
import { useState } from "react";

const Carousel = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bgAttachment">
      <nav className="flex bg-transparent text-red-500 px-20 py-5  justify-between psm:p-0 sm:px-5">
        <img src={logo} alt="logo" className="w-20 border sm:w-12" />
        <section className="sm:w-80 sm:border hidden md:block lg:block xl:block 2xl:block">
          <ul className="flex gap-x-8 text-xl sm:flex sm:flex-col sm:absolute sm:top-0 sm:left-0 sm:bg-gray-200 sm:h-full sm:w-full sm:items-center sm:justify-center sm:gap-y-4">
            <li>Home</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </section>
        {show && (
          <section className={`$  sm:w-80 sm:border`}>
            <ul className="flex gap-x-8 text-xl sm:flex sm:flex-col sm:absolute sm:top-0 sm:left-0 sm:bg-gray-200 sm:h-full sm:w-full sm:items-center sm:justify-center sm:gap-y-4">
              <li>Home</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </section>
        )}

        <section className="z-10">
          {show ? (
            <button
              onClick={() => setShow(!show)}
              className="border md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
              close
            </button>
          ) : (
            <button
              onClick={() => setShow(!show)}
              className="border md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
              open
            </button>
          )}
        </section>
      </nav>
      <div className="text-white flex justify-center items-center flex-col gap-y-4 mt-20 psm:mt-0 sm:mt-0">
        <p className="font-semibold psm:text-[.5rem] sm:text-sm sm:mt-8">
          THE IGNITE MARKETING
        </p>
        <h1 className="text-6xl text-center font-semibold leading-tight psm:text-[1.5rem] sm:text-[1.5rem]">
          We are the Brilliant in terms <br /> of Digital Marketing
        </h1>
        <button className="bg-blue-600 text-white py-3 px-8 font-semibold text-2xl psm:text-sm sm:text-lg sm:mt-2 sm:mb-5 sm:bg-red-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Carousel;
