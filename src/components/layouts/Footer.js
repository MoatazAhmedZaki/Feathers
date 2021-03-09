import { Container, Row, Col } from "react-bootstrap";
import "../../stylesheets/Footer.css";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import { SignInMenu } from "../../store/actions/Menu";

import { connect } from "react-redux";

import { Formik, Form } from "formik";

import * as Yup from "yup";

const SupcribeSchema = Yup.object().shape({
  Email: Yup.string()
    .min(8, "Your email must content Minimum eight characters")
    .max(50, "Too Long!")
    .required("Please enter an Email")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
      "Your email must be in email format"
    ),
});
const text = require("../../localization/Footer.json");

class Footer extends Component {
  FetchLang = () => {
    if (this.props.lan === "ar") {
      this.setState({ text: text.AR });
    } else if (this.props.lan === "en") {
      this.setState({ text: text.EN });
    }
  };

  componentWillMount() {
    this.FetchLang();

  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }

  

  render() {
    return (
      <footer
        className={this.state.text.Lang === "ar" ? " text-right" : "text-left"}
      >
        <div className=" mx-auto">
          <Container fluid>
            <Row>
              <Col lg="auto" md={12} sm={12} className=" mx-auto">
                <h3>{this.state.text.Help}</h3>

                <ul>
                  
                  <li>
                    <Link to="/ShippingAndDelivery">
                      {this.state.text.ShippingAndDelivery}
                    </Link>
                  </li>
                  <li>
                    <Link to="/PaymentOptions">
                      {this.state.text.PaymentOptions}
                    </Link>
                  </li>

                  <li>
                    <Link to="/RefundPolicy">
                      {this.state.text.RefundPolicy}
                    </Link>
                  </li>

                </ul>
              </Col>
              <Col lg="auto" md={12} sm={12} className=" mx-auto">
                <h3> {this.state.text.INFORMATION}</h3>

                <ul>
                  <li>
                    <Link to="/GiftCards">
                      {this.state.text.GiftCards}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">
                     
                      {this.state.text.FindAStore}
                    </Link>
                  </li>
               
                  <li>
                    <button
                      style={{
                        background: "transparent",
                        width: "fit-content",
                        height: "fit-content",
                        color: "white",
                        border: "none",
                        padding: 0,
                      }}
                      onClick={this.props.SignInMenu}
                    >
                      
                      {this.state.text.BacomeAMember}
                    </button>
                  </li>
                  <li>
                    <Link to="/ContactUs">
                      
                      {this.state.text.Sitefeedback}
                    </Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy">
                      {this.state.text.TermsAndConditions}
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col lg="auto" md={12} sm={12} className=" mx-auto">
                <h3>{this.state.text.CONTACT}</h3>

                <ul>
                  <li>
                  Company@info.com
                  
                  </li>
                  <li>Hotline: +0000 00 00 00000
                  </li>
                </ul>
              </Col>

              <Col lg="auto" md={12} sm={12} className=" mx-auto">
                <ul>
                  <Formik
                    initialValues={{
                      Email: "",
                    }}
                    validationSchema={SupcribeSchema}
                    onSubmit={(values, actions) => {
                      actions.resetForm();
                     
                    }}
                  >
                    {(FormikProps) => (
                      <li className=" mb-3">
                        <Form className="mx-auto">
                          <input
                            type="text"
                            name="Email"
                            id="Email"
                            onChange={FormikProps.handleChange("Email")}
                            value={FormikProps.values.Email}
                            onBlur={FormikProps.handleBlur}
                            required
                            placeholder={this.state.text.EnterEmail}
                          />

                          <button type="submit">
                            {this.state.text.Subscribe}{" "}
                          </button>
                        </Form>
                        {FormikProps.touched.Email &&
                        FormikProps.errors.Email ? (
                          <small className="text-danger px-2 pt-2">
                            {FormikProps.touched.Email &&
                              FormikProps.errors.Email}
                          </small>
                        ) : null}

                       

                       
                      </li>
                    )}
                  </Formik>

                
                  <li className=" mb-3">
                    <Link to="/">
                      <Row>
                        <img
                          src={require("../../imgs/itunes-icon.png")}
                          style={{width:"205px" ,height:"65px"}}
                          className="img-fluid mx-auto"
                          alt="google-play-badge"
                        />
                      </Row>
                    </Link>
                  </li>
                  <li className=" mb-3">
                    <Link to="/">
                      <Row>
                        <img
                          src={require("../../imgs/google-play-badge.png")}
                          className="img-fluid mx-auto"
                          alt="google-play-badge"
                        />
                      </Row>
                    </Link>
                  </li>
                </ul>

                <div className="text-center footer-icons d-flex justify-content-around px-2 mx-auto">
                  <a href="www.facebook.com">
                    <i className="fab fa-facebook-f  "></i>
                  </a>
                  <a href="www.instaram.com">
                    <i className="fab fa-instagram  "></i>
                  </a>
                  <a href="www.youtube.com">
                    <i className="fab fa-youtube   "></i>
                  </a>

                  <a href="www.twitter.com">
                    <i className="fab fa-twitter  "></i>
                  </a>
                </div>
              </Col>
            </Row>
            <p className="text-center py-3">
              DEVELOP BY MOATAZ - 2020 ALL RIGHTS RESERVED.
            </p>
          </Container>
        </div>
      </footer>
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

const mapDispatchToProps = (dispatch) => {
  return {
    SignInMenu: () => {
      dispatch(SignInMenu());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
