import React from "react";
// import { motion } from "framer-motion";

import "./Portfolio.scss";
import { images } from "../../constants";
import { SectionHeading, PortfolioItem } from "../../components";

const portfolioItems = [
  {
    id: 1,
    title: "Kuchnie",
    img: images.cat_kuchnie,
  },
  {
    id: 2,
    title: "Salon",
    img: images.cat_salon,
  },
  {
    id: 3,
    title: "Łazienki",
    img: images.cat_lazienki,
  },

  {
    id: 4,
    title: "Szafy i zabudowy",
    img: images.cat_szafy,
  },
  {
    id: 5,
    title: "Wykończenia wnętrz",
    img: images.cat_remonty,
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="Realizacje">
      <div className="container">
        <SectionHeading heading="Nasze realizacje" />
      </div>
      <div className="portfolio__container">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
