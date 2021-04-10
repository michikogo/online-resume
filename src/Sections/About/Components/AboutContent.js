import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import HoneyComb from "./HoneyComb";
import LanguageImage from "./SVG/LanguageImage";
import ToolsImage from "./SVG/ToolsImage";

const AboutContent = ({ programming, applications }) => {
  //   const [mouseEnterSection1, setMouseEnterSection1] = useState(false);
  //   const [mouseEnterSection2, setMouseEnterSection2] = useState(false);
  //   const [sectionData, setSectionData] = useState(null);

  //   const handleEnter = (boolean, id, section) => {
  //     // console.log(`Mouse Enter: ${boolean} | ${id} | ${section}`);
  //     if (section === 1) {
  //       // console.log("entered section 1");
  //       setMouseEnterSection1(boolean);
  //       programming.forEach((rowArray) => {
  //         rowArray
  //           .filter((specificCol) => specificCol.id === id)
  //           .forEach((item) => {
  //             // console.log(item);
  //             setSectionData(item);
  //           });
  //       });
  //       //
  //     } else {
  //       // console.log("entered section 1");
  //       setMouseEnterSection2(boolean);
  //       applications.forEach((rowArray) => {
  //         rowArray
  //           .filter((specificCol) => specificCol.id === id)
  //           .forEach((item) => {
  //             setSectionData(item);
  //           });
  //       });
  //     }
  //   };

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
      <Row className="about-title-row">
        {/* TITLE */}
        <Col>
          <span className="about-title">About</span>
        </Col>
      </Row>
      <Row className="about-row">
        <Col>
          <Row className="about-section justify-content-md-center">
            {/* LANGUAGES */}
            <Col
              data-aos="fade-right"
              data-aos-offset="300"
              sm={6}
              lg={3}
              className="about-hexagon-background"
            >
              {programming.map((indexRow, index) => (
                <HoneyComb
                  key={index}
                  //   handleEnter={handleEnter}
                  row={indexRow}
                  section="1"
                />
              ))}
            </Col>
            {/* DESCRIPTION-DESKTOP */}
            {!isMobileMode && (
              <Col data-aos="flip-up" lg={6} className="about-description-col">
                <span className="about-description">
                  Hi I am Michiko Go, I recently graduated last February 2021 in
                  the course BS Computer Science. College was fun and I learned
                  a lot and I can't wait to use my skills in your business. I
                  learned various of languages and tools for development, but
                  I'm most interested in web and mobile development since it
                  challenged me the most especially when animating a web or
                  mobile page.
                </span>
              </Col>
            )}
            {/* LANGUAGE-IMAGE */}
            <Col
              data-aos="fade-left"
              data-aos-offset="300"
              sm={6}
              lg={3}
              className="about-image-col"
            >
              <LanguageImage />
            </Col>
          </Row>
          {/* DESCRIPTION-MOBILE */}
          {isMobileMode && (
            <Row>
              <Col data-aos="flip-up">
                <span className="about-description">
                  Hi I am Michiko Go, I recently graduated last February 2021 in
                  the course BS Computer Science. College was fun and I learned
                  a lot and I can't wait to use my skills in your business. I
                  learned various of languages and tools for development, but
                  I'm most interested in web and mobile development since it
                  challenged me the most especially when animating a web or
                  mobile page.
                </span>
              </Col>
            </Row>
          )}
          <Row className="about-section justify-content-md-center">
            {/* TOOLS-IMAGE */}
            <Col
              data-aos="zoom-in-right"
              data-aos-offset="200"
              sm={6}
              lg={3}
              className="about-image-col"
            >
              <ToolsImage />
            </Col>
            {/* TOOLS */}
            <Col
              data-aos="zoom-in-left"
              data-aos-offset="200"
              sm={6}
              lg={{ offset: 2, span: 3 }}
              className="about-hexagon-background"
            >
              {applications.map((indexRow, index) => (
                <HoneyComb
                  key={index}
                  //   handleEnter={handleEnter}
                  row={indexRow}
                  section="2"
                />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AboutContent;
