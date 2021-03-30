import React from "react";
import Hexagon from "react-hexagon";
import { Col, Row } from "react-bootstrap";

const ThreeComb = ({ data1, data2, data3 }) => {
  return (
    <Row className="justify-content-sm-center" style={{ marginTop: "-15px" }}>
      {data1 && (
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
            backgroundImage={
              require(`../../../Assets/Logo/${data1.image}`).default
            }
            href="http://espen.codes/"
          />
        </Col>
      )}
      {data2 && (
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
            backgroundImage={
              require(`../../../Assets/Logo/${data2.image}`).default
            }
            href="http://espen.codes/"
          />
        </Col>
      )}
      {data3 && (
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
            backgroundImage={
              require(`../../../Assets/Logo/${data3.image}`).default
            }
            href="http://espen.codes/"
          />
        </Col>
      )}
    </Row>
  );
};

export default ThreeComb;
