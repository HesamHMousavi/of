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
        description="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. 
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
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
