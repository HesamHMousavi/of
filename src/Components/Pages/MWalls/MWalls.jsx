import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Img from "../../../IMGS/IMG9.webp";
import Img2 from "../../../IMGS/IMG3.jpeg";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import IMG1 from "../../../IMGS/cLogo.jpeg";

const MWalls = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={Img} title={"Walls"} />
      <Hero
        title={"Custom Media Walls"}
        description="A media wall is more than just a place for your TV—it’s a
          statement feature that enhances your living space. At
          Oak Forest of Yorkshire, we design bespoke media walls
          that integrate TV units, shelving, ambient lighting, and
          storage for a sleek and modern look. Whether you want
          a minimalist floating unit or a bold centre piece with
          built-in cabinetry, we tailor each design to complement
          your home’s style and functionality."
        Img={Img2}
        ShowBtn={false}
      />
      <Banner
        title={"Our trusted trades team"}
        description={
          "Over the years, we’ve built up a team of trusted trades people that we’re proud to have as part of the Warren Day family"
        }
      />
      <ImgGrid
        images={[
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
          IMG1,
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MWalls;
