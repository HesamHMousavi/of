import React from "react";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Img from "../../../IMGS/IMG2.jpeg";
import Img2 from "../../../IMGS/IMG1.jpeg";
import Hero from "../../Hero/Hero";
import Banner from "../../Banner/Banner";
import ImgGrid from "../../ImgGrid/ImgGrid";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";

import IMG1 from "../../../IMGS/cLogo.jpeg";

const Bedrooms = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={Img} title={"BEDROOMS"} />
      <Hero
        title={"The highest quality, tailor made"}
        description="At Oak Forest of Yorkshire, we design beautiful, functional bedrooms that reflect your style and maximise your space. From tranquil, minimalist sanctuaries to luxurious, feature-rich retreats, our bespoke interiors are crafted with meticulous attention to detail. We tailor every element of your bedroom, ensuring it feels like a true haven with clever space-saving layouts, premium materials, and elegant lighting solutions. Our custom storage options, such as made-to-measure wardrobes, integrate seamlessly into your design—combining sleek aesthetics with smart functionality to keep your space clutter-free. Let us turn your bedroom into a sanctuary designed just for you."
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
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Bedrooms;
