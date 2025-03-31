"use client";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import LoginContainer from "./LoginContainer";
import {
  useGoogleAuthLoginMutation,
  useSendOtpEmailMutation,
} from "~/lib/slices/auth/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setKycStatus } from "~/lib/slices/auth/authSlice";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [googleAuthLogin] = useGoogleAuthLoginMutation();
  const [sendOtpEmail] = useSendOtpEmailMutation();
  const router = useRouter();

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(null); // Reset email error state

    if (!email) {
      setEmailError("Email is required.");
      toast.error("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("userRegisterzEmail", email);
    localStorage.setItem("userDirection", !isLogin ? "register" : "login");

    try {
      const res = await sendOtpEmail({ email }).unwrap();
      toast.success(res.message);
      dispatch(setKycStatus(res.isKYC ? "verified" : "pending"));
      router.push("/verify-otp");
    } catch (err: any) {
      const errorMessage =
        err.status === 400
          ? err.data.message
          : "Server Error. Please try again later.";
      toast.error(errorMessage);
    }
  };

  return (
    <LoginContainer>
      <h5 className="text-center text-md text-LuminousDark">
        {isLogin ? "Login" : "Create an Account"}
      </h5>

      <div className="hr_content  d-flex justify-content-center">
        <span className="hr_top_text">OR</span>
      </div>

      <form className="form-style1" onSubmit={handleEmail} noValidate>
        <div className="mb25">
          <input
            type="email"
            className={`form-control`}
            placeholder="Enter Email Address"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(null); // Clear error on input change
            }}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}{" "}
          {/* Show error message */}
        </div>

        <button
          disabled={!email}
          type="submit"
          className="roofi-btn btn-roofi-primary"
          style={{ width: "100%" }}
        >
          Continue
        </button>
      </form>

      <hr />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="loginTextClass">
          {isLogin ? "Don't have an account ? " : "Already have an account. "}
          <span className="signup_button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"} Now
          </span>
        </p>
        <p className="d-flex justify-content-center align-items-center gap-2">
          <Link href="/">
            <span className="back_btn">Back to home</span>
          </Link>
        </p>
      </div>
    </LoginContainer>
  );
}
