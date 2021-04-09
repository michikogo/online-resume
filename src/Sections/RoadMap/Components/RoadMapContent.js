import { Row, Col } from "react-bootstrap";

import RoadMapTimeline from "./RoadMapTimeline";

const RoadMapContent = ({ details }) => {
  return (
    <>
      <Row>
        <Col className="roadmap-title-row">
          <span className="roadmap-title">Road Map</span>
        </Col>
      </Row>
      <Row className="roadmap-row">
        <RoadMapTimeline details={details} />
      </Row>
    </>
  );
};

export default RoadMapContent;
