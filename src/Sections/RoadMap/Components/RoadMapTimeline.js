import "./timeline.css";
import { Row, Col, Image } from "react-bootstrap";
import FindingSVG from "./SVG/FindingSVG";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadMapTimeline = ({ details }) => {
  return (
    <div>
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
              <span className="roadmap-detail-position">{detail.position}</span>
              <span className="roadmap-detail-company">, {detail.company}</span>
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
                          require("../../../Assets/Image/check-mark.png")
                            .default
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
    </div>
  );
};

export default RoadMapTimeline;
