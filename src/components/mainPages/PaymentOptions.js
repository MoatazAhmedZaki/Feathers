import React, { Component } from "react";

import { Col, Container, Row } from "react-bootstrap";


import { connect } from "react-redux";

const text = require("../../localization/PaymentOptions.json");

class PaymentOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  FetchLang = () => {
    if (this.props.lan === "ar") {
      this.setState({ text: text.AR });
    } else if (this.props.lan === "en") {
      this.setState({ text: text.EN });
    }
  };

 
  componentWillMount() {
    window.scrollTo(0, 0);
    this.FetchLang();

  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }
  render() {
    return (
      <div style={{ minHeight: "60vh" }}>
        <Container
          className={
            "py-5 " +
            (this.state.text.Lang === "ar" ? " text-right" : "text-left")
          }
          style={{ color: "#8f8f8f" }}
        >
          <Row className="pb-5">
            <Col lg={12} md={12} sm={12}>
              <h1 className="pb-5 px-5 pt-2" style={{ color: "black" }}>
                {this.state.text.PaymentOptions}{" "}
              </h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps)(PaymentOptions);
