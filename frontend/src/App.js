import { useContext } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import { themeContext } from "./Context";
import Blog from "./pages/Blog";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />

      <Intro />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />

      <Services />

      <Experience />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />
      <Works />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />
      <Portfolio />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />
      <Testimonial />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />
      <Blog />
      <hr
        style={{
          border: "none",
          height: "4px",
          backgroundColor: "#3498db",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
        }}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;