import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const Card = ({ price, plan, para }) => {
  return (
    <div className="basis-1/3">
      <div className=" flex flex-col flex-wrap border m-5 p-5  rounded-lg gap-y-4 shadow-sm bg-white">
        <h4 className="font-bold text-1xl">{plan}</h4>
        <hr />
        <p className="text-4xl font-extrabold">
          {price} <sup className="text-sm text-blue-500">/month</sup>
        </p>
        <p>{para}</p>
        <div>
          <CheckIcon />
          <span className="font-semibold">Digital Marketing</span>
        </div>
        <div>
          <CheckIcon /> <span className="font-semibold">Market Research</span>
        </div>
        <div>
          <CheckIcon /> <span className="font-semibold">Creative Layout</span>
        </div>
        <div className={`${plan == "Basic" && "text-gray-300"}`}>
          <CheckIcon /> <span className="font-semibold">Brand Development</span>
        </div>
        <div
          className={`${plan == "Basic" && "text-gray-300"} ${
            plan == "Standard" && "text-gray-300"
          }`}
        >
          <CheckIcon /> <span className="font-semibold">Email Marketing</span>
        </div>
        <div
          className={`${plan == "Basic" && "text-gray-300"} ${
            plan == "Standard" && "text-gray-300"
          }`}
        >
          <CheckIcon /> <span className="font-semibold"> SEO & Backlinks </span>
        </div>
        <div>
          <button className="py-2 px-5 border rounded-lg  border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};
const Plan = () => {
  return (
    <div className="border mt-36 mb-24 pt-5 bg-gradient-to-r from-sky-400 to-indigo-400 sm:mt-5 ">
      <h2 className="text-center font-bold text-4xl text-white sm:text-3xl">
        Right plan for You
      </h2>
      <div className="flex justify-center items-center w-full p-10 sm:flex-col sm:p-2">
        <Card
          price={"$19.99"}
          plan={"Basic"}
          para={"Limited Social media presence  and market analysis."}
        />
        <Card
          price={"$51.74"}
          plan={"Premium"}
          para={"Enjoy a boost in your business network base with :"}
        />
        <Card
          price={"$39.45"}
          plan={"Standard"}
          para={
            "Promote your brand with a digitalized marketing and social media presence"
          }
        />
      </div>
    </div>
  );
};

export default Plan;
