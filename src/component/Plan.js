import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const Card = ({ price, plan, para }) => {
  return (
    <>
      <div className="bg-blue-500">
        <h4>{plan}</h4>
        <p>
          {price} <span>/month</span>
        </p>
        <p>{para}</p>
        <div>
          <CheckIcon /> <span>Digital Marketing</span>
        </div>
        <div>
          <CheckIcon /> <span>Market Research</span>
        </div>
        <div>
          <CheckIcon /> <span>Creative Layout</span>
        </div>
        <div>
          <CheckIcon /> <span>Brand Development</span>
        </div>
        <div>
          <CheckIcon /> <span>Email Marketing</span>
        </div>
        <div>
          <CheckIcon /> <span>SEO & Backlinks </span>
        </div>
      </div>
    </>
  );
};
const Plan = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Card
        price={"$19.99"}
        plan={"Basic"}
        para={"Limited Social media presence and market analysis."}
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
