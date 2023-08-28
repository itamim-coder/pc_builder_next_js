import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
type PageWithLayout = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const getLayout =
    (Component as PageWithLayout)?.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </>
    </SessionProvider>
  );
}
