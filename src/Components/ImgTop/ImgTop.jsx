import React from "react";

import "./ImgTop.css";

const ImgTop = ({ Img, title = "HOME" }) => {
  return (
    <div className="img-top">
      <img src={Img} alt="" />
      <h1 className="Moda st">{title}</h1>
    </div>
  );
};

export default ImgTop;
