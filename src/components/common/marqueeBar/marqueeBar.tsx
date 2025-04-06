import React from "react";
import Marquee from "react-fast-marquee";
import { Starcon } from "../../../../public/assets/icons";

const MarqueeBar = () => {
  const data = [
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
  ];

  return (
    <>
      <div className="marquee_box">
        <Marquee>
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <Starcon />
                {item.line}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeBar;
