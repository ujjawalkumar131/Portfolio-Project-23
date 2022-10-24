import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NextNProgress from "nextjs-progressbar";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <NextNProgress color="rgb(25, 128, 188)" height={4} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
