import "./buttonAnimate.css";
import { useState } from "react";
import { Col, Row, Nav } from "react-bootstrap";
import SpecificProject from "./SpecificProject";
import CardAnimation from "./CardAnimation/CardAnimation";

const Content = ({ webProjects, mobileProjects, otherProjects }) => {
  const [activeNav, setActiveNav] = useState("webProjects");
  return (
    <>
      {/* TITLE */}
      <Row className="project-title-row">
        <Col>
          <span className="project-title">Projects</span>
        </Col>
      </Row>
      <Row className="project-row">
        <Col>
          {/* NAV BAR */}
          <Nav justify variant="tabs" defaultActiveKey={activeNav}>
            <Nav.Item>
              <Nav.Link
                eventKey="webProjects"
                onClick={() => setActiveNav("webProjects")}
              >
                Web Applications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="mobileProjects"
                onClick={() => setActiveNav("mobileProjects")}
              >
                Mobile Applications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="otherProjects"
                onClick={() => setActiveNav("otherProjects")}
              >
                Others
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* ANIMATED CARD */}
          <Row className="project-tab-row">
            {activeNav == "webProjects" &&
              webProjects.map((webProject) => (
                <Col sm={6}>
                  <CardAnimation project={webProject} />
                </Col>
              ))}
            {activeNav == "mobileProjects" &&
              mobileProjects.map((mobileProject) => (
                <Col sm={6}>
                  <CardAnimation project={mobileProject} />
                </Col>
              ))}
            {activeNav == "otherProjects" &&
              otherProjects.map((otherProject) => (
                <Col sm={6}>
                  <CardAnimation project={otherProject} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      {/* CARD WITHOUT ANIMATION */}
      {/* <Row className="project-row">
        {projects.map((project) => (
          <Col sm={12} lg={5} className="project-specific-project ">
            <SpecificProject project={project} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Content;
