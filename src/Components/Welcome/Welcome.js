import "./index.css";
import { hello } from "../../Assets/index";
import { Col, Container, Image, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid className="welcome-background">
      <Row className="welcome-row">
        <Col sm={4} className="welcome-image-col">
          <Image
            className="welcome-image"
            fluid
            src={hello}
            alt="Secret Message: Welcome to my Resume 😊"
          />
        </Col>
        <Col className="welcome-intro-col">
          <Row>
            <Col>
              <p className="welcome-im">Hello! I'm</p>
              <p className="welcome-name">Michiko Young Go</p>
              <p className="welcome-email">michikogo98@gmail.com</p>
              <p className="welcome-paragraph">
                Hey you! <br /> I am a software developer that focuses on
                fullstack web development and sometimes mobile development, on
                my free time I love exploring what the world is there to offer.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
