
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Check if the script is already added to prevent multiple loads
    if (!window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/6834507a127764190ca8acce/1is65kp0c";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);
    }
  }, []);

  return null; // This component does not render anything
};

export default TawkToWidget;



