import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/github.css";
import React from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider>
      <CSSReset />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
