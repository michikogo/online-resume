import React from "react";
import { Col, Row, Image, Badge, Button } from "react-bootstrap";

const SpecificProject = ({ project }) => {
  return (
    <>
      <Row>
        {/* TITLE */}
        <Col>
          <p className="project-modal-name">{project.name}</p>
        </Col>
      </Row>
      {/* Header */}
      <Row>
        <Col>
          <p className="project-modal-header">{project.header}</p>
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
        <Col sm={12} md={6}>
          <Row>
            <Col>
              <p className="project-modal-features">Features:</p>
            </Col>
          </Row>
          {/* Bullet */}
          {project.features.map((bullet) => (
            <Row key={bullet} className="project-modal-description-image">
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
                <p className="project-modal-bullet">{bullet}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      {/* Specific Project */}
      <Row className="project-modal-pill-row">
        {project.tags.map((tag) => (
          <Col key={tag} xs={6} md={3}>
            <Badge pill variant="primary">
              {tag}
            </Badge>
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
    </>
  );
};

export default SpecificProject;
