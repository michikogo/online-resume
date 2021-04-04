import "./App.css";

import Welcome from "./Components/Welcome/Welcome";
import Portfolio from "./Components/Portfolio/Portfolio";
import RoadMap from "./Components/RoadMap/RoadMap";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "./Components/Navbar/Navbar";

function App() {
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
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
