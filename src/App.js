import "./App.css";

import BackgroundAnimation from "./Sections/BackgroundAnimation/BackgroundAnimation";
import Navbar from "./Sections/Navbar/Navbar";
import Welcome from "./Sections/Welcome/Welcome";
import Project from "./Sections/Project/Project";
import RoadMap from "./Sections/RoadMap/RoadMap";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <BackgroundAnimation />
      <Welcome />
      <Navbar />

      <div id="projects">
        <Project />
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
