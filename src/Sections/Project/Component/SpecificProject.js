import React from "react";
import { Col, Row, Image, Badge } from "react-bootstrap";

import Flippy, { FrontSide, BackSide } from "react-flippy";

import FlipCard from "react-flipcard";
const SpecificProject = ({ project }) => {
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{
        margin: "1vh",
      }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          backgroundColor: "#DCE2C8",
          borderRadius: "15px",
          height: "90vh",
        }}
      >
        RICK
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#DCE2C8",
          borderRadius: "15px",
          height: "90vh",
          // minHeight: "90vh"
        }}
      >
        <Row>
          {/* TITLE & TYPE*/}
          <Col>
            <p className="project-modal-name">{project.name}</p>
            <p className="project-modal-type">{project.type}</p>
          </Col>
        </Row>
        {/* HEADER */}
        <Row>
          <Col>
            <p className="project-modal-header">{project.summary}</p>
          </Col>
        </Row>
        <Row>
          {/* IMAGE */}
          <Col sm={12} md={4} className="project-modal-image-col">
            <Image
              fluid
              src={require(`../../../Assets/Image/${project.image}`).default}
              className="project-modal-image"
            />
          </Col>
          {/* FEATURES */}
          <Col>
            <Row>
              <Col>
                <p className="project-modal-features">Features:</p>
              </Col>
            </Row>
            {project.features.map((feature) => (
              <Row key={feature} className="project-modal-description-image">
                <Col
                  xs={2}
                  md={1}
                  className="project-modal-description-image-col"
                >
                  <Image
                    fluid
                    alt="arrow side"
                    src={require(`../../../Assets/Image/arrowLeft.png`).default}
                  />
                </Col>
                <Col>
                  <p className="project-modal-bullet">{feature}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        {/* Specific Project */}
        <Row>
          <Col className="project-modal-features">Languages/Libraries:</Col>
        </Row>
        <Row className="project-modal-pill-row">
          {project.tags.map((tag) => (
            <Col key={tag}>
              <Badge variant="primary">{tag}</Badge>
            </Col>
          ))}
        </Row>
        <Row className="project-specific-button">
          {project.isAddress && (
            <button className="custom-btn btn-8">
              <span>Launch</span>
            </button>
          )}
          {!project.isAddress && (
            <button className="custom-btn custom-button-disabled">
              <span>Out of Service</span>
            </button>
          )}
        </Row>
      </BackSide>
    </Flippy>
  );
};

export default SpecificProject;
