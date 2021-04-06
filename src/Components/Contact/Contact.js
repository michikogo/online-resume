import "./index.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Email from "./Components/Email";
// import Facebook from "./Components/Facebook";
import Github from "./Components/Github";
import LinkedIn from "./Components/LinkedIn";
import ContactForm from "./Components/ContactForm";

const Contact = () => {
  const [media] = useState([<Github />, <LinkedIn />]);

  return (
    <Container fluid className="contact-background">
      <Row className="contact-title-row">
        <Col>
          <span className="contact-title">Contact Me</span>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col>
          <Row>
            <Col className="contact-form">
              <ContactForm />
            </Col>
          </Row>
          <Row>
            <Col className="contact-media-padding">
              While waiting checkout my other profiles
            </Col>
          </Row>
          <Row className="contact-social-row">
            {media.map((social, index) => (
              <Col xs={6} sm={2} key={index} style={{ padding: "0px" }}>
                {social}
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="contact-media-padding">
              I am open for work, directly email me at <br />
              <a href="mailto:michikogo98@gmail.com" className="contact-email">
                michikogo98@gmail.com
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
