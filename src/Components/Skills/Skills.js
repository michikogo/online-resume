import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TwoComb from "./HoneyComb/TwoComb";
import ThreeComb from "./HoneyComb/ThreeComb";
import FourComb from "./HoneyComb/FourComb";
import { isCompositeComponentWithType } from "react-dom/test-utils";
// import { bootstrap } from "../../Assets";
// import OddRow from "./HoneyComb/OddRow";
// import EvenRow from "./HoneyComb/EvenRow";

const Skills = () => {
  const [programming, setProgramming] = useState([
    { id: 1, name: "C", image: "c.png" },
    { id: 2, name: "C#", image: "c#.png" },
    { id: 3, name: "Java", image: "java.png" },
    { id: 4, name: "Python", image: "python.png" },
    { id: 5, name: "HTML", image: "html.png" },
    { id: 6, name: "CSS", image: "css.png" },
    { id: 7, name: "JavaScript", image: "javascript.png" },
    // { id: 8, name: "jQuery", image: "jquery.png" },
    { id: 9, name: "React Hooks", image: "react.png" },
    { id: 10, name: "Vue.js", image: "vue.png" },
    { id: 11, name: "Angular", image: "angular.png" },
    { id: 12, name: "Handlebars", image: "handlebars.png" },
    { id: 13, name: "Firebase", image: "firebase.png" },
    { id: 14, name: "mySQL", image: "mysql.png" },
    { id: 15, name: "mongoDB", image: "mongodb.png" },
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
  // console.log(programming[0].image);
  return (
    <Container fluid className="skills-background">
      <Row className="skills-title">
        <Col>Skills</Col>
      </Row>
      <Row className="skills-row">
        <Col>
          <Row>
            <Col sm={6}>
              <TwoComb data1={programming[0]} data2={programming[1]} />
              <ThreeComb
                data1={programming[2]}
                data2={programming[3]}
                data3={programming[4]}
              />
              <FourComb
                data1={programming[5]}
                data2={programming[6]}
                data3={programming[7]}
                data4={programming[8]}
              />

              <ThreeComb
                data1={programming[9]}
                data2={programming[10]}
                data3={programming[11]}
              />
              <TwoComb data1={programming[12]} data2={programming[13]} />
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
