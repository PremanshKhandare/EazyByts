import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name">Gem</div>
        <Toggle />
      </div>

      {/* Right Side */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} duration={500}>
                Testimonial
              </Link>
            </li>
            <li>
              {/* Ensure "to" matches the exact ID in Blogs.js */}
              <Link to="blog" spy={true} smooth={true} duration={500}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
