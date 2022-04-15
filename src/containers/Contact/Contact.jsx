import React from "react";
// import { motion } from "framer-motion";

import "./Contact.scss";
// import { images } from "../../constants";
import { SectionHeading } from "../../components";

function Contact() {
  return (
    <footer className="contact" id="Kontakt">
      <div className="container">
        <SectionHeading heading="Kontakt" />
        <div className="contact__container">
          <div className="contact__cards">
            <div className="contact__card contact__card--adress">
              <h2 className="contact__card-title">Title</h2>
            </div>
            <div className="contact__card contact__card--email"></div>
            <div className="contact__card contact__card--phone"></div>
          </div>
          <div className="contact__map"></div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
