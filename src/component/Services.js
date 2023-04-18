import React from "react";
import digital from "../../assest/digital.png";
import market from "../../assest/market.png";
import creative from "../../assest/layout.png";
import seo from "../../assest/seo.png";
import email from "../../assest/email.png";
import brand from "../../assest/brand-image.png";
const CardServices = ({ photoIcon, title, desc }) => {
  return (
    <>
      <div className="basis-1/4 border border-gray-200 p-4 rounded-md gap-2 flex flex-col shadow-md">
        <img src={photoIcon} alt="" className="w-20" />
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{desc}</p>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <div className="m-10">
      <h2 className="text-center text-5xl font-bold mb-9 mt-4 underline">
        Our Services
      </h2>
      <div className="flex flex-wrap flex-row gap-10 justify-around">
        <CardServices
          photoIcon={digital}
          title="Digital Marketing"
          desc="We promote brands to connect them with their potential customers using the internet and other forms of digital communication."
        />
        <CardServices
          photoIcon={market}
          title="Market Research"
          desc="We blend consumer behavior and economic trends to confirm and improve your business ideas."
        />
        <CardServices
          photoIcon={creative}
          title="Creative layout"
          desc="We create and design strategic layouts for our clients to have increase in their customer base."
        />
        <CardServices
          photoIcon={seo}
          title="Seo & Backlinks"
          desc="We promote websites of our clients  by linking their sites with ours."
        />
        <CardServices
          photoIcon={email}
          title="Email Marketing"
          desc="We promote the products and services of our clients’ business that can create awareness for our clients."
        />
        <CardServices
          photoIcon={brand}
          title="Brand Development"
          desc="We help develop business ideas for our clients and brands."
        />
      </div>
    </div>
  );
};

export default Services;
