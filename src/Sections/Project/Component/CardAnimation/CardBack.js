import React from "react";

import { Col, Row, Image, Badge } from "react-bootstrap";
const CardBack = ({ project }) => {
  const handleResetScroll = () => {
    var top = document.getElementsByClassName("flip-card-inner");
    top.scrollTop = 0;
  };
  return (
    <div class="flip-card-back" onMouseLeave={handleResetScroll}>
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
        <Col>
          <p className="project-modal-features">Features:</p>
        </Col>
      </Row>
      {project.features.map((feature) => (
        <Row key={feature} className="project-modal-description-image">
          <Col xs={2} className="project-modal-description-image-col">
            <Image
              fluid
              alt="arrow side"
              src={require(`../../../../Assets/Image/arrowLeft.png`).default}
            />
          </Col>
          <Col xs={10}>
            <p className="project-modal-bullet">{feature}</p>
          </Col>
        </Row>
      ))}
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
          <a href={project.address} target="_block">
            <button className="custom-btn btn-8">
              <span>Launch</span>
            </button>
          </a>
        )}
        {!project.isAddress && (
          <button className="custom-btn custom-button-disabled">
            <span>Out of Service</span>
          </button>
        )}
      </Row>
    </div>
  );
};

export default CardBack;
