import "./index.css";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { job } from "../../Assets/index";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GraduationSVG from "./Components/GraduationSVG";
import WorkSVG from "./Components/WorkSVG";
import FindingSVG from "./Components/FindingSVG";

const RoadMap = () => {
  const [details, setDetails] = useState([
    {
      id: 1,
      image: <WorkSVG />,
      position: "Program Aid",
      company: "Morristown Adult Day Care",
      date: "June 2016 - July 2016",
      location: "Parsippany, NJ, USA",
    },
    {
      id: 2,
      image: <WorkSVG />,
      position: "Intern Web Developer",
      company: "BotBrosAI",
      date: "January 2019 - May 2019",
      location: "San Juan City, Metro Manila, Philippines",
    },
    {
      id: 3,
      image: <GraduationSVG />,
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
        <VerticalTimeline>
          {details.map((detail) => (
            <VerticalTimelineElement
              key={detail.id}
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // contentArrowStyle={{
              //   borderRight: "7px solid  rgb(33, 150, 243)",
              // }}
              // date="2011 - present"
              iconStyle={{ background: "#F68375", color: "#fff" }}
              icon={detail.image}
            >
              {/* <h3 className="vertical-timeline-element-title">
                {detail.position}, {detail.company}
              </h3> */}
              {/* <h4 className="vertical-timeline-element-subtitle">
                {detail.date} | {detail.location}
              </h4> */}
              <p>
                {detail.position}, {detail.company}
              </p>
              <p>
                {detail.date} | {detail.location}
              </p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{
            //   borderRight: "7px solid  rgb(33, 150, 243)",
            // }}
            iconStyle={{ background: "#F68375", color: "#fff" }}
            icon={<FindingSVG />}
          >
            {/* <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3> */}
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>Future</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Row>
    </Container>
  );
};

export default RoadMap;
{
  /* <VerticalTimelineElement
              key={detail.id}
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // contentArrowStyle={{
              //   borderRight: "7px solid  rgb(33, 150, 243)",
              // }}
              // date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkSVG />}
            >
              <h3 className="vertical-timeline-element-title">
                {detail.position}, {detail.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {detail.date} | {detail.location}
              </h4> 
              <p>
                {detail.position}, {detail.company}
              </p>
              <p>
                {detail.date} | {detail.location}
              </p>
            </VerticalTimelineElement>  */
}
