import { CommonHTMLHeaders } from "@/components/HTMLHeaders";
import RootLayout from "@/layouts/RootLayout";
import { Fragment } from "react";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CommonHTMLHeaders />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Fragment>
  );
}
