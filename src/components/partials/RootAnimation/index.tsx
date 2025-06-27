"use client";

import { useEffect } from "react";

const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("animate-fade-in");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll(
        ".intersection-fade-in:not([data-observed])",
      );
      elements.forEach((element) => {
        element.setAttribute("data-observed", "true");
        observer.observe(element);
      });
    };

    // Observe immediately
    observeNewElements();

    // Set up a timer to periodically check for new elements
    const interval = setInterval(observeNewElements, 100);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
};

const RootAnimation = ({ children }) => {
  useIntersectionObserver();
  return <div>{children}</div>;
};

export default RootAnimation;
