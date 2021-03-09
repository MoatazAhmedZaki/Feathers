import React from "react";
import "../../stylesheets/ChooseUs.css";
import { Container, Row, Col } from "react-bootstrap";
export default function ChooseUs({ text }) {
  return (
    <Container className="py-5 text-center ">
      <h3 className=" py-5"> {text.Choose}</h3>
      <Row className="py-5">
        <Col lg={3} md={6} sm={12} className="mx-auto icon-card">
          <div className="circle-icon d-flex justify-content-center align-items-center">
            <img
              src={require("../../imgs/icon1.png")}
              className="img-fluid mx-auto"
              alt="Finest-Quality"
            />
          </div>

          <p className="icon-card-title pt-5"> {text.FreeShipping}</p>

          <p className="icon-card-prag">{text.FreeShippingDes} </p>
        </Col>

        <Col lg={3} md={6} sm={12} className="mx-auto icon-card">
          <div className="circle-icon d-flex justify-content-center align-items-center">
            <img
              src={require("../../imgs/icon2.png")}
              className="img-fluid mx-auto"
              alt="Finest-Quality"
            />
          </div>

          <p className="icon-card-title pt-5"> {text.EasyPayments}</p>

          <p className="icon-card-prag">{text.EasyPaymentsDes} </p>
        </Col>
        <Col lg={3} md={6} sm={12} className="mx-auto icon-card">
          <div className="circle-icon d-flex justify-content-center align-items-center">
            <img
              src={require("../../imgs/icon3.png")}
              className="img-fluid mx-auto"
              alt="Finest-Quality"
            />
          </div>

          <p className="icon-card-title pt-5"> {text.MoneyBackGuarantee}</p>

          <p className="icon-card-prag">{text.MoneyBackGuaranteeDes}</p>
        </Col>
        <Col lg={3} md={6} sm={12} className="mx-auto icon-card">
          <div className="circle-icon d-flex justify-content-center align-items-center">
            <img
              src={require("../../imgs/icon4.png")}
              className="img-fluid mx-auto"
              alt="Finest-Quality"
            />
          </div>

          <p className="icon-card-title pt-5"> {text.FinestQuality}</p>

          <p className="icon-card-prag">{text.FinestQualityDes}</p>
        </Col>
      </Row>
    </Container>
  );
}
