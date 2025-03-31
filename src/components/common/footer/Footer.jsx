import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-landingpage">
      <div className="container">
        <div className="d-flex footer-container">
          <div className="footer-left">
            <div className="footer-subtext">
              technology-driven, transparency-focused digital fractional
              investment platform for curated real estate linked investment
              opportunities in entire risk-reward spectrum that best cater to an
              investor’s wealth creation.
            </div>
            <div className="mt40">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "32px",
                  height: "32px",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                }}
              >
                <Image
                  width={32}
                  height={32}
                  alt="roofi"
                  src="/images/landingPage/headquarters.svg"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </span>
              <div className="mt-12">
                <div className="footer-left-bottom-title">
                  Roof Investments LLC 1106 231st Pl NE Sammamish WA 98074
                </div>
                <div className="mt-12">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ backgroundColor: "#ebebf0", marginBlock: "2.2rem" }} />
        <hr />
        <div className="d-flex justify-content-between footer-bottom">
          <div className="d-flex gap-4 align-items-center ">
            <div className="footer-bottom-text">Terms & Conditions</div>
            <div className="footer-bottom-text">Privacy Policies</div>
            <div className="footer-bottom-text">Investor Corner</div>
            <div className="footer-bottom-text">Contact Us</div>
          </div>
          <div className="footer-bottom-text-left">Copyright &copy;</div>
        </div>
      </div>
    </div>
  );
}
