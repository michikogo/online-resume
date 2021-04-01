import "./App.css";
import { useEffect } from "react";

import Welcome from "./Components/Welcome/Welcome";
import Portfolio from "./Components/Portfolio/Portfolio";
import RoadMap from "./Components/RoadMap/RoadMap";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";

function App() {
  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  }, []);

  return (
    <>
      <BackgroundAnimation />
      <Welcome />
      <Portfolio />
      <RoadMap />
      <Skills />
      {/* <Contact /> */}
      <div className="progress-header">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </>
  );
}

export default App;
