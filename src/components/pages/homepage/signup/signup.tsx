"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/common/input/input";
import Button from "@/components/common/button/button";
import { apiHelper } from "@/services/api.services";
import { useRouter } from "next/navigation";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

const Signup = () => {
  const router = useRouter();
  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name cannot be more than 50 characters")
        .required("First name is required"),
      last_name: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name cannot be more than 50 characters")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .max(100, "Email cannot be more than 100 characters")
        .required("Email is required"),
      phone_number: Yup.string()
        .matches(
          /^[1-9]\d{9}$/,
          "Mobile number must be exactly 10 digits and cannot start with 0"
        )
        .required("Mobile number is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { phone_number } = values;
        const response: any = await apiHelper.post("/create", {
          ...values,
          phone_number: phone_number?.toString(),
        });

        if (response?.status == 200 || response?.status == 201) {
          router.push("/login");
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
      <section className="signup">
        <Container>
          <div className="login_in">
            <h1 className="big_heading ">Signup</h1>

            <form onSubmit={formik.handleSubmit}>
              <div className="field_in">
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email ? formik.errors.email : ""}
                />
              </div>
              <div className="field_in">
                <Input
                  label="First Name"
                  id="first_name"
                  name="first_name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  error={
                    formik.touched.first_name ? formik.errors.first_name : ""
                  }
                />
              </div>
              <div className="field_in">
                <Input
                  label="Last Name"
                  id="last_name"
                  name="last_name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  error={
                    formik.touched.last_name ? formik.errors.last_name : ""
                  }
                />
              </div>
              <div className="field_in">
                <Input
                  label="Mobile number"
                  id="phone_number"
                  name="phone_number"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_number}
                  error={
                    formik.touched.phone_number
                      ? formik.errors.phone_number
                      : ""
                  }
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Signup;
