import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import GraduationSVG from "./Components/GraduationSVG";
import WorkSVG from "./Components/WorkSVG";
import FindingSVG from "./Components/FindingSVG";

const RoadMap = () => {
  const [details] = useState([
    {
      id: 3,
      image: <GraduationSVG />,
      position: "BS Computer Science",
      company: "De La Salle University-Manila",
      date: "September 2016 - February 2021",
      location: "Taft, Manila, Philippines",
      description: [null],
    },
    {
      id: 2,
      image: <WorkSVG />,
      position: "Intern Web Developer",
      company: "BotBrosAI",
      date: "January 2019 - May 2019",
      location: "San Juan City, Metro Manila, Philippines",
      description: [
        "Developed websites such as e-commerce and dashboards for admin use.",
        "React, redux and laravel were utilized for the projects each project had an scrum agile methodology, such as daily scrum and planning poker.",
      ],
    },
    {
      id: 1,
      image: <WorkSVG />,
      position: "Program Aid",
      company: "Morristown Adult Day Care",
      date: "June 2016 - July 2016",
      location: "Parsippany, NJ, USA",
      description: [
        "Assisted and entertained elderly with their everyday needs, namely preparing food, daily check ups and daily exercise.",
        "Occasionally went on field trips with elders to show them around the county.",
      ],
    },
  ]);

  return (
    <Container fluid className="roadmap-background">
      <Row>
        <Col className="roadmap-title-row">
          <span className="roadmap-title">Road Map</span>
        </Col>
      </Row>
      <Row className="roadmap-row">
        <VerticalTimeline>
          <VerticalTimelineElement
            lassName="vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight: "7px solid #a2ebf6",
            }}
            iconStyle={{ background: "#F68375", color: "#fff" }}
            icon={<FindingSVG />}
          >
            <div className="roadmap-detail-future">
              Currently Looking for Jobs
            </div>
          </VerticalTimelineElement>
          {details.map((detail) => (
            <VerticalTimelineElement
              key={detail.id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid #a2ebf6",
              }}
              iconStyle={{ background: "#F68375", color: "#fff" }}
              icon={detail.image}
            >
              {/* Date and Location */}
              <div className="roadmap-detail-date-location-p">
                <span className="roadmap-detail-date-location">
                  {detail.date} | {detail.location}
                </span>
              </div>
              {/* Position and Company */}
              <div className="roadmap-detail-p">
                <span className="roadmap-detail-position">
                  {detail.position}
                </span>
                <span className="roadmap-detail-company">
                  , {detail.company}
                </span>
              </div>
              {/* Description */}
              <div className="roadmap-detail-p">
                {detail.description[0] != null &&
                  detail.description.map((desc) => (
                    <Row key={desc}>
                      <Col xs={2} sm={1} className="roadmap-detail-image">
                        <Image
                          fluid
                          alt="check-mark"
                          src={
                            require("../../Assets/Image/check-mark.png").default
                          }
                          width="15"
                        />
                      </Col>
                      <Col>
                        <div className="roadmap-detail-description">{desc}</div>
                      </Col>
                    </Row>
                  ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Row>
    </Container>
  );
};

export default RoadMap;
