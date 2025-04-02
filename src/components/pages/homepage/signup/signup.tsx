import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import Input from "@/components/common/input/input";
import Button from "@/components/common/button/button";
import Link from "next/link";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const Signup = () => {
  return (
    <>
      <section className="signup">
        <Container>
          <div className="login_in">
            <h1 className="big_heading ">Signup</h1>

            <form action="">
              <div className="field_in">
                <Input label="Email" id="Email" name="Email" type="Email" />
              </div>
              <div className="field_in">
                <Input
                  label="First Name"
                  id="FirstName"
                  name="FirstName"
                  type="text"
                />
              </div>
              <div className="field_in">
                <Input
                  label="Last Name"
                  id=" LastName"
                  name=" LastName"
                  type="text"
                />
              </div>

              <div className="field_in">
                <Input
                  label="Mobile number"
                  id="Mobilenumber"
                  name="Mobilenumber"
                  type="text"
                />
              </div>
              <Button type={"Submit"}>Submit</Button>
             
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Signup;
