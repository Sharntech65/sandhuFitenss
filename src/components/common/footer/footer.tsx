import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { BallIcon, ContactIcon, FBIcon, InstaIcon, MsgIcon, RightArrow } from "../../../../public/assets/icons";
import logo from "../../../../public/assets/mainlogo.png";

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
                    Push harder, go further. Your fitness journey starts today!
                  </p>
                  <div className="box_input">
                    <input type="text" placeholder="Enter Email" />
                    <button className="input_btn"><RightArrow/></button>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="list_box">
                  <div className="inner_box">
                    <h3>contact us</h3>
                    <ul>
                      <li>
                        <Link href={""}><ContactIcon/>+91 123 456 789</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}><MsgIcon/>info@arshsandhu.com</Link>{" "}
                      </li>
                     
                    </ul>
                  </div>
                  <div className="inner_box">
                    <h3>Our location</h3>
                    <ul>
                      <li>
                        <Link href={""}>Wave Estate Mohali</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Sector 85, Sahibzada Ajit Singh Nagar</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Punjab (140308) In</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bottom_footer">
            <p>Copyright © 2025 All Rights Reserved.</p>
            <div className="icon_box">
              <InstaIcon />
              <BallIcon />
              <FBIcon />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
