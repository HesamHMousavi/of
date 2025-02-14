import React from "react";
import IMG from "../../../IMGS/IMG2.jpeg";
import Header from "../../Header/Header";
import ImgTop from "../../ImgTop/ImgTop";
import Hero from "../../Hero/Hero";
import HeroHome from "./HeroHome";
import Banner from "../../Banner/Banner";
import Selection from "../../Selection/Selection";
import Rev from "../../Rev/Rev";
import ContactForm from "../../ContactForm/ContactForm";
import KitImg from "../../../IMGS/IMG1.jpeg";
import Footer from "../../Footer/Footer";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <ImgTop Img={KitImg} />
      <Hero
        title={"LUXURY TAILORED BEDROOM DESIGN"}
        description="At Oak Forest of Yorkshire, we specialise in mid-to-upper-market. Handcrafted kitchens tailored to your lifestyle. 
        Bespoke bedrooms designed for comfort and elegance.
        Custom-built office furniture for both home and commercial spaces.
        Lounge cabinetry and TV walls that redefine living spaces.
        Our vision is simple: to offer timeless, high-quality interiors that enhance every space we touch. 
        Whether you'relooking for a contemporary kitchen, a classic bedroom, or a fully bespoke interior solution, 
        our expertise ensures atruly personalised experience from design to installation.
        "
        Img={IMG}
      />
      <Banner
        title={"Giving our clients the very best service"}
        description={
          "Our role here at Warren Day Design is to ensure our clients are given the very best service and are thrilled with their experience with us."
        }
      />
      <HeroHome />
      <Banner title={"We aim to give our clients the best service"} />
      <Selection />
      <Banner
        title={"Need to discuss your design requirements?"}
        description={
          <>
            Please feel free to give us a call on
            <span className="tag"> 01274 588 931 </span> or send us an enquiry
            through our
            <span
              className="tag link"
              onClick={() => scrollToSection("contact")}
            >
              {" "}
              Contact form
            </span>{" "}
            and we’d be delighted to speak with you.
          </>
        }
      />
      <Rev />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
