import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HoneyComb from "./Components/HoneyComb";
import ImageRight from "./Components/ImageRight";
import ImageLeft from "./Components/ImageLeft";

const About = () => {
  const [programming] = useState([
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

  const [applications] = useState([
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
    if (section === 1) {
      // console.log("entered section 1");
      setMouseEnterSection1(boolean);
      programming.forEach((rowArray) => {
        rowArray
          .filter((specificCol) => specificCol.id === id)
          .forEach((item) => {
            // console.log(item);
            setSectionData(item);
          });
      });
      //
    } else {
      // console.log("entered section 1");
      setMouseEnterSection2(boolean);
      applications.forEach((rowArray) => {
        rowArray
          .filter((specificCol) => specificCol.id === id)
          .forEach((item) => {
            setSectionData(item);
          });
      });
    }
  };

  return (
    <Container fluid className="about-background">
      <Row className="about-title-row">
        <Col>
          <span className="about-title">About</span>
        </Col>
      </Row>
      <Row className="about-row ">
        <Col>
          <Row className="about-section justify-content-md-center">
            <Col sm={6} lg={4} className="about-hexagon-background">
              {programming.map((indexRow, index) => (
                <HoneyComb
                  key={index}
                  handleEnter={handleEnter}
                  row={indexRow}
                  section="1"
                />
              ))}
            </Col>
            <Col sm={6} lg={{ offset: 4, span: 4 }} className="about-image-col">
              <ImageRight />
              {/* {mouseEnterSection1 && (
                <SkillDetails sectionData={sectionData} />
              )} */}
            </Col>
          </Row>
          <Row className="about-section justify-content-md-center">
            <Col sm={6} lg={4} className="about-image-col">
              <ImageLeft />
              {/* {mouseEnterSection2 && (
                    <SkillDetails sectionData={sectionData} />
                  )} */}
            </Col>
            <Col sm={6} lg={4} className="about-hexagon-background">
              {applications.map((indexRow, index) => (
                <HoneyComb
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
    </Container>
  );
};

export default About;
