import { useState } from "react";
import { Row, Col } from "react-bootstrap";

import GithubSVG from "./SVG/GithubSVG";
import LinkedInSVG from "./SVG/LinkedInSVG";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  const [media] = useState([<GithubSVG />, <LinkedInSVG />]);

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
              <a
                href="mailto:michikoyounggo@gmail.com"
                className="contact-email"
              >
                michikoyounggo@gmail.com
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href={require("../../../Assets/michikogo-resume.pdf").default}
                className="contact-email"
                download
              >
                👉Click me to download my resume👈
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ContactContent;
