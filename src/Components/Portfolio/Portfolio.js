import "./index.css";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { bakeryMNL, HUMALIT, mermaidSpa } from "../../Assets";

const Education = () => {
  const [image, setImage] = useState([bakeryMNL, HUMALIT, mermaidSpa]);

  return (
    <Container fluid>
      <Row className="project-row">
        <Col>
          <Row>
            <Col className="project-title">
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row>
            {image.map((array) => (
              <Col sm={6} className="project-image-col">
                <Image src={array} className="project-image" />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
