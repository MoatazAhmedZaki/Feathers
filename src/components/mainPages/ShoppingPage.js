import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ShoppingCart from "./ShoppingCart";

import "../../stylesheets/ShoppingPage.css";
import ShoppingCart2 from "./ShoppingCart2";
import ShoppingCart3 from "./ShoppingCart3";

import { connect } from "react-redux";

const text = require("../../localization/ShoppingPage.json");

class ShoppingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: true,
      Delivery: false,
      checkout: false,
      text: "",
      ShippingMethouds: "",
      selectedVoucher: "",
      PaymentMethouds: "",
    };
  }

  proceedToCheckout1 = (Gift) => {

    this.setState({ shoppingCart: false, Delivery: true });
  };

  proceedToCheckout2 = () => {
    this.setState({
      shoppingCart: false,
      Delivery: false,
      checkout: true,
    });
  };

  back2 = (e) => {
    this.setState({
      shoppingCart: false,
      Delivery: true,
      checkout: false,
    });
  };

  FetchLang = () => {
    if (this.props.lan === "ar") {
      this.setState({ text: text.AR });
    } else if (this.props.lan === "en") {
      this.setState({ text: text.EN });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.FetchLang();
  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }

  proceedToCheckout3 = () => {
    this.props.history.push("/feathers");
  };

  render() {
    return (
      <div>
        <Container className="pt-5">
          <Row>
            {/* {console.log(this.props)} */}
            <Col
              lg={8}
              md={10}
              sm={12}
              className={
                "pb-3 " +
                (this.state.text.Lang === "ar" ? " text-right" : "text-left")
              }
            >
              <h2>{this.state.text.Shop} </h2>
            </Col>

            <Col lg={4} md={2} sm={12}>
              {/* <div className=" d-flex  justify-content-center align-content-center overflow-hidden pb-1">
                <div className="stage ">
                  <p className="active ">
                    <i className="fas fa-shopping-cart"></i>
                  </p>
                </div>


                <div className="stage">
                  <p className="">
                    <i className="fas fa-truck"></i>
                  </p>
                </div>
              </div> */}

              <div className="justify-content-between  align-items-center  d-flex  text-center overflow-hidden">
                <div className="stage ">
                  <p
                    className={
                      "mb-0  " + (this.state.shoppingCart ? "active" : "")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.5"
                      height="17.5"
                      viewBox="0 0 17.5 17.5"
                      className="payment-icons"
                    >
                      <g
                        id="prefix__noun_cart_2102832_4_"
                        data-name="noun_cart_2102832 (4)"
                        transform="translate(-6 -6)"
                      >
                        <path
                          id="prefix__Path_5"
                          d="M6.729 7.458h1.218L9.773 15.7a2.617 2.617 0 0 0-1.489 2.42 2.492 2.492 0 0 0 2.356 2.6h9.669a.729.729 0 1 0 0-1.458H10.64a1.06 1.06 0 0 1-.9-1.146 1.06 1.06 0 0 1 .9-1.147h9.669a.729.729 0 0 0 .686-.482l2.462-6.834a.729.729 0 0 0-.686-.976H9.711l-.466-2.1A.729.729 0 0 0 8.532 6h-1.8a.729.729 0 0 0 0 1.458zm15 2.676L19.8 15.51h-8.575l-1.191-5.375h11.7z"
                          className="prefix__cls-1"
                          data-name="Path 5"
                        />
                        <path
                          id="prefix__Path_6"
                          d="M19.074 50a.729.729 0 1 0 0 1.458H20A.729.729 0 1 0 20 50z"
                          className="prefix__cls-1"
                          data-name="Path 6"
                          transform="translate(-7.844 -27.958)"
                        />
                        <path
                          id="prefix__Path_7"
                          d="M37.526 50a.729.729 0 0 0 0 1.458h.926a.729.729 0 1 0 0-1.458z"
                          className="prefix__cls-1"
                          data-name="Path 7"
                          transform="translate(-19.569 -27.958)"
                        />
                      </g>
                    </svg>
                  </p>
                </div>
                <div className="w-100 line"></div>

                <div className="stage">
                  <p
                    className={"mb-0  " + (this.state.Delivery ? "active" : "")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="14.164"
                      viewBox="0 0 17 14.164"
                      className="payment-icons"
                    >
                      <path
                        id="prefix__noun_delivery_1665162"
                        d="M33.4 22.59H22.767a.708.708 0 0 0-.708.708v3.533h-2.117a.706.706 0 0 0-.589.315l-2.124 3.2a.708.708 0 0 0-.119.393v3.189a.708.708 0 0 0 .708.708h.039a2.468 2.468 0 0 0 4.887 0h4.318a2.468 2.468 0 0 0 4.887 0H33.4a.708.708 0 0 0 .708-.708V23.3a.708.708 0 0 0-.708-.71zm-14.874 8.36l1.809-2.693h1.734v4.287c-.028-.028-.059-.047-.088-.072-.07-.065-.14-.124-.215-.181l-.15-.1a2.017 2.017 0 0 0-.258-.134c-.1-.041-.1-.052-.16-.075a2.3 2.3 0 0 0-.295-.093c-.049-.013-.1-.028-.147-.039a2.362 2.362 0 0 0-.47-.049 2.326 2.326 0 0 0-.468.049.641.641 0 0 0-.15.039 2.258 2.258 0 0 0-.292.093c-.057.023-.111.049-.165.078a2.171 2.171 0 0 0-.24.132c-.054.034-.106.07-.16.109a2.479 2.479 0 0 0-.2.165c-.062.057-.067.052-.1.083zm1.77 4.393a1.065 1.065 0 0 1-1.062-1.062 1.313 1.313 0 0 1 .021-.214 1.062 1.062 0 0 1 2.083 0 1.189 1.189 0 0 1 .021.217 1.065 1.065 0 0 1-1.059 1.057zm9.211 0a1.065 1.065 0 1 1 1.034-1.292 1.189 1.189 0 0 1 .023.217 1.065 1.065 0 0 1-1.057 1.073zm2.238-2.127c-.023-.049-.054-.1-.083-.145s-.039-.078-.062-.114a2.887 2.887 0 0 0-.2-.258.432.432 0 0 1-.031-.041 2.488 2.488 0 0 0-.279-.258l-.085-.065a2.041 2.041 0 0 0-.233-.158l-.119-.065a1.9 1.9 0 0 0-.231-.112 1.361 1.361 0 0 0-.132-.049 2.3 2.3 0 0 0-.258-.072l-.124-.026a2.223 2.223 0 0 0-.8 0l-.121.026a2.344 2.344 0 0 0-.258.072.433.433 0 0 0-.129.049 2.558 2.558 0 0 0-.24.114l-.111.059a2.4 2.4 0 0 0-.258.173l-.065.047a2.559 2.559 0 0 0-.517.6l-.044.078c-.031.057-.067.111-.093.168h-3.786v-9.233h9.208v2.127h-4.96a.708.708 0 0 0 0 1.416h4.959v5.665z"
                        transform="translate(-17.11 -22.59)"
                      />
                    </svg>
                  </p>
                </div>

                <div className="w-100 line"></div>

                <div className="stage">
                  <p
                    className={"mb-0  " + (this.state.checkout ? "active" : "")}
                  >
                    {/* <i className="fas fa-truck"></i> */}

                    {/* <img
                    // width={50}
                    src={require("../../imgs/Layer.svg")}
                    className="logo-img "
                    alt="Finest-Quality"
                  /> */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.701"
                      height="13.001"
                      viewBox="0 0 22.701 13.001"
                      className="payment-icons "
                    >
                      <g
                        id="prefix__Layer_3"
                        data-name="Layer 3"
                        transform="translate(-1 -7.369)"
                      >
                        <path
                          id="prefix__Path_138"
                          d="M22.944 9.4h-2.883a.757.757 0 0 0-.757.757v.6h-1.271L15.892 8.6a4.2 4.2 0 0 0-5.948 0l-1.771 1.774H1.757a.757.757 0 0 0-.757.757v8.482a.757.757 0 0 0 .757.757h12.909a.757.757 0 0 0 .757-.757v-2.875h1.143a3.027 3.027 0 0 0 2.27 1.059h.439v.603a.757.757 0 0 0 .757.757h2.913a.757.757 0 0 0 .755-.757v-8.246a.757.757 0 0 0-.756-.754zM8.469 11.9h5.448v1.2h-1.968a1.816 1.816 0 0 0-1.513.84H2.513V11.9zm5.448 7H2.513v-3.487h7.7a1.816 1.816 0 0 0 1.733 1.294h1.967zm4.956-2.618a1.513 1.513 0 0 1-1.279-.7.757.757 0 0 0-.643-.355h-5.009a.31.31 0 1 1 0-.613h5a.757.757 0 0 0 0-1.513H15.43v-1.955a.757.757 0 0 0-.757-.757h-4.35l.7-.7a2.754 2.754 0 0 1 3.783 0l2.361 2.361a.757.757 0 0 0 .537.219h1.589v4.018zm3.314 1.362h-1.37v-6.733h1.37z"
                          data-name="Path 138"
                        />
                      </g>
                    </svg>
                  </p>
                </div>
              </div>

              {/* <button onClick={this.proceedToCheckout1}>ddvd</button> */}
            </Col>
          </Row>
        </Container>

        {this.state.shoppingCart ? (
          <ShoppingCart fun={this.proceedToCheckout1} text={this.state.text} />
        ) : this.state.Delivery ? (
          <ShoppingCart2 fun={this.proceedToCheckout2} text={this.state.text} />
        ) : (
          <ShoppingCart3
            fun={this.back2}
            Checkout={this.proceedToCheckout3}
            text={this.state.text}
          />
        )}
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

export default connect(mapStateToProps)(ShoppingPage);
