import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Hexagon from "./Hexagon";

const Skills = () => {
  const [programming, setProgramming] = useState([
    [
      { id: 1, name: "C", image: "c.png" },
      { id: 2, name: "C#", image: "c#.png" },
    ],
    [
      { id: 3, name: "Java", image: "java.png" },
      { id: 4, name: "Python", image: "python.png" },
      { id: 5, name: "HTML", image: "html.png" },
    ],
    [
      { id: 6, name: "CSS", image: "css.png" },
      { id: 7, name: "JavaScript", image: "javascript.png" },
      // { id: 8, name: "jQuery", image: "jquery.png" },
      { id: 9, name: "React Hooks", image: "react.png" },
      { id: 10, name: "Vue.js", image: "vue.png" },
    ],
    [
      { id: 11, name: "Angular", image: "angular.png" },
      { id: 12, name: "Handlebars", image: "handlebars.png" },
      { id: 13, name: "Firebase", image: "firebase.png" },
    ],
    [
      { id: 14, name: "mySQL", image: "mysql.png" },
      { id: 15, name: "mongoDB", image: "mongodb.png" },
    ],
  ]);
  // console.log("programming: " + programming.length);

  const [applications, useApplication] = useState([
    [
      { id: 1, name: "Dev C", image: "dev-c.png" },
      { id: 2, name: "Netbeans", image: "intellij-idea.png" },
    ],
    [
      { id: 3, name: "Eclipse", image: "eclipse.png" },
      { id: 4, name: "Android Studio", image: "android-studio.png" },
      { id: 5, name: "Unity", image: "unity.png" },
    ],
    [
      { id: 6, name: "VS Code", image: "visual-studio-code.png" },
      { id: 7, name: "Github", image: "github.png" },
      // { id: 8, name: "jQuery", image: "jquery.png" },
      { id: 9, name: "GitLab", image: "gitlab.png" },
      { id: 10, name: "Trello", image: "trello.png" },
    ],
    [
      { id: 11, name: "Figma", image: "figma.png" },
      { id: 12, name: "Slack", image: "slack.png" },
      { id: 13, name: "Photoshop", image: "adobe.png" },
    ],
    [
      { id: 14, name: "Pentaho", image: "pentaho.png" },
      { id: 15, name: "PowerBI", image: "powerBi.png" },
    ],
  ]);
  // console.log("applications: " + applications.length);
  const [mouseEnterSection1, setMouseEnterSection1] = useState(false);
  const [mouseEnterSection2, setMouseEnterSection2] = useState(false);
  const [sectionData, setSectionData] = useState(null);

  const handleEnter = (boolean, id, section) => {
    // console.log(`Mouse Enter: ${boolean} | ${id} | ${section}`);
    if (section == 1) {
      // console.log("entered section 1");
      setMouseEnterSection1(boolean);
      programming.map((rowArray) => {
        rowArray
          .filter((specificCol) => specificCol.id == id)
          .map((item) => {
            // console.log(item);
            setSectionData(item);
          });
      });
      //
    } else {
      console.log("entered section 1");
      setMouseEnterSection2(boolean);
      applications.map((rowArray) => {
        rowArray
          .filter((specificCol) => specificCol.id == id)
          .map((item) => {
            setSectionData(item);
          });
      });
    }
  };

  return (
    <Container fluid className="skills-background">
      <Row className="skills-title">
        <Col>Skills</Col>
      </Row>
      <Row className="skills-row">
        <Col>
          <Row>
            <Col sm={6} className="skills-hexagon1">
              {programming.map((indexRow, index) => (
                <Hexagon
                  key={index}
                  handleEnter={handleEnter}
                  row={indexRow}
                  section="1"
                />
              ))}
            </Col>
            <Col sm={6}>
              {console.log(`mouse enter seciton 1: ${mouseEnterSection1}`)}
              {mouseEnterSection1 && (
                <Card>Description is here {sectionData.name}</Card>
              )}
              {/* <Image src={bootstrap} className="skills-image" /> */}
            </Col>
          </Row>
          <Row style={{ padding: "30px 0px" }}>
            <Col>
              <Row>
                <Col sm={6}>
                  {console.log(`mouse enter seciton 2: ${mouseEnterSection2}`)}
                  {mouseEnterSection2 && (
                    <Card>Description is here {sectionData.name}</Card>
                  )}
                  {/* <Image src={bootstrap} className="skills-image" /> */}
                </Col>
                <Col sm={6}>
                  {applications.map((indexRow, index) => (
                    <Hexagon
                      key={index}
                      handleEnter={handleEnter}
                      row={indexRow}
                      section="2"
                    />
                  ))}
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
