import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("@popperjs/core/dist/umd/popper.js");
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
