import React, { Component } from "react";
import "../../stylesheets/MyOrdersitem.css";
import { Row, Col } from "react-bootstrap";
export default class MyOrdersitem extends Component {
  render() {
    return (
      <div className="orderHistoryItem ">
        <div className="">
          <div className=" d-flex justify-content-between w-100 ">
            <div className="w-75">

              
              <h2>
                Order NO. <span className="mx-3">{this.props.info}</span>
              </h2>
              <Row>
                <Col md={4} xs={12}>
                  <p>
                    Total <span>20</span>
                  </p>
                </Col>
                <Col md={4} xs={12}>
                  <p>
                    QTY. <span>2</span>
                  </p>
                </Col>
                <Col md={4} xs={12}>
                  <p>
                    {" "}
                    <i class="fas fa-clock"></i> <span> 12 am</span>
                  </p>
                </Col>
              </Row>
            </div>

            <div className=" text-center ">
              <p className="history-type my-2  mx-auto px-2  "> status</p>
              <a href="/Order/id" className="order-details-btn ">Details</a >
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
