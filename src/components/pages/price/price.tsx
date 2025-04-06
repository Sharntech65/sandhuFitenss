import React from "react";
import { Container } from "react-bootstrap";
import { DumbleIcon } from "../../../../public/assets/icons";
import PriceCard from "@/components/common/priceCard/priceCard";

const Price = () => {
  return (
    <div className="price_page">
      <Container>
        <div className="price_page_in">
          <div className="head_price">
            <p>
              {" "}
              <DumbleIcon /> pricing plan
            </p>
            <h1 className="main_heading">
              Transform Your Body with Our
              <span>Dynamic Fitness</span> Classes
            </h1>
          </div>
          <div className="card_box">
              <PriceCard className="active" />
              <PriceCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Price;
