import React from "react";
import { Col, Row } from "react-bootstrap";
import SpecificProject from "./SpecificProject";

const Content = ({ projects }) => {
  return (
    <>
      <Row className="project-title-row">
        <Col>
          <span className="project-title">Projects</span>
        </Col>
      </Row>
      <Row className="project-row">
        {projects.map((project) => (
          <Col sm={12} lg={5}>
            <SpecificProject project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Content;
