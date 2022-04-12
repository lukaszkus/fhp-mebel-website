import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-slideshow-image";
import { BsArrowRight } from "react-icons/bs";
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
  const motionBtn = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 0.75, transition: { duration: 0.5 } },
    hover: { opacity: 1 },
  };
  const motionBtnArrow = {
    initial: { x: 0 },
    hover: { x: 6, transition: { duration: 0.5 } },
  };

  return (
    <div className="slider">
      <Fade arrows={false} pauseOnHover={false} indicators={true}>
        {slides.map((slide) => {
          return (
            <div
              className="slide"
              key={slide.id}
              style={{ backgroundImage: `url(${slide.img})` }}>
              <div className="slide__content container">
                <motion.h1
                  animate={{ x: [-100, 0], opacity: [0, 1] }}
                  className="slide__title">
                  {slide.title}
                </motion.h1>
                <motion.a
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={motionBtn}
                  href={slide.link}
                  className="slide__btn">
                  Zobacz więcej
                  <motion.span variants={motionBtnArrow}>
                    <BsArrowRight size="1.1rem" />
                  </motion.span>
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
