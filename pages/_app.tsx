import type { AppProps } from "next/app";
import "../globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/src/theme/Theme";
import AuthContextProvider from "@/src/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <Component {...pageProps} />;
      </AuthContextProvider>
    </ThemeProvider>
  );
}
