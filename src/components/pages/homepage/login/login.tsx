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

const Login = () => {
  // const formik = useFormik<FormValues>({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log(values); // Handle form submission here
  //   },
  // });

  return (
    <>
      <section className="login">
        <Container>
          <div className="login_in">
            <h1 className="big_heading ">Login</h1>
            {/* <form onSubmit={formik.handleSubmit}>
              <Input
                label="First Name"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <Input
                label="Last Name"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <Input
                label="Email Address"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Button type="submit">Submit</Button>
            </form> */}
            <form action="">
              <div className="field_in">
                <Input
                  label="Email"
                  id="Email"
                  name="Email"
                  type="Email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="field_in">
                <Input
                  label="Mobile number"
                  id="Mobilenumber"
                  name="Mobilenumber"
                  type="text"
                  placeholder="Enter Mobile number"
                />
              </div>
              <Button type={"Submit"}>Submit</Button>
            </form>
            <p className="login_para">
              Already have an account?<Link href="/signup">Create here</Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
