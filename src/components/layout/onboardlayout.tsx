import React from "react";
import { Col, Row } from "react-bootstrap";

const Onboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="onboard_layout">
        <Row>
          <Col lg={6}>
            <div className="left_onboard"></div>
          </Col>
          <Col lg={6}>
            <div className="right_onboard">{children}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Onboardlayout;
