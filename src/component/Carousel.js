import cone from "../../assest/cone.png";
import ctwo from "../../assest/ctwo.png";
import cthree from "../../assest/cthree.png";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="bgAttachment">
      <nav className="flex bg-pink-600 text-white px-12 py-5 justify-between items-center">
        <section>Logo</section>
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
      <div className="text-white flex justify-center items-center flex-col gap-y-4 mt-20">
        <p className="font-semibold">THE IGNITE MARKETING</p>
        <h1 className="text-6xl text-center font-semibold leading-tight">
          We are the Brilliant in terms <br /> of Digital Marketing
        </h1>
        <button className="bg-blue-600 text-white py-3 px-8 font-semibold text-2xl">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Carousel;
