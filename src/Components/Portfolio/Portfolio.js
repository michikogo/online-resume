import "./index.css";
import { useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";

import "rodal/lib/rodal.css";
import Rodal from "rodal";

const Education = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "bakeryMNL.PNG",
      name: "BakeryMNL",
      type: "eCommerce Website",
      language: "ReactJs/ JSON",
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "BakeryMNL",
      type: "Catalogue Website",
      language: "Vue.js",
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Website",
      language: "ReactJs/ Firebase",
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);

  const handleModal = (project) => {
    setIsVisible(true);
    setData(project);
  };
  return (
    <Container fluid className="project-background">
      <Row className="project-row">
        <Col>
          <Row>
            <Col className="project-title">
              <p>Projects</p>
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
                />
                {/* SEEN WHEN HOVERED */}

                <Row className="project-description">
                  <Col sm={12} className="project-description-details">
                    {project.name}
                  </Col>
                  <Col sm={12} className="project-description-details">
                    {project.language}
                  </Col>
                  <Col sm={12} className="project-description-details">
                    {project.type}
                  </Col>
                  <Col sm={12}>
                    <Button
                      className="project-description-button"
                      onClick={() => handleModal(project)}
                    >
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
      <Rodal
        animation="flip"
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        closeOnEsc
      >
        {/* <Container fluid>
          <Row className="modal-row">
            <Col>
              Make this a video
              <Image
                fluid
                src={require(`../../Assets/Image/${data.image}`).default}
                className="project-image"
              />
            </Col>
            <Col>
              <div>{data.name}</div>
              <div>{data.type}</div>
              <div>{data.language}</div>
            </Col>
          </Row>
        </Container> */}
      </Rodal>
    </Container>
  );
};

export default Education;
