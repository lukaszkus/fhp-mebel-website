import React from "react";
import { motion } from "framer-motion";

import "./Card.scss";

function Card({ title, desc, icon }) {
  return (
    <motion.article whileInView={{ opacity: [0, 1] }} className="card">
      <img src={icon} className="card__icon" alt={title} />
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{desc}</p>
    </motion.article>
  );
}

export default Card;
