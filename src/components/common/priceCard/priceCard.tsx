import React from "react";

const PriceCard = (
  className: any
  // price: number,
  // title: string,
  // description: string
) => {
  return (
    <div className={`price_card ${className}`}>
      <p>12 WEEK PASS</p>
      <h2>
        12 WEEK PASS <span>12</span>
      </h2>
      <ul>
        <li>Update workout (Calories In/Out)</li>
        <li>Best Diet Plan & Info</li>
        <li>Zoom meeting per week</li>
        <li>Best User Satisfaction</li>
        <li>Free Video Program</li>
      </ul>
    </div>
  );
};

export default PriceCard;
