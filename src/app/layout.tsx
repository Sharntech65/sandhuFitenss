import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Wrapper from "./layout-wrapper/layout";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "~/components/common/ScrollTop";
import "../../public/scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});
import IdleTimerComponent from "./IdleTimerComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userInActivitytimeout = 1000 * 60 * 30; // 30 minutes

  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          rel="icon"
          href="/images/dashboard/dashboard-app-logo.png"
          sizes="91x91"
          // sizes="72x72"
          type="image/png"
        />
        <StoreProvider>
          {/* change this */}
          <IdleTimerComponent timeout={userInActivitytimeout} />
          <Wrapper>{children}</Wrapper>
        </StoreProvider>
        <ScrollToTop />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
