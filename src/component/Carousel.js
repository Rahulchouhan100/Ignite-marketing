import cone from "../../assest/cone.png";
import ctwo from "../../assest/ctwo.png";
import cthree from "../../assest/cthree.png";
import logo from "../../assest/white.png";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="bgAttachment">
      <nav className="flex bg-transparent text-white px-20 py-5 justify-between items-center psm:p-0 ">
        <img src={logo} alt="logo" className="w-20" />
        <section>
          <ul className="flex gap-x-8 text-xl">
            <li>Home</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </section>
      </nav>
      <div className="text-white flex justify-center items-center flex-col gap-y-4 mt-20 psm:mt-0 sm:mt-0">
        <p className="font-semibold psm:text-[.5rem] sm:text-sm">
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
