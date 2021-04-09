import React from "react";

import { Col, Row, Image, Badge } from "react-bootstrap";
const CardFront = ({ project }) => {
  return (
    <div class="flip-card-front">
      <Row className="project-front-row">
        <Col>
          <Row>
            {/* TITLE & TYPE*/}
            <Col>
              <p className="project-modal-name">{project.name}</p>
              <p className="project-modal-type">{project.type}</p>
            </Col>
          </Row>

          <Row>
            {/* IMAGE */}
            <Col sm={12} className="project-modal-image-col">
              <Image
                fluid
                src={
                  require(`../../../../Assets/Image/${project.image}`).default
                }
                className="project-modal-image"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CardFront;
