import React from "react";
import Hero from "./hero/hero";
import Login from "./login/login";
import Signup from "./signup/signup";
import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import BmiPage from "../bmi-page/bmiPage";
const Homepage = () => {
  return (
    <div className="homepage_design">
      <Hero />
      <MarqueeBar />
      <BmiPage />
    </div>
  );
};

export default Homepage;
