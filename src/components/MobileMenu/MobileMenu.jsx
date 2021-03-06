import React from "react";
import { motion } from "framer-motion";

import "./MobileMenu.scss";

function MobileMenu({ isOpen, toggle }) {
  const menuVisibility = isOpen
    ? { opacity: "100%", top: 0 }
    : { opacity: 0, right: "-100%" };

  return (
    <div className="mobilemenu" style={menuVisibility} onClick={toggle}>
      <motion.ul
        whileInView={{ opacity: [0, 1] }}
        className="mobilemenu__links">
        {["Co robimy", "Realizacje", "O nas", "Kontakt"].map((item) => (
          <li key={`link-${item}`} onClick={toggle}>
            <a href={`#${item}`} className="mobilemenu__link">
              {item}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default MobileMenu;
