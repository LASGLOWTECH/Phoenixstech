
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Check if the script is already added to prevent multiple loads
    if (!window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/680f7035d22d79190b3eb4be/1ipu4skuh";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);
    }
  }, []);

  return null; // This component does not render anything
};

export default TawkToWidget;



