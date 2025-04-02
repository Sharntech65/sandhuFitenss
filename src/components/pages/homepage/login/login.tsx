"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/common/input/input";
import Button from "@/components/common/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiHelper } from "@/services/api.services";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .test(
          "email",
          "Must be a valid email or 10-digit mobile number",
          (value) =>
            Yup.string().email().isValidSync(value) ||
            /^[1-9]\d{9}$/.test(value || "")
        )
        .required("Email or mobile number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response: any = await apiHelper.post("/create", values);

        if (response?.status == 200 || response?.status == 201) {
          router.push("/dashboard");
          resetForm();
        }

        console.log("response", response);
        // resetForm();
      } catch (error) {
        console.log("errdwewor", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="login">
        <Container>
          <div className="login_in">
            <h1 className="big_heading ">Login</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="field_in">
                <Input
                  label="Email or Mobile Number"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter Email or Mobile Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email ? formik.errors.email : ""}
                />
              </div>
              <div className="field_in">
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password ? formik.errors.password : ""}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
            <p className="login_para">
              Don't have an account? <Link href="/signup">Sign up here</Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
