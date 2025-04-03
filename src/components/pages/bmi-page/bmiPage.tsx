"use client";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import CommonRadioBtn from "@/components/common/commonRadioBtn/commonRadioBtn";
import Input from "@/components/common/input/input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import leftImg from "../../../../public/assets/bmiImgparson.png";
const BmiPage = () => {
  return (
    <>
      <div className="bmi_page">
        <Container>
          <div className="bmi_page_in">
            <Row>
              <Col lg={6}>
                <div className="bmi_page_left">
                  <Image src={leftImg} alt="" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="bmi_page_right">
                  <h2>
                    Let’s Calculate Your <span>BMI</span>
                  </h2>
                  <p>
                    Gymatan unknown printer took lle type anscraey reteabled
                    maketype area facilities specimen bookayurvived
                  </p>
                  <form>
                    <div className="radio_main_box">
                      <div className="field">
                        <CommonRadioBtn
                          label="Metric Units"
                          name="Metric Units"
                          id="Metric Units"
                        />
                      </div>
                      <div className="field">
                        <CommonRadioBtn
                          label="Metric Units"
                          name="Metric Units"
                          id="Metric Units1"
                        />
                      </div>
                    </div>
                    <div className="hero_input_box">
                      <div className="input_box_in">
                        <Input type="text" placeholder="Weight/Kg" />
                      </div>
                      <div className="input_box_in">
                        <Input type="text" placeholder="Height/Cm" />
                      </div>
                    </div>
                    <div className="bmi_action">
                      <CommonArrowButton>Calculate</CommonArrowButton>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BmiPage;
