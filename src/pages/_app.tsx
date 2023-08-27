

import "../styles/style.css";
import '../styles/home.module.css'

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
export default MyApp;