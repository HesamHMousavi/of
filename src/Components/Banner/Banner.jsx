import React, { useEffect, useRef } from "react";
import "./Banner.css";

const Banner = ({ title, description }) => {
  const bannerRef = useRef(null);
  useEffect(() => {
    const bannerElement = bannerRef.current; // Store ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bannerElement.classList.add("visible");
        } else {
          bannerElement.classList.remove("visible"); // Reapply animation on scroll
        }
      },
      { threshold: 0.3 }
    );

    if (bannerElement) {
      observer.observe(bannerElement);
    }

    return () => {
      if (bannerElement) {
        observer.unobserve(bannerElement);
      }
    };
  }, []);

  return (
    <section ref={bannerRef} className="banner">
      <h2 className="Moda">{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Banner;
