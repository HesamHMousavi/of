import React, { useEffect, useState } from "react";
import "./ImgGrid.css";

const ImgGrid = ({ images }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const grid = document.querySelector(".img-grid");
      if (grid) {
        const rect = grid.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setLoaded(true);
        } else {
          setLoaded(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="img-grid">
      {images.map((img, index) => (
        <div key={index} className={`img-item ${loaded ? "loaded" : ""}`}>
          <img
            src={img}
            alt={`Kitchen ${index + 1}`}
            className="img-fixed-size"
          />
        </div>
      ))}
    </div>
  );
};

export default ImgGrid;
