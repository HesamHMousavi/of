import React, { useEffect, useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const contactRef = useRef(null);

  // Landing animation on scroll
  useEffect(() => {
    const contactElement = contactRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactElement.classList.add("visible");
          } else {
            contactElement.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactElement) observer.observe(contactElement);

    return () => {
      if (contactElement) observer.unobserve(contactElement);
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-wrapper">
        {/* Left Side - Text Content */}
        <div className="contact-info">
          <div className="right-mg">
            <h1 className="contact-title Moda">CONTACT US</h1>
            <p className="contact-desc">
              Our showroom is open Monday to Friday from 9am – 5pm and Saturdays
              from 10am to 4pm, or for appointment only if required. Please feel
              free to give us a call or send us an enquiry through this contact
              form and we’d be delighted to speak with you.
            </p>
            <div className="contact-details">
              <h3 className="company-name Moda">OAKFOREST OF YORKSHIRE</h3>
              <p className="Moda">18 Northgate</p>
              <p className="Moda">Baildon</p>
              <p className="Moda">West Yorkshire</p>
              <p className="Moda">BD17 6JX</p>
              <p className="contact-phone">
                <span className="Moda">TEL: 01274 588 931</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form
            action="https://formsubmit.co/oakforestofyorkshire@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                className="Moda"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="Moda"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <input
              type="text"
              className="Moda"
              name="phone"
              placeholder="Phone"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="Moda"
              rows="4"
              required
            ></textarea>

            {/* Hidden Inputs for Extra Configuration */}
            {/* <input
              type="hidden"
              name="_next"
              value="https://"
            />
            <input type="hidden" name="_captcha" value="false" /> */}

            <button type="submit" className="contact-button Moda">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
