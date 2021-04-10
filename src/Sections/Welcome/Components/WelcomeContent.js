import { Row, Col, Image } from "react-bootstrap";

const WelcomeContent = () => {
  return (
    <>
      <Row className="welcome-row">
        <Col sm={4} className="welcome-image-col">
          <Image
            className="welcome-image"
            fluid
            src={require("../../../Assets/Image/hello.gif").default}
            alt="I just want to say hi 😢"
          />
        </Col>
        <Col className="welcome-intro-col">
          <Row>
            <Col>
              <p className="welcome-im">Hello! I'm</p>
              <p className="welcome-name">Michiko Young Go</p>
              {/* <p className="welcome-email">michikogo98@gmail.com</p> */}
              <p className="welcome-paragraph">
                Hey you! <br /> I am a software developer that focuses on
                fullstack web development and sometimes mobile development, on
                my free time I love exploring what the world is there to offer.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WelcomeContent;
