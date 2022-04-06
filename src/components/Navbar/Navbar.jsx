import React from "react";

import "./Navbar.scss";
import { images } from "../../constants";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <div className="navbar__logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="navbar__links">
          {["Co robimy", "Realizacje", "O nas", "Kontakt"].map((item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`} className="navbar__link">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__line" />
      </div>
    </nav>
  );
}

export default Navbar;
