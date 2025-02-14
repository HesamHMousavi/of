import React, { useEffect, useRef } from "react";
import "./HeroHome.css";
import mainImage from "../../../IMGS/IMG2.jpeg"; // Replace with actual image path
import img1 from "../../../IMGS/IMG3.jpeg";
import img2 from "../../../IMGS/IMG6.jpeg";

const HeroHome = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current; // Store ref in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Reapply animation on scroll
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (heroElement) {
      const items = heroElement.querySelectorAll(".hero-item");
      items.forEach((item) => observer.observe(item));

      return () => {
        items.forEach((item) => observer.unobserve(item));
      };
    }
  }, []);

  return (
    <section className="hero-home" ref={heroRef}>
      {/* Main Background Image */}
      <div className="hero-main">
        <img src={mainImage} alt="Main Kitchen" className="main-image" />
      </div>

      {/* Grid Content - 2x2 Layout */}
      <div className="hero-grid">
        {/* Image 1 */}
        <div className="hero-item">
          <img src={img1} alt="Kitchen Design" className="grid-image dis-app" />
        </div>

        {/* Text 1 */}
        <div className="hero-item text">
          <h2 className="Moda">OUR FIRST-CLASS FITTING TEAM</h2>
          <p>
            We offer a professional fitting team to ensure every installation is
            carried out with precision and care. Our custom designs are tailored
            to your space, style, and needs.
          </p>
        </div>

        {/* Text 2 */}
        <div className="hero-item text">
          <h2 className="Moda">CONTEMPORARY AND TRADITIONAL</h2>
          <p>
            From concept to completion, we deliver a seamless experience,
            bringing your vision to life!
          </p>
        </div>

        {/* Image 2 */}
        <div className="hero-item">
          <img src={img2} alt="Kitchen Interior" className="grid-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
