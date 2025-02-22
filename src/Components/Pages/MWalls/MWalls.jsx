import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import IMG1 from "../../../IMGS/md/IMG1.jpg";
import IMG2 from "../../../IMGS/md/IMG2.jpg";
import IMG3 from "../../../IMGS/md/IMG3.jpg";
import IMG4 from "../../../IMGS/md/IMG4.jpg";
import IMG5 from "../../../IMGS/md/IMG5.jpg";
import IMG6 from "../../../IMGS/md/IMG6.jpg";
import IMG7 from "../../../IMGS/md/IMG7.jpg";
import IMG8 from "../../../IMGS/md/IMG8.jpg";
import IMG9 from "../../../IMGS/md/IMG9.jpg";
import IMG10 from "../../../IMGS/md/IMG10.jpg";

const MWalls = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={IMG7} title={"Walls"} />
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
        Img={IMG5}
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
          IMG2,
          IMG3,
          IMG6,
          IMG2,
          IMG3,
          IMG7,
          IMG8,
          IMG4,
          IMG5,
          IMG6,
          IMG7,
          IMG8,
          IMG9,
          IMG3,
          IMG7,
          IMG8,
          IMG4,
          IMG5,
          IMG6,
          IMG3,
          IMG4,
          IMG5,
          IMG10,
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MWalls;
