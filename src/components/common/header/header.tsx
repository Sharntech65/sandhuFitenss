"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/assets/mainlogo.png";
import { Container } from "react-bootstrap";
import { CloseSidebar, OpenSidebar } from "../../../../public/assets/icons";

const Header = () => {
  const router = useRouter();
  console.log("Router:", router);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <header className="header">
      <div className={`overlay ${show ? "active" : ""}`}></div>
      <Container>
        <div className="header_in">
          <Link href={"/"} className="logo">
            <Image src={logo} alt="" />
          </Link>
          <ul className={show ? "active" : ""}>
            <button className="close_btn" onClick={() => setShow(false)}>
              <CloseSidebar />
            </button>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Contact Us">Contact Us</Link>
            </li>
          </ul>
          <div className="action">
            <Button
              onClick={() => router.push("/login")}
              // className="custom_link"
            >
              Login
            </Button>
            <Button
              className="border_btn"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </Button>
            <button onClick={() => setShow(true)} className="side_bar_toggle">
              <OpenSidebar />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
