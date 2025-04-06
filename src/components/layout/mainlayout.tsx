import React from "react";
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="main_layout">{children}</div> <Footer />
    </>
  );
};

export default MainLayout;
