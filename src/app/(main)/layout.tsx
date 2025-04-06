import MainLayout from "@/components/layout/mainlayout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="main_layout_main">
        <MainLayout>{children}</MainLayout>
      </div>
    </>
  );
};

export default layout;
