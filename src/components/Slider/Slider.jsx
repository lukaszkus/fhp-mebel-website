import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./Slider.scss";
import { images } from "../../constants";

const slides = [
  {
    id: 1,
    title: "Meble kuchenne na wymiar",
    url: images.kitchen,
  },
  {
    id: 2,
    title: "Szafy i zabudowy",
    url: images.wardrobe,
  },
  {
    id: 3,
    title: "Meble łazienkowe",
    url: images.bathroom,
  },
];

function Slider() {
  return (
    <div className="slider">
      <Fade arrows={false} pauseOnHover={false}>
        {slides.map((slide) => {
          return (
            <div className="slide" key={slide.id}>
              <div style={{ backgroundImage: `url(${slide.url})` }}>
                <h1>{slide.title}</h1>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}

export default Slider;
