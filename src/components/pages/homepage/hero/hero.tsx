import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../../../../../public/assets/heroimg.png";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero_in">
            <Row>
              <Col lg={7}>
                <div className="in_left">
                  <h1>
                    Your body can <span>stand almost</span> anything.
                  </h1>
                  <p>
                    Push past your limits, stay committed, and watch as ypur
                    body transfer into powerhouse of strenth and resilience.
                  </p>
                  <div className="count_box">
                    <h2>20+</h2>
                    <p>Years of Experince</p>
                  </div>
                  <CommonArrowButton className="border_arro_btn">
                    Explore More
                  </CommonArrowButton>
                </div>
              </Col>
              <Col lg={5}>
                <div className="in_right">
                  <Image src={heroimg} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
