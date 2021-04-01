import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";

import "rodal/lib/rodal.css";
import Rodal from "rodal";

const Education = () => {
  const [projects] = useState([
    {
      id: 1,
      image: "bakeryMNL.PNG",
      name: "BakeryMNL",
      type: "eCommerce Website",
      language: "ReactJs/ JSON",
      header:
        "BakeryMNL is a simple responsive site that uses ReactJs and JSON Server. This site eCommerce site was created to enhance my skills in both React Hooks and JSON Server.",
      tags: [
        "React",
        "JSON Server",
        "react-bootstrap",
        "Responsive",
        "Wireframe",
      ],
      bullets: [
        "Simple responsive website that allows users to buy products, show their total bill, add more products and place their information for shipping or pickup",
        "The website was created to practice react and react-bootstrap, and JSON server.",
      ],
    },
    {
      id: 2,
      image: "HUMALIT.PNG",
      name: "HUMALIT",
      type: "Catalogue Website",
      language: "Vue.js",
      header:
        "HUMALIT Group 3 is an article and reflection catalogue website that was used as the final project for a non CS class.",
      tags: ["Vue", "BootStrap", "Responsive", "Agile", "Wireframe"],
      bullets: [
        "Static website that is used as the final output for an non CS class.",
        "The site contains articles and analysis relating to the given theme.",
        "When creating the site, using vue and bootstrap, agile methodology and wireframes were used.",
      ],
    },
    {
      id: 3,
      image: "mermaidSpa.PNG",
      name: "The Mermaid and Spa",
      type: "Business Website",
      language: "ReactJs/ Firebase",
      header:
        "MermaidSpa is an ecommerce site that users can buy products, check their services and promos. This site was used practice my react and firebase skills.",
      tags: ["React", "react-bootstrap", "Responsive", "Agile", "Wireframe"],
      bullets: [
        "Simple responsive website that allows users to check products, services, and make reservations.",
        "The website was created to practice react and react-bootstrap, and learn firebase.",
      ],
    },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [specificProject, setSpecificProject] = useState(null);

  const handleModal = (project) => {
    setIsVisible(true);
    setSpecificProject(project);
    // styling in function
    document.body.setAttribute(
      "style",
      `overflow-y: hidden;
      -webkit-overflow-scrolling: touch;`
    );
    // document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsVisible(false);
    setSpecificProject(null);

    document.body.setAttribute("style", "overflow-y: unset;");
    // document.body.style.overflow = "scroll";
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
                md={6}
                lg={4}
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
                    <button
                      className="custom-btn btn-8"
                      onClick={(e) => handleModal(project)}
                    >
                      <span>Check me out</span>
                    </button>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* MODAL */}
      {isVisible && (
        <Rodal
          animation="flip"
          visible={isVisible}
          onClose={handleClose}
          closeOnEsc
        >
          <Row className="project-modal-row">
            <Col>
              <Row>
                {/* TITLE */}
                <Col>
                  <p className="project-modal-name">{specificProject.name}</p>
                </Col>
              </Row>
              <Row>
                {/* IMAGE */}
                <Col sm={12} md={6} className="project-modal-image-col">
                  <Image
                    fluid
                    src={
                      require(`../../Assets/Image/${specificProject.image}`)
                        .default
                    }
                    className="project-image"
                  />
                </Col>
                <Col sm={12} md={6}>
                  {/* Header */}
                  <Row>
                    <Col>
                      <p className="project-modal-header">
                        {specificProject.header}
                      </p>
                    </Col>
                  </Row>
                  {/* Bullet */}
                  {specificProject.bullets.map((bullet) => (
                    <Row
                      key={bullet}
                      className="project-modal-description-image"
                    >
                      <Col
                        sm={2}
                        className="project-modal-description-image-col"
                      >
                        <Image
                          fluid
                          alt="arrow side"
                          src={
                            require(`../../Assets/Image/arrowLeft.png`).default
                          }
                        />
                      </Col>
                      <Col>
                        <p className="project-modal-bullet">{bullet}</p>
                      </Col>
                    </Row>
                  ))}
                  {/* Specigic Project */}
                  <Row>
                    {specificProject.tags.map((tag) => (
                      <Col key={tag} sm={12} md={6} lg={4}>
                        <Badge pill variant="primary">
                          {tag}
                        </Badge>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Rodal>
      )}
    </Container>
  );
};

export default Education;
