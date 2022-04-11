import React from "react";
import { motion } from "framer-motion";

import "./SectionHeading.scss";

function SectionHeading({ heading }) {
  return (
    <div className="heading-wrapper">
      <motion.h2
        whileInView={{ y: [-30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        {heading}
      </motion.h2>
      <motion.div
        className="heading-underline"
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

export default SectionHeading;
