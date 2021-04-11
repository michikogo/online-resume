import { useState } from "react";
import { Col, Row, Nav } from "react-bootstrap";

import CardAnimation from "./CardAnimation/CardAnimation";

const ProjectContent = ({ webProjects, mobileProjects, otherProjects }) => {
  const [activeNav, setActiveNav] = useState("webProjects");
  return (
    <>
      {/* TITLE */}
      <Row className="project-content-title-row">
        <Col>
          <span className="project-content-title">Projects</span>
        </Col>
      </Row>
      <Row className="project-content-content-row">
        <Col>
          {/* NAV BAR */}
          <Nav fill variant="tabs" defaultActiveKey={activeNav}>
            <Nav.Item>
              {/* WEB PROJECTS */}
              <Nav.Link
                className="project-content-nav-link"
                eventKey="webProjects"
                onClick={() => setActiveNav("webProjects")}
              >
                Web Applications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* MOBILE PROJECTS */}
              <Nav.Link
                className="project-content-nav-link"
                eventKey="mobileProjects"
                onClick={() => setActiveNav("mobileProjects")}
              >
                Mobile Applications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* OTHER PROJECTS */}
              <Nav.Link
                className="project-content-nav-link"
                eventKey="otherProjects"
                onClick={() => setActiveNav("otherProjects")}
              >
                Others
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* ANIMATED CARD */}
          <Row className="project-content-projects-row">
            {/* WEB PROJECTS */}
            {activeNav === "webProjects" &&
              webProjects.map((webProject, index) => (
                <Col key={index} sm={6}>
                  <CardAnimation project={webProject} />
                </Col>
              ))}
            {/* MOBILE PROJECTS */}
            {activeNav === "mobileProjects" &&
              mobileProjects.map((mobileProject, index) => (
                <Col key={index} sm={6}>
                  <CardAnimation project={mobileProject} />
                </Col>
              ))}
            {/* OTHER PROJECTS */}
            {activeNav === "otherProjects" &&
              otherProjects.map((otherProject, index) => (
                <Col key={index} sm={6}>
                  <CardAnimation project={otherProject} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProjectContent;
