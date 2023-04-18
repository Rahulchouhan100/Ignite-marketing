import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const Card = ({ price, plan, para }) => {
  return (
    <div className="basis-1/3">
      <div className=" flex flex-col border m-5 p-5  rounded-lg gap-y-4 shadow-sm">
        <h4 className="font-bold text-1xl">{plan}</h4>
        <hr />
        <p className="text-4xl font-extrabold">
          {price} <sup className="text-sm">/month</sup>
        </p>
        <p>{para}</p>
        <div>
          <CheckIcon />
          <span>Digital Marketing</span>
        </div>
        <div>
          <CheckIcon /> <span>Market Research</span>
        </div>
        <div>
          <CheckIcon /> <span>Creative Layout</span>
        </div>
        <div className={`${plan == "Basic" && "text-red-500"}`}>
          <CheckIcon /> <span>Brand Development</span>
        </div>
        <div
          className={`${plan == "Basic" && "text-red-500"} ${
            plan == "Standard" && "text-pink-500"
          }`}
        >
          <CheckIcon /> <span>Email Marketing</span>
        </div>
        <div
          className={`${plan == "Basic" && "text-red-500"} ${
            plan == "Standard" && "text-pink-500"
          }`}
        >
          <CheckIcon /> <span>SEO & Backlinks </span>
        </div>
        <div>
          <button className="py-2 px-5 border rounded-lg  border-blue-600">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};
const Plan = () => {
  return (
    <div className="flex justify-center items-center w-full p-10">
      <Card
        price={"$19.99"}
        plan={"Basic"}
        para={"Limited Social media presence  and market analysis."}
      />
      <Card
        price={"$20.22"}
        plan={"Premium"}
        para={"Enjoy a boost in your business network base with :"}
      />
      <Card
        price={"$20.22"}
        plan={"Standard"}
        para={
          "Promote your brand with a digitalized marketing and social media presence"
        }
      />
    </div>
  );
};

export default Plan;
