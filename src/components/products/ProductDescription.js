import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ProductDescription({text }) {
  return (
    <Row className="text-center py-5">
      <Col md={6} sm={12}>
        <img
          src={require("../../imgs/paper.png")}
          className="img-fluid mx-auto p-4"
          alt="Finest-Quality"
        />
        <h3>{text.Material}</h3>

        <p className="mb-0">Wallet in the uiKit line with a colorful print.</p>
        <p>
          Made of leather. wallet fits perfectly with jeans, pants or shorts.
        </p>
      </Col>

      <Col md={6} sm={12}>
        <img
          src={require("../../imgs/tools.png")}
          className="img-fluid mx-auto p-4"
          alt="Finest-Quality"
        />

        <h3>{text.Details}</h3>
        <p>Body: 98% leather - 2% cotton</p>

        <p>
          <i className="fas fa-recycle"></i>
          <i className="fas fa-biohazard"></i>
          <i className="fas fa-tshirt"></i>
        </p>
      </Col>
    </Row>
  );
}
