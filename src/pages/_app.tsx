import "@/styles/globals.css";
import type { AppProps } from "next/app";

type PageWithLayout = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as PageWithLayout)?.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
