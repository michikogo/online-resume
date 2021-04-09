import { Row, Col, Image } from "react-bootstrap";

const ProjectFront = ({ project }) => {
  return (
    <Row className="project-front-row">
      <Col>
        <Row>
          {/* TITLE & TYPE*/}
          <Col>
            <p className="project-front-name">{project.name}</p>
            <p className="project-front-type">{project.type}</p>
          </Col>
        </Row>
        <Row>
          {/* IMAGE */}
          <Col sm={12} className="project-front-image-col">
            <Image
              fluid
              src={require(`../../../Assets/Image/${project.image}`).default}
              className="project-front-image"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectFront;
