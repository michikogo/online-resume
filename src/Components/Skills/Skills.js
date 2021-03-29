import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TwoComb from "./HoneyComb/TwoComb";
import ThreeComb from "./HoneyComb/ThreeComb";
import FourComb from "./HoneyComb/FourComb";
// import { bootstrap } from "../../Assets";
// import OddRow from "./HoneyComb/OddRow";
// import EvenRow from "./HoneyComb/EvenRow";

const Skills = () => {
  const [programming, setProgramming] = useState([
    "C",
    "C#",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React Hooks",
    " Vue",
    "Angular",
    "Python",
    "Firebase",
    "MySQL",
    "MongoDB",
  ]);

  console.log("programming: " + programming.length);
  const [applications, useApplication] = useState([
    "Dev C",
    "Netbeans",
    "Eclipse",
    "Android Studio",
    "Unity",
    "VS Code",
    "Github",
    "GitLab",
    "Trello",
    "Figma",
    "Photoshop",
    "Pentaho",
    "PowerBI",
  ]);
  console.log("applications: " + applications.length);

  return (
    <Container fluid className="skills-background">
      <Row className="skills-title">
        <Col>Skills</Col>
      </Row>
      <Row className="skills-row">
        <Col>
          <Row>
            <Col sm={6}>
              <TwoComb />
              <ThreeComb />
              <FourComb />
              <ThreeComb />
              <TwoComb />
            </Col>
            <Col sm={6}>
              Description is here
              {/* <Image src={bootstrap} className="skills-image" /> */}
            </Col>
          </Row>
          <Row style={{ padding: "30px 0px" }}>
            <Col>
              <Row>
                <Col sm={6}>
                  Description is here
                  {/* <Image src={bootstrap} className="skills-image" /> */}
                </Col>
                <Col sm={6}>
                  <TwoComb />
                  <ThreeComb />
                  <FourComb />
                  <ThreeComb />
                  <TwoComb />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
