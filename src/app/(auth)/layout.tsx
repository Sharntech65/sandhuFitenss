import Link from "next/link";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default layout;
