import React from "react";
// import { motion } from "framer-motion";

import "./About.scss";
// import { images } from "../../constants";
import { SectionHeading } from "../../components";

function About() {
  return (
    <section className="about" id="O nas">
      <div className="container">
        <SectionHeading heading="O nas" />
      </div>
    </section>
  );
}

export default About;
