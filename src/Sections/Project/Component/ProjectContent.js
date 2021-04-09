import "./buttonAnimate.css";
import { Col, Row } from "react-bootstrap";
import SpecificProject from "./SpecificProject";
import CardAnimation from "./CardAnimation/CardAnimation";

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
          <div>
            <CardAnimation project={project} />
          </div>
        ))}
      </Row>
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
