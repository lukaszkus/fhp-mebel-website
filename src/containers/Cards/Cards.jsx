import React from "react";
// import { motion } from "framer-motion";

import "./Cards.scss";
import { images } from "../../constants";
import { SectionHeading, Card } from "../../components";

const cards = [
  {
    id: 1,
    title: "Meble kuchenne na wymiar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: images.kuchnia,
  },
  {
    id: 2,
    title: "Meble do salonu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: images.salon,
  },
  {
    id: 3,
    title: "Szafy i zabudowy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: images.szafa,
  },
  {
    id: 4,
    title: "Meble do łazienki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: images.lazienka,
  },
  {
    id: 5,
    title: "Wykończenia i remonty pod klucz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: images.remonty,
  },
];

function Cards() {
  return (
    <section className="cards" id="Co robimy">
      <div className="container">
        <SectionHeading heading="Co robimy?" />
        <div className="cards__container">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              desc={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
