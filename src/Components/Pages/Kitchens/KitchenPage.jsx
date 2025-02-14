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

import IMG1 from "../../../IMGS/cLogo.jpeg";

const KitchenPage = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={Img} title={"KITCHEN"} />
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

export default KitchenPage;
