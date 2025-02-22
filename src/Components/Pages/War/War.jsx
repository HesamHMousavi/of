import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Img from "../../../IMGS/IMG8.jpeg";
import Img2 from "../../../IMGS/IMG7.jpeg";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";
import IMG1 from "../../../IMGS/war/IMG1.avif";
import IMG2 from "../../../IMGS/war/IMG2.jpg";
import IMG3 from "../../../IMGS/war/IMG3.avif";
import IMG4 from "../../../IMGS/war/IMG4.avif";
import IMG5 from "../../../IMGS/war/IMG5.avif";
import IMG6 from "../../../IMGS/war/IMG6.avif";
import IMG7 from "../../../IMGS/war/IMG7.avif";
import IMG8 from "../../../IMGS/war/IMG8.jpg";
import IMG9 from "../../../IMGS/war/IMG9.avif";
import IMG10 from "../../../IMGS/war/IMG11.webp";

const War = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={IMG10} title={"WARDROBES"} />
      <Hero
        title={"Personalised Wardrobes"}
        description="At Oak Forest of Yorkshire, we design and craft made-
            to-measure wardrobes that seamlessly fit your space
            and style. Whether you prefer a sleek, modern finish or a
            more traditional design, our fully customised storage
            solutions offer the perfect balance of aesthetics and
            functionality. From floor-to-ceiling wardrobes to walk-in
            closets, we create tailored interiors with smart storage
            features, integrated lighting, and premium materials to
            enhance your home."
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
          IMG10,
          IMG4,
          IMG5,
          IMG6,
          IMG7,
          IMG8,
          IMG9,
          IMG3,
          IMG7,
          IMG10,
          IMG8,
          IMG4,
          IMG5,
          IMG6,
          IMG3,
          IMG4,
          IMG5,
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default War;
