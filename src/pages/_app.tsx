import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
