import Hexagon from "react-hexagon";
import { Col, Row } from "react-bootstrap";

const HoneyComb = ({ row, handleEnter, section }) => {
  return (
    <Row className="justify-content-sm-center skills-honeyComb-row">
      {row.map((item) => (
        <Col
          key={item.id}
          xs={3}
          className="skills-honeyComb-col"
          onMouseEnter={() => handleEnter(true, item.id, section)}
          onMouseLeave={() => handleEnter(false, item.id, section)}
        >
          <Hexagon
            className="skills-honeyComb-image"
            style={{ stroke: "#13B4CD" }}
            backgroundImage={
              require(`../../../Assets/Logo/${item.image}`).default
            }
            // href="http://espen.codes/"
          />
        </Col>
      ))}
    </Row>
  );
};

export default HoneyComb;
