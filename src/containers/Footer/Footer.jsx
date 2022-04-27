import React from "react";
// import { motion } from "framer-motion";

import "./Footer.scss";

function Footer() {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__underline" />
        <div className="footer__copyright">
          &copy; F.H.P. MEBEL {date} All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
