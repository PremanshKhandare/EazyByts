import { motion } from "framer-motion";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import "./Services.css";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode; // Ensure safe access

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum is simply dummy text of printing industry. 
          <br />
          Ipsum is often used for placeholders.
        </span>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      
      {/* Right - Cards */}
      <div className="cards-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe XD"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, Node.js, Express"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Creating beautiful and intuitive user interfaces."}
            
          />
        </motion.div>
      </div>

      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Services;
