import React from "react";
// import { motion } from "framer-motion";

import "./Cards.scss";

function Cards() {
  return (
    <section className="cards">
      <div className="container">
        <h2 className="cards__title">Co robimy?</h2>
        <div className="cards__container">
          <article className="card">1</article>
          <article className="card">2</article>
          <article className="card">3</article>
          <article className="card">4</article>
          <article className="card">5</article>
        </div>
      </div>
    </section>
  );
}

export default Cards;
