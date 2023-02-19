import useNProgress from "@/hooks/nprogress/useNProgress";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
  useNProgress();
  return <Component {...pageProps} />;
}
