import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/github.css";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
