import React from "react";
import { motion } from "framer-motion";

import "./PortfolioItem.scss";

function PortfolioItem({ title, img }) {
  return (
    <motion.article
      whileInView={{ opacity: [0, 1] }}
      className="portfolio-item">
      <img className="portfolio-item__img" src={img} alt={title} />
      <div className="portfolio-item__overlay" />
      <div className="portfolio-item__text">
        <h2 className="portfolio-item__title">{title}</h2>
        <div className="portfolio-item__underline" />
      </div>
    </motion.article>
  );
}

export default PortfolioItem;
