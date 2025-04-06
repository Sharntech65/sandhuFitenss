import Onboardlayout from "@/components/layout/onboardlayout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Onboardlayout>{children}</Onboardlayout>
    </>
  );
};

export default layout;
