import React from "react";
import AboutImg from "../../assest/about.png";

const About = () => {
  return (
    <div className="flex justify-evenly  sm:flex-col px-8">
      <section className="basis-2/5">
        <img src={AboutImg} alt="" />
      </section>
      <section className="basis-2/5">
        <h2 className="text-7xl font-bold mb-5 sm:text-3xl sm:text-center sm:my-5">
          About Us
        </h2>
        <p className="font-semibold mb-3">
          We are a digital marketing Agency based in islamabad,Pakistan. We work
          with specialized product brands and proffesional services firms who
          are looking to grow and need to attract new prospects, engage with
          customer and generate leads to fuel the growth.
        </p>
        <p className="font-semibold mb-4">
          Powered by a multi-disciplinary term with several years of work
          experinces , The IGNITE Marketing leverages on their unique skills
          sets and broad experiences garnerd froms stints in advertising,
          Software development, Public relation, media as well as marketing and
          corporate communications to meet the needs of discerning clients.
        </p>

        <p className="font-bold mb-3">
          Need help with creating awareness for your brand, connecting with your
          target audience or generating leads.
        </p>

        <button className="bg-blue-600 text-white py-3 px-8 font-semibold text-2xl rounded-sm">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default About;
