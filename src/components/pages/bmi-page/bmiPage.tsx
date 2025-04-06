"use client";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import CommonRadioBtn from "@/components/common/commonRadioBtn/commonRadioBtn";
import Input from "@/components/common/input/input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import leftImg from "../../../../public/assets/bmiImgparson.png";
import { useState } from "react";
const BmiPage = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [unit, setUnit] = useState<string>("metric");

  const calculateBMI = (e: any) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum > 0 && heightNum > 0) {
      let bmiValue: number;
      if (unit === "metric") {
        const heightInMeters = heightNum / 100;
        bmiValue = weightNum / (heightInMeters * heightInMeters);
      } else {
        bmiValue = (weightNum / (heightNum * heightNum)) * 703;
      }
      setBmi(bmiValue);
    } else {
      setBmi(null);
    }
  };
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
                  <form onSubmit={calculateBMI}>
                    <div className="radio_main_box">
                      <div className="field">
                        <CommonRadioBtn
                          type="radio"
                          label="Metric Units"
                          value="metric"
                          name="Metric Units"
                          id="Metric Units"
                          checked={unit === "metric"}
                          onChange={() => setUnit("metric")}
                        />{" "}
                        <label htmlFor="metric">Metric Units</label>
                      </div>
                      <div className="field">
                        <CommonRadioBtn
                          type="radio"
                          value="imperial"
                          checked={unit === "imperial"}
                          onChange={() => setUnit("imperial")}
                          label="Metric Units"
                          name="Metric Units"
                          id="Metric Units1"
                        />
                        <label htmlFor="imperial">Imperial Units</label>{" "}
                      </div>
                    </div>
                    <div className="hero_input_box">
                      <div className="input_box_in">
                        <Input
                          type="number"
                          placeholder={
                            unit === "metric" ? "Weight (kg)" : "Weight (lbs)"
                          }
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          maxLength={7}
                        />
                      </div>
                      <div className="input_box_in">
                        <Input
                          type="number"
                          placeholder={
                            unit === "metric"
                              ? "Height (cm)"
                              : "Height (inches)"
                          }
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          maxLength={7}
                        />
                      </div>
                    </div>
                    <div className="bmi_action">
                      <CommonArrowButton type="submit">
                        Calculate
                      </CommonArrowButton>
                    </div>
                  </form>{" "}
                  {bmi !== null && (
                    <p className="bmi_result">Your BMI is: {bmi.toFixed(2)}</p>
                  )}{" "}
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
