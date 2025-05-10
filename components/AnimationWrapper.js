import { useEffect } from "react";
import Script from "next/script";

const AnimationWrapper = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize WOW.js
      if (window.WOW) {
        new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        }).init();
      }

      // Initialize CounterUp if needed
      if (window.jQuery && window.counterUp) {
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
          window.jQuery(counter).counterUp({
            delay: 10,
            time: 1000,
          });
        });
      }
    }
  }, []);

  return <>{children}</>;
};

export default AnimationWrapper;
