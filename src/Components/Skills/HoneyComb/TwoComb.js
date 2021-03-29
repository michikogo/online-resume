import React from "react";
import { Col, Row } from "react-bootstrap";
import Hexagon from "react-hexagon";

const TwoComb = () => {
  return (
    <Row className="justify-content-sm-center" style={{ marginTop: "-15px" }}>
      <Col
        sm={{ span: 3 }}
        style={{
          // marginLeft: "59px",
          // marginTop: "-22px",
          padding: "0px 1vh",
        }}
      >
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>
      <Col
        sm={3}
        style={{
          // marginLeft: "59px",
          // marginTop: "-22px",
          padding: "0px 1vh",
        }}
      >
        <Hexagon
          style={{ stroke: "#42873f" }}
          backgroundImage="img/red-panda.jpg"
          href="http://espen.codes/"
        />
      </Col>
    </Row>
  );
};

export default TwoComb;
