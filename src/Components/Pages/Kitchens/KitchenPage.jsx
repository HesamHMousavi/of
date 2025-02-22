import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Img from "../../../IMGS/IMG4.jpeg";
import Img2 from "../../../IMGS/IMG3.jpeg";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

// import IMG1 from "../../../IMGS/cLogo.jpeg";

import IMG1 from "../../../IMGS/Kitchen/IMG1.jpg";
import IMG2 from "../../../IMGS/Kitchen/IMG2.jpg";
import IMG3 from "../../../IMGS/Kitchen/IMG3.jpg";
import IMG4 from "../../../IMGS/Kitchen/IMG4.jpg";
import IMG5 from "../../../IMGS/Kitchen/IMG5.jpg";
import IMG6 from "../../../IMGS/Kitchen/IMG6.jpg";
import IMG7 from "../../../IMGS/Kitchen/IMG7.jpg";
import IMG8 from "../../../IMGS/Kitchen/IMG8.jpg";
import IMG9 from "../../../IMGS/Kitchen/IMG9.jpg";
import IMG10 from "../../../IMGS/Kitchen/IMG10.jpg";

const KitchenPage = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={IMG5} title={"KITCHEN"} />
      <Hero
        title={"Bespoke Kitchens"}
        description="At Oak Forest of Yorkshire, we believe the kitchen is more than just a space
          —it’s the heart of the home. Our philosophy is simple: to create tailor-made,
          high-spec kitchens that blend affordability with exceptional craftsmanship,
          ensuring both style and functionality.
          We use only the finest materials and components, ensuring every detail is
          crafted to last a lifetime. It’s not just about the surface finishes but also the
          hidden elements that provide unmatched durability and strength.
          Whether you’re drawn to a contemporary, seamless design or a more
          traditional, handcrafted aesthetic, our expert craftsmanship ensures a
          bespoke kitchen tailored to your home and lifestyle."
        Img={IMG10}
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
          IMG3,
          IMG7,
          IMG8,
          IMG4,
          IMG7,
          IMG8,
          IMG9,
          IMG3,
          IMG9,
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

export default KitchenPage;
