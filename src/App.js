import "./App.css";

import Welcome from "./Components/Welcome/Welcome";
import Portfolio from "./Components/Portfolio/Portfolio";
import RoadMap from "./Components/RoadMap/RoadMap";
import Contact from "./Components/Contact/Contact";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";

function App() {
  // var scale = "scale(1)";
  // document.body.style.webkitTransform = scale; // Chrome, Opera, Safari
  // document.body.style.msTransform = scale; // IE 9
  // document.body.style.transform = scale; // General

  return (
    <>
      <BackgroundAnimation />
      <Welcome />
      <Navbar />

      <div id="projects">
        <Portfolio />
      </div>
      <div id="roadmap">
        <RoadMap />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
