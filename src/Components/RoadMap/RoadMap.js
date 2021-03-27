import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { job } from "../../Assets/index";

export const RoadMap = () => {
  const [details, setDetails] = useState([
    {
      id: 1,
      image: "working.png",
      position: "Program Aid",
      company: "Morristown Adult Day Care",
      date: "June 2016 - July 2016",
      location: "Parsippany, NJ, USA",
    },
    {
      id: 2,
      image: "working.png",
      position: "Intern Web Developer",
      company: "BotBrosAI",
      date: "January 2019 - May 2019",
      location: "San Juan City, Metro Manila, Philippines",
    },
    {
      id: 3,
      image: "graduate.png",
      position: "BS Computer Science",
      company: "De La Salle University-Manila",
      date: "September 2016 - February 2021",
      location: "Taft, Manila, Philippines",
    },
  ]);
  return (
    <Container fluid className="roadmap-background">
      <Row>
        <Col className="roadMap-title">Road Map</Col>
      </Row>
      <Row className="roadmap-row">
        <Col className="roadmap-line">
          {details.map((detail) => (
            <Row key={detail.id} className="roadmap-detail">
              <Col sm={2}>
                <Image
                  src={require(`../../Assets/Image/${detail.image}`).default}
                  className="roadmap-detail-icon"
                />
              </Col>
              <Col className="roadmap-detail-description">
                <div>
                  <span className="roadmap-detail-position">
                    {detail.position}
                  </span>
                  , {detail.company}
                </div>
                <div>
                  {detail.date} | {detail.location}
                </div>
              </Col>
            </Row>
          ))}
          <Row className="roadmap-detail">
            <Col sm={2}>
              <Image src={job} className="roadmap-detail-icon" />
            </Col>
            <Col className="roadmap-detail-description">
              <div>
                <span className="roadmap-detail-position">
                  Looking for Jobs
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
