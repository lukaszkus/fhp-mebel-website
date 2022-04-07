import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./Slider.scss";
import { images } from "../../constants";

const slides = [
  {
    id: 1,
    title: "Meble kuchenne na wymiar",
    img: images.kitchen,
    link: "#kuchnie",
  },
  {
    id: 2,
    title: "Szafy i zabudowy na wymiar",
    img: images.wardrobe,
    link: "#szafy",
  },
  {
    id: 3,
    title: "Meble do łazienki na wymiar",
    img: images.bathroom,
    link: "#lazienki",
  },
  {
    id: 4,
    title: "Wykończenia i remonty pod klucz",
    img: images.renovations,
    link: "#remonty",
  },
];

function Slider() {
  return (
    <div className="slider">
      <Fade arrows={false} pauseOnHover={false} indicators={true}>
        {slides.map((slide) => {
          return (
            <div
              className="slide"
              key={slide.id}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="slide__content container">
                <motion.h1
                  animate={{ x: [-100, 0], opacity: [0, 1] }}
                  className="slide__title"
                >
                  {slide.title}
                </motion.h1>
                <motion.a
                  animate={{ x: [50, 0], opacity: [0, 1] }}
                  href={slide.link}
                  className="slide__btn"
                >
                  Zobacz więcej &gt;
                </motion.a>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default Slider;
