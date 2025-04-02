import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../../public/assets/mainlogo.png";
import Link from "next/link";
import CommonRadioBtn from "../commonRadioBtn/commonRadioBtn";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <div className="footer_in">
            <Row>
              <Col lg={5}>
                <div className="logo_box">
                  <Link href={"/"}>
                    <Image src={logo} alt="" />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quidem, unde?
                  </p>
                  <div className="box_input">
                    <input type="text" placeholder="Enter Email" />
                    <button className="input_btn">rivght</button>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="list_box">
                  <div className="inner_box">
                    <h3>oasojsop</h3>
                    <ul>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="inner_box">
                    <h3>oasojsop</h3>
                    <ul>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Home</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bottom_footer">
            <CommonRadioBtn label="hashah" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
