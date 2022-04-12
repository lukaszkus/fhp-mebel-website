import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

import "./Navbar.scss";
import { images } from "../../constants";

import { MobileMenu } from "../";

function Navbar({ isOpen, toggle }) {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar && "showNavbar"}`}>
      <div className="navbar__container container">
        <motion.div whileInView={{ opacity: [0, 1] }} className="navbar__logo">
          <img src={images.logo} alt="logo" />
        </motion.div>
        <div className="navbar__menu">
          <motion.ul
            whileInView={{ opacity: [0, 1] }}
            className="navbar__links">
            {["Co robimy", "Realizacje", "O nas", "Kontakt"].map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`} className="navbar__link">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="navbar__hamburger">
            <Hamburger
              size={28}
              color="#fff"
              label="Show menu"
              toggled={isOpen}
              toggle={toggle}
            />
          </motion.div>
          <MobileMenu isOpen={isOpen} />
          <motion.div
            animate={{ x: [500, 0], opacity: [0, 1] }}
            className="navbar__line"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
