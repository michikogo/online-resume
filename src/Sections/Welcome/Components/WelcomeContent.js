import { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

const WelcomeContent = () => {
  const [isMobileMode, setIsMobileMode] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkWidth, true);
  }, []);

  const checkWidth = () => {
    if (window.innerWidth > 1024) {
      setIsMobileMode(false);
    } else {
      setIsMobileMode(true);
    }
  };

  return (
    <>
      <Row className="welcome-row">
        <Col sm={4} className="welcome-image-col">
          <Image
            className="welcome-image"
            fluid
            src={require("../../../Assets/Image/hello.gif").default}
            alt="I just want to say hi 😢"
          />
        </Col>
        <Col className="welcome-intro-col">
          <Row>
            <Col>
              <p className="welcome-im">Hello! I'm</p>
              <p className="welcome-name">Michiko Young Go</p>
              {/* <p className="welcome-email">michikogo98@gmail.com</p> */}
              <p className="welcome-paragraph">
                Hey you! <br /> I am a software developer that focuses on
                fullstack web development and sometimes mobile development, on
                my free time I love exploring what the world is there to offer.
              </p>
              {!isMobileMode && (
                <Col className="welcome-download-col">
                  <a
                    className="welcome-download"
                    href={
                      require("../../../Assets/michikogo-resume.pdf").default
                    }
                    download
                  >
                    👉Click me to download my resume👈
                  </a>
                </Col>
              )}
              {isMobileMode && (
                <Col className="welcome-download-col">
                  <a
                    className="welcome-download"
                    href={
                      require("../../../Assets/michikogo-resume.pdf").default
                    }
                    download
                  >
                    👉Download my resume👈
                  </a>
                </Col>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WelcomeContent;
