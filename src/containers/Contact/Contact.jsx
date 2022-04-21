import React from "react";
import { motion } from "framer-motion";

import "./Contact.scss";
import { images } from "../../constants";
import { SectionHeading, MapContainer } from "../../components";

function Contact() {
  return (
    <footer className="contact" id="Kontakt">
      <div className="container">
        <SectionHeading heading="Kontakt" />
        <div className="contact__cards">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="contact__card"
          >
            <img src={images.phone} className="contact__icon" alt="phone" />
            <h2 className="contact__card-title">Telefon:</h2>
            <p className="contact__text">602 692 161</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="contact__card"
          >
            <img src={images.email} className="contact__icon" alt="email" />
            <h2 className="contact__card-title">Email:</h2>
            <p className="contact__text">biuro@fhpmebel.pl</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="contact__card"
          >
            <img src={images.marker} className="contact__icon" alt="address" />
            <h2 className="contact__card-title">Adres:</h2>
            <p className="contact__text">
              ul. Pod Fortem 19
              <br />
              Kraków
            </p>
          </motion.div>
        </div>
      </div>
      <div className="contact__map">
        <MapContainer />
      </div>
    </footer>
  );
}

export default Contact;
