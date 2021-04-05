import "./index.css";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const Navbar = () => {
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
      // console.log("Hello: " + window.scrollY);
      // console.log("Media Height: " + window.scrollY);
      // console.log("Media Width: " + window.innerWidth);
      // console.log(window.innerHeight + window.scrollY);
      // if (window.innerHeight + window.scrollY >= 1326) {
      //   console.log("Show nav bar " + (window.innerHeight + window.scrollY));
      //   setShowNavBar(true);
      // } else if (window.innerHeight + window.scrollY < 1326) {
      //   setShowNavBar(false);
      // }
    }
  }, []);

  return (
    <div id="navigation" className="app-nav-row-sticky">
      <Row className="app-section-row">
        <Col className="nav-col">
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
        <Col className="nav-col">
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
        {/* <Col>
          <Image
            fluid
            src={require("../../Assets/Image/girlNodding.png").default}
            width="27"
          />
          <span>Michiko Go</span>
        </Col> */}
        <Col className="nav-col">
          <Link
            className="navbar-link"
            activeClass="active"
            to="about"
            offset={1}
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={() => window.location.replace("/#skills")}
          >
            About
          </Link>
        </Col>
        <Col className="nav-col">
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
