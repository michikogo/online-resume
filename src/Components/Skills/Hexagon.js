import Hexagon from "react-hexagon";
import { Col, Row } from "react-bootstrap";

const TwoComb = ({ row }) => {
  return (
    <Row className="justify-content-sm-center skills-hexagon-row">
      {row.map((item) => (
        <Col key={item.id} sm={3} className="skills-hexagon-col">
          <Hexagon
            className="skills-image"
            style={{ stroke: "#13B4CD" }}
            backgroundImage={require(`../../Assets/Logo/${item.image}`).default}
            // href="http://espen.codes/"
          />
        </Col>
      ))}
    </Row>
  );
};

export default TwoComb;
