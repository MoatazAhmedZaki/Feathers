import React, { Component } from "react";
import { Row, Col} from "react-bootstrap";
import "../../stylesheets/MyNotificationsItem.css";
export default class MyNotificationsItem extends Component {
  render() {
    return (
      <div className=" MyNotificationsItem">
       

        <Row>
          <Col lg={8} md={8} xs={12} className="pt-2">
            <h2>Order NO. #{this.props.info} is shipped </h2>
           <p>Your order on your way to you</p>

          </Col>

     <Col lg={4} md={4} xs={12}>
            {" "}
            <p className=" pt-2">
              {" "}
              <i class="fas fa-clock"></i> <span> 1/{this.props.info}/2020</span>
            </p>
          </Col>
        </Row>
        
             
        <hr />
      </div>
    );
  }
}
