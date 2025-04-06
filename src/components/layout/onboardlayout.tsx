import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Onboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="onboard_layout">
        <div className="onboard_layout_in">{children}</div>
      </div>
    </>
  );
};

export default Onboardlayout;
