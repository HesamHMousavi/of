import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ContactForm from "../../ContactForm/ContactForm";
import ImgTop from "../../ImgTop/ImgTop";
import IMG from "../../../IMGS/IMG5.jpeg";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ImgTop Img={IMG} title={"Get In Touch"} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
