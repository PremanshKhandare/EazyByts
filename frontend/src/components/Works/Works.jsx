import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from 'react-scroll';
import { themeContext } from "../../Context";
import Vector5 from "../../img/Vector5.png";
import "./Works.css";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            I build sleek, high-performance websites for brands like <b>TechNova Solutions</b>, <b>TrendWear Fashion</b>, and <b>Urban Eats Café</b>. From eCommerce to business sites, I create modern, user-friendly, and conversion-driven web solutions.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={Vector5}
          alt="Vector5"
          className="vector-image"
        />
      </div>
    </div>
  );
};

export default Works;
