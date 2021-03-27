import "./index.css";
import { hello, arrowDown } from "../../Assets/index";
import { Col, Container, Image, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid className="welcome-background">
      <Row className="welcome-row">
        <Col xs={4} className="welcome-image-col">
          <Image
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
                Hey you! <br /> I am a software developer that makes web
                applications and sometimes mobile applications, on my free time
                I love exploring what the world is there to offer.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row className="stage">
        <Col className="box bounce-7">
          <Row>
            <Col>
              <p className="welcome-paragraph">Scroll Down</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src={arrowDown}
                alt="Checkout my portfolio"
                className="welcome-arrow"
              />
            </Col>
          </Row>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Welcome;
