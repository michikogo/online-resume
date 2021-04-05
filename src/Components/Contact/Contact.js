import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Email from "./Components/Email";
import Facebook from "./Components/Facebook";
import Github from "./Components/Github";
import LinkedIn from "./Components/LinkedIn";

const Contact = () => {
  const [media] = useState([<Email />, <Github />, <LinkedIn />]);

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
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Body"
                  />
                </Form.Group>
                <Button
                  className="contact-form-button"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            {media.map((social, index) => (
              <Col xs={4} sm={4} key={index} style={{ padding: "0px" }}>
                {social}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
