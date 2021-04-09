import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Github from "./Github";
import LinkedIn from "./LinkedIn";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  const [media] = useState([<Github />, <LinkedIn />]);

  return (
    <>
      <Row className="contact-title-row">
        {/* TITLE */}
        <Col>
          <span className="contact-title">Contact Me</span>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col>
          <Row>
            {/* FORM */}
            <Col className="contact-form">
              <ContactForm />
            </Col>
          </Row>
          <Row>
            <Col className="contact-media-padding">
              While waiting checkout my other profiles
            </Col>
          </Row>
          {/* BOUNCING SVG */}
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
    </>
  );
};

export default ContactContent;
