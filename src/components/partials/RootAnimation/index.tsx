"use client";

import { useEffect } from "react";

const RootAnimation = ({ children }) => {
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

    const elements = document.querySelectorAll(".intersection-fade-in");

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  return <div>{children}</div>;
};

export default RootAnimation;
