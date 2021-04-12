import "./buttonAnimate.css";
import { Row, Col, Image, Badge } from "react-bootstrap";

const ProjectBack = ({ project }) => {
  return (
    <Row className="project-back-row">
      <Col>
        <Row>
          {/* TITLE & TYPE*/}
          <Col>
            <p className="project-back-name">{project.name}</p>
            <p className="project-back-type">{project.type}</p>
          </Col>
        </Row>
        {/* SUMMARY */}
        <Row>
          <Col>
            <p className="project-back-summary">{project.summary}</p>
          </Col>
        </Row>
        {/* FEATURES */}
        <Row>
          <Col>
            <p className="project-back-section-title">Features:</p>
          </Col>
        </Row>
        {project.features.map((feature) => (
          <Row key={feature}>
            <Col xs={2} lg={1} className="project-back-bullet-image-col">
              <Image
                fluid
                alt="arrowLeft"
                src={require(`../../../Assets/Image/arrowLeft.png`).default}
              />
            </Col>
            <Col>
              <p className="project-back-bullet">{feature}</p>
            </Col>
          </Row>
        ))}
        {/* LANGAUGE/LIBRARIES */}
        <Row>
          <Col className="project-back-section-title">Languages/Libraries:</Col>
        </Row>
        <Row className="project-back-pill-row">
          {project.tags.map((tag) => (
            <Col key={tag}>
              <Badge variant="primary">{tag}</Badge>
            </Col>
          ))}
        </Row>
        {/* BUTTON REROUTE */}
        <Row className="project-back-button">
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
      </Col>
    </Row>
  );
};

export default ProjectBack;
