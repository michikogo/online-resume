import "./index.css";
import { useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { bakeryMNL, HUMALIT, mermaidSpa } from "../../Assets";

import "rodal/lib/rodal.css";
import Rodal from "rodal";

const Education = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "bakeryMNL.PNG",
      name: "BakeryMNL",
      type: "eCommerce Website",
      langauge: "ReactJs/ JSON",
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "BakeryMNL",
      type: "Catalogue Website",
      langauge: "Vue.js",
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Website",
      langauge: "ReactJs/ Firebase",
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);

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
            {projects.map((project) => (
              <Col
                key={project.id}
                sm={12}
                lg={6}
                className="project-image-col"
              >
                <Image
                  fluid
                  src={require(`../../Assets/Image/${project.image}`).default}
                  className="project-image"
                  onClick={() => setIsVisible(true)}
                />
                {/* SEEN WHEN HOVERED */}

                <Row className="project-description">
                  <Col sm={12} className="project-description-details">
                    {project.name}
                  </Col>

                  <Col sm={12} className="project-description-details">
                    {project.langauge}
                  </Col>
                  <Col sm={12} className="project-description-details">
                    {project.type}
                  </Col>
                  <Col sm={12}>
                    <Button className="project-description-button">
                      Learn More
                    </Button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* MODAL */}
      {/* <Rodal
        animation="flip"
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        closeOnEsc
      >
        <Container fluid>
          <Row className="modal-row">
            <Col>
              Make this a video
              <Image src={data} className="project-image" />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Rodal> */}
    </Container>
  );
};

export default Education;
