"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAppSelector } from "~/lib/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function Header({ children }: { children?: React.ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { token } = useAppSelector((state) => state.auth);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-white sticky-top`}>
        <div className="container">
          <div className="d-flex gap-3 align-items-center">
            <label
              htmlFor="menu-btn"
              className="menu-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span></span>
              <span></span>
              <span></span>
            </label>

            <Link className="navbar-brand d-block d-lg-none" href="/">
              <Image
                src="/images/landingPage/roofi-logo.png"
                alt="Logo"
                width="90"
                height="31"
                className="align-text-top object-contain"
              />
            </Link>
          </div>

          <Link className="navbar-brand d-none d-lg-block" href="/">
            <Image
              src="/images/landingPage/roofi-logo.png"
              alt="Logo"
              width="90"
              height="31"
              className="d-inline-block align-text-top object-contain"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/" ? "nav-link-active" : ""
                  } `}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/property-for-buy" ? "nav-link-active" : ""
                  } `}
                  href="/property-for-buy"
                >
                  Buy
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-end gap-4">
            <>
              <Link href={"#"}>
                <button className={` ${"roofi-btn btn-roofi-primary"} `}>
                  Login/Register
                </button>
              </Link>
            </>
          </div>
        </div>
      </nav>

      {children ? children : null}
    </>
  );
}
