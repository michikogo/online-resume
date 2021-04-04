import "./index.css";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      gradientBar();
      navbar();
    };

    function gradientBar() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

    function navbar() {
      // getting position of top scroll
      console.log(window.innerHeight + window.scrollY);
      if (window.innerHeight + window.scrollY >= 1326) {
        console.log("Show nav bar " + (window.innerHeight + window.scrollY));
        setShowNavBar(true);
      } else if (window.innerHeight + window.scrollY < 1326) {
        setShowNavBar(false);
      }
    }
  }, []);

  return (
    <div className={showNavBar ? "app-nav-row-fixed" : "app-nav-row"}>
      <Row className="app-section-row">
        <Col>
          <Link
            className="navbar-link"
            activeClass="active"
            to="projects"
            offset={1}
            spy={true}
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </Col>
        <Col>
          <Link
            className="navbar-link"
            activeClass="active"
            to="roadmap"
            offset={1}
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={() => window.location.replace("/#roadmap")}
          >
            RoadMap
          </Link>
        </Col>
        <Col>
          <Link
            className="navbar-link"
            activeClass="active"
            to="skills"
            offset={1}
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={() => window.location.replace("/#skills")}
          >
            Skills
          </Link>
        </Col>
        <Col>
          <Link
            className="navbar-link"
            activeClass="active"
            to="contact"
            offset={1}
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={() => window.location.replace("/#contact")}
          >
            Contact
          </Link>
        </Col>
      </Row>
      <div className="progress-header">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
};

export default Navbar;