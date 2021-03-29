import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const [knowledgable, setKnowledgable] = useState([
    "UI/UX",
    "Web Application Development",
    "Android Development",
    "Game Development",
    "Object-Oriented Programming",
    "MVC Framework",
    "Project Management Frameworks",
    "Git",
    "OLAP Dashboard",
    "Enterprise Resource Planning (ERP)",
    "Machine Learning",
    "Node.js",
  ]);
  return (
    <Container fluid className="skills-background">
      <Row className="skills-title">
        <Col>Skills</Col>
      </Row>
      <Row className="skills-row">
        <Col>
          <Row>
            {knowledgable.map((knowledge) => (
              <Col className="skills-box">
                <Row className="skills-text">
                  <Col>{knowledge}</Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
