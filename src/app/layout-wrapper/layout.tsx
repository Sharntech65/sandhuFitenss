"use client";

import { usePathname } from "next/navigation";
import AppLayout from "./AppLayout";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return <>{<AppLayout>{children}</AppLayout>}</>;
}
