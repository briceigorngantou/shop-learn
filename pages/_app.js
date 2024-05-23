// pages/_app.js
import React from "react";
import { AppProvider } from "../configs/appContext";
import "../public/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
