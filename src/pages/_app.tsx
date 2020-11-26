import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "../styles/global.scss";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
