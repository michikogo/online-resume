import { Col, Row, Image, Badge } from "react-bootstrap";

// import Flippy, { FrontSide, BackSide } from "react-flippy";

const SpecificProject = ({ project }) => {
  return (
    <>
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
          <a href="https://coolors.co/f68375-13b4cd-a8dcd1-dce2c8-6d545d">
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
    </>
  );
};

export default SpecificProject;
