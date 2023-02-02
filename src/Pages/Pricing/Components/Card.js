import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  let data = [
    {
      id: 1,
      heading: "Basic",
      line1: "5 Lakhs",
      line2: "No Unlimited Access!",
      line3: "No Food",
    },
    {
      id: 2,
      heading: "Medium",
      line1: "10 Lakhs",
      line2: "Unlimited Access!",
      line3: "No Food",
    },
    {
      id: 3,
      heading: "Premium",
      line1: "10 Lakhs",
      line2: "Unlimited Access!",
      line3: "Unlimited Food",
    },
  ];
  return (
    <div>
      <h1 className="heading-1">Pricing</h1>
      <div className="cards">
        {data.map((a) => {
          let { heading, line1, line2, line3 } = a;
          return (
            <SingleCard
              heading={heading}
              line1={line1}
              line2={line2}
              line3={line3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
