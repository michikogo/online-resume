import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Email from "./Components/Email";
import Facebook from "./Components/Facebook";
import Github from "./Components/Github";
import LinkedIn from "./Components/LinkedIn";

const Contact = () => {
  const [media] = useState([<Email />, <Facebook />, <Github />, <LinkedIn />]);

  return (
    <Container fluid className="contact-background">
      <Row className="contact-title">
        <Col>Contact Me</Col>
      </Row>
      <Row className="contact-row">
        {media.map((social, index) => (
          <Col xs={6} sm={3} key={index}>
            {social}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
