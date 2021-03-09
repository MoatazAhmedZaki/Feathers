import React, { Component } from "react";
import { Container, Row, Col, Button, Tab, Nav } from "react-bootstrap";
import "../../stylesheets/ShoppingCart2.css";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import * as Yup from "yup";
import { CustomInput } from "reactstrap";

import { connect } from "react-redux";
import { UserSignIn } from "../../store/actions/authActions";
import { NotVerified } from "../../store/actions/authActions";
const text = require("../../localization/ShoppingCart2.json");

const SignInSchema = Yup.object().shape({
  UserName: Yup.string()
    .min(6, "input value must be between 6 and 50 or more character")
    .max(50, "input value must be between 6 and 50 or more character")

    .required("Phone number or email")
    .matches(
      /^[A-Za-z0-9_.-@]+$/,
      "Please enter a valid phone number or email "
    ),
  Password: Yup.string()
    .min(8, "Your password must content Minimum eight characters")
    .max(50, "Too Long Pro!")
    .required("Please enter a Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Your password must content Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
});
const SignUpSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(6, "Your name must be between 6 and 30 characters")
    .max(30, "Your name must be between 6 and 30 characters")
    .required("Please enter a name")
    .matches(
      /^[A-Za-z0-9]+$/,
      "Your name must be composed only with letter and numbers"
    ),
  Phone: Yup.string()
    .min(4, "Your number must be between 4 and 16 characters")
    .max(16, "Your number must be between 4 and 16 characters")
    .required("Please enter a Phone")
    .matches(/^[0-9]+$/, "Your phone must be composed only with numbers"),
  Email: Yup.string()
    .min(8, "Your email must content Minimum eight characters")
    .max(50, "Too Long!")
    .required("Please enter an Email")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
      "Your email must be in email format"
    ),
  BirthDate: Yup.date().required("Please enter a Birth Date"),

  Gender: Yup.string().required("Please enter a Gender"),

  Password: Yup.string()
    .min(8, "Your password must content Minimum eight characters")
    .max(50, "Too Long Pro!")
    .required("Please enter a Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Your password must content Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  ConfirmPassword: Yup.string()
    .required("Please enter a password confirmation")
    .oneOf(
      [Yup.ref("Password"), null],
      "The password confirmation does not match password"
    ),

  termsOfService: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

class ShoppingCart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
      text: "",
      Shipping: "",
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
    this.FetchLang();
  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container className="shoppingcart2">
        <Row>
          <Col lg={8} md={12} sm={12} className="right-border my-5">
            {this.props.user.user ? (
              this.state.text.Lang === "en" ? (
                <div>
                  <h1 className="d-flex"> shipping to </h1>

                  <h4 className="d-flex">Name: User Name</h4>
                  <h4 className="d-flex">Phone : User Phone</h4>
                  <h4 className="d-flex">Email : User Email</h4>
                </div>
              ) : (
                <div>
                  <h1 className="d-flex"> معلومات العميل </h1>

                  <h4 className="d-flex">الاسم : اسم العميل</h4>
                  <h4 className="d-flex">التلفون : رقم العميل</h4>
                  <h4 className="d-flex">البريد الاكتروني : بريد العميل</h4>
                </div>
              )
            ) : (
              <Tab.Container id="sub-menu" defaultActiveKey="first1">
                <Nav
                  variant="pills"
                  className="justify-content-start   align-items-center  main-menu"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first1">SIGN UP</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second2">LOG IN </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="second3" className="mymenu mx-4">
                      Guest
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first1">
                    <div>
                      <h3 className="text-center ">{this.state.text.Create}</h3>

                      <Formik
                        initialValues={{
                          FullName: "",
                          Phone: "",
                          Email: "",
                          BirthDate: "",
                          Gender: "",
                          Password: "",
                          ConfirmPassword: "",
                          termsOfService: false,
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={(values, actions) => {
                          actions.resetForm();
                        }}
                      >
                        {(FormikProps) => (
                          <Form>
                            <div className="px-4">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="FullName"
                                  id="FullName"
                                  onChange={FormikProps.handleChange(
                                    "FullName"
                                  )}
                                  value={FormikProps.values.FullName}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="FullName"
                                >
                                  {this.state.text.FullName}
                                </label>
                                {FormikProps.touched.FullName &&
                                FormikProps.errors.FullName ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.FullName &&
                                      FormikProps.errors.FullName}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Phone"
                                  id="Phone"
                                  onChange={FormikProps.handleChange("Phone")}
                                  value={FormikProps.values.Phone}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="Phone"
                                >
                                  {this.state.text.Phone}
                                </label>
                                {FormikProps.touched.Phone &&
                                FormikProps.errors.Phone ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.Phone &&
                                      FormikProps.errors.Phone}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Email"
                                  id="Email"
                                  onChange={FormikProps.handleChange("Email")}
                                  value={FormikProps.values.Email}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="Email"
                                >
                                  {this.state.text.Email}
                                </label>
                                {FormikProps.touched.Email &&
                                FormikProps.errors.Email ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.Email &&
                                      FormikProps.errors.Email}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="BirthDate"
                                  id="BirthDate"
                                  onChange={FormikProps.handleChange(
                                    "BirthDate"
                                  )}
                                  value={FormikProps.values.BirthDate}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="BirthDate"
                                >
                                  {this.state.text.BirthDate}
                                </label>
                                {FormikProps.touched.BirthDate &&
                                FormikProps.errors.BirthDate ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.BirthDate &&
                                      FormikProps.errors.BirthDate}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <select
                                  className="form-control"
                                  id="Gender"
                                  name="Gender"
                                  onChange={FormikProps.handleChange("Gender")}
                                  value={FormikProps.values.Gender}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                >
                                  <option value="" hidden />
                                  <option
                                    value="Male"
                                    label={this.state.text.Male}
                                  />
                                  <option
                                    value="female"
                                    label={this.state.text.Female}
                                  />
                                </select>
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="Gender"
                                >
                                  {this.state.text.Gender}
                                </label>

                                {FormikProps.touched.Gender &&
                                FormikProps.errors.Gender ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.Gender &&
                                      FormikProps.errors.Gender}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="Password"
                                  name="Password"
                                  onChange={FormikProps.handleChange(
                                    "Password"
                                  )}
                                  value={FormikProps.values.Password}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="Password"
                                >
                                  {this.state.text.Password}
                                </label>
                                {FormikProps.touched.Password &&
                                FormikProps.errors.Password ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.Password &&
                                      FormikProps.errors.Password}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="ConfirmPassword"
                                  name="ConfirmPassword"
                                  onChange={FormikProps.handleChange(
                                    "ConfirmPassword"
                                  )}
                                  value={FormikProps.values.ConfirmPassword}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="ConfirmPassword"
                                >
                                  {this.state.text.ConfirmPassword}
                                </label>
                                {FormikProps.touched.ConfirmPassword &&
                                FormikProps.errors.ConfirmPassword ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.ConfirmPassword &&
                                      FormikProps.errors.ConfirmPassword}
                                  </small>
                                ) : null}
                              </div>
                            </div>

                            <Row className="pb-4">
                              <Col xs={12} className="text-center my-2">
                                <CustomInput
                                  // onChange={this.handlesignedbox}
                                  type="checkbox"
                                  id="termsOfService"
                                  label={this.state.text.Terms}
                                  name="termsOfService"
                                  onChange={FormikProps.handleChange(
                                    "termsOfService"
                                  )}
                                  value={FormikProps.values.termsOfService}
                                  required
                                />
                                <small className="text-danger px-2 pt-2">
                                  {FormikProps.touched.termsOfService &&
                                    FormikProps.errors.termsOfService}
                                </small>
                              </Col>
                            </Row>
                            <Col sm={8} className="text-center  mx-auto  mb-3">
                              <button className="signinbtn" type="submit">
                                {this.state.text.SignUp}
                              </button>
                            </Col>
                          </Form>
                        )}
                      </Formik>

                      <Col sm={8} className="text-center mx-auto   my-3">
                        <button className="fbbtn">
                          <i className="fab fa-instagram px-3"></i>
                          {this.state.text.Insta}
                        </button>
                      </Col>

                      <Col sm={8} className="text-center mx-auto my-3">
                        <button className="gmbtn ">
                          <i className="fab fa-twitter px-3"></i>
                          {this.state.text.Twitter}
                        </button>
                      </Col>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second2">
                    <div>
                      <h3 className="text-center ">
                        {this.state.text.LetsSignYouIn}
                      </h3>
                      <p className="text-center pb-3">
                        {this.state.text.Welcome}
                      </p>

                      <Formik
                        initialValues={{
                          UserName: "",
                          Password: "",
                        }}
                        validationSchema={SignInSchema}
                        onSubmit={(values, actions) => {
                          actions.resetForm();
                        }}
                      >
                        {(FormikProps) => (
                          <Form>
                            <div className="px-4">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="UserName"
                                  id="UserName"
                                  onChange={FormikProps.handleChange(
                                    "UserName"
                                  )}
                                  value={FormikProps.values.UserName}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="UserName"
                                >
                                  {this.state.text.PhoneOrEmail}
                                </label>
                                {FormikProps.touched.UserName &&
                                FormikProps.errors.UserName ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.UserName &&
                                      FormikProps.errors.UserName}
                                  </small>
                                ) : null}
                              </div>

                              <div className="form-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="Password"
                                  name="Password"
                                  onChange={FormikProps.handleChange(
                                    "Password"
                                  )}
                                  value={FormikProps.values.Password}
                                  onBlur={FormikProps.handleBlur}
                                  required
                                />
                                <label
                                  className="form-control-placeholder"
                                  htmlFor="Password"
                                >
                                  {this.state.text.Password}
                                </label>
                                {FormikProps.touched.Password &&
                                FormikProps.errors.Password ? (
                                  <small className="text-danger px-2 pt-2">
                                    {FormikProps.touched.Password &&
                                      FormikProps.errors.Password}
                                  </small>
                                ) : null}
                              </div>
                            </div>

                            <Row className="pb-4">
                              <Col xs={6} className="text-center my-2">
                                <CustomInput
                                  onChange={this.handlesignedbox}
                                  type="checkbox"
                                  id="signedbox"
                                  label={this.state.text.RememberMe}
                                />
                              </Col>
                            </Row>
                            <Col sm={8} className="text-center  mx-auto  mb-3">
                              <button className="signinbtn" type="submit">
                                {this.state.text.SignIn}
                              </button>
                            </Col>
                          </Form>
                        )}
                      </Formik>

                      <Col sm={8} className="text-center mx-auto   mb-3 mt-1">
                        <button className="fbbtn">
                          <i className="fab fa-instagram px-3"></i>
                          {this.state.text.Insta}
                        </button>
                      </Col>

                      <Col sm={8} className="text-center mx-auto my-3">
                        <button className="gmbtn ">
                          <i className="fab fa-twitter px-3"></i>
                          {this.state.text.Twitter}
                        </button>
                      </Col>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second3">
                    <h3>3</h3>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            )}
          </Col>

          <Col lg={4} md={12} sm={12}>
            <h6 className="text-center py-3">
              {this.state.text.Deliverymethod}
            </h6>

            <Row className="   align-items-center px-1 text-center  pt-5">
              {/* {[1,2].map((method) => (
                    <Col>
                      <label>
                        <input
                          type="radio"
                          name="ShippingMethoud"
                          value={method}
                        
                        />
                        <p>method number {method}</p>
                      </label>
                    </Col>
                  ))
               } */}

              <Col>
                <label>
                  <input type="radio" name="ShippingMethoud" value="2" />
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/fed.png")}
                    alt="Generic placeholder"
                  />
                </label>
              </Col>
              <Col>
                <label>
                  <input type="radio" name="ShippingMethoud" value="3" />
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/fed.png")}
                    alt="Generic placeholder"
                  />
                </label>
              </Col>
            </Row>

            <Row>
              {/* {!this.props.CartProducts.shipping ?  */}

              {/* {  this.props.CartProducts.shipping_id !== 0 
                ? this.props.CartProducts.shipping.options.map((option) => (
                    <Col>
                      <label>
                        <input
                          type="radio"
                          name="ShippingOption"
                          value={option.id}
                          onChange={() =>
                            this.props.SelectedShippingOption(option.id)
                          }
                        />
                        <p>{option.name}</p>
                      </label>
                    </Col>
                  ))
                : null} */}
              {/* :null} */}
            </Row>

            <hr className="mx-5" />

            <h6 className="text-center py-3">
              {/* Delivery method */}
              {this.state.text.PaymentMethouds}
            </h6>

            <Row className="   align-items-center px-1 text-center  pt-5">
              {/* {this.props.PaymentMethouds
                ? this.props.PaymentMethouds.rows.map((method) => (
                    // console.log("img",img)
                    <Col>
                      <label>
                        <input
                          type="radio"
                          name="PaymentMethoud"
                          value={method.id}
                          onChange={() => this.props.SelectedPayment(method.id)}
                        />
                        <p>{method.trans.name}</p>
                      </label>
                    </Col>
                  ))
                : null} */}

              <Col>
                <label>
                  <input type="radio" name="ShippingMethoud" value="2" />
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/fed.png")}
                    alt="Generic placeholder"
                  />
                </label>
              </Col>
              <Col>
                <label>
                  <input type="radio" name="ShippingMethoud" value="3" />
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/fed.png")}
                    alt="Generic placeholder"
                  />
                </label>
              </Col>
            </Row>

            <hr className="mx-5" />

            <h6 className="text-center py-3">
              {/* Your Cart */}

              {this.state.text.YourCart}
            </h6>

            <Row>
              {[1, 2].map((product) => (
                <Col
                  sm={12}
                  className=" justify-content-between align-items-center py-2 d-flex "
                >
                  <div
                    style={{ width: 50, height: 50 }}
                    className="rounded-circle "
                  >
                    <img
                      src={require("../../imgs/item.png")}
                      className="h-100 w-100 rounded-circle"
                      alt="Product Name"
                    />
                  </div>

                  <div>
                    <p>Product Name</p>

                    <p>Product {product}</p>
                  </div>
                  <div>
                    <div>
                      <p>89.99 AED</p>
                    </div>
                  </div>
                </Col>
              ))}
             
            </Row>

            <div className="py-4 text-center">
              <p className="total-cost2 text-center mx-auto pt-1">
                {this.state.text.TotalCost}

                <span className="px-2">
                  159,98 AED
                </span>
              </p>
            </div>

         
            {this.props.Error ? (
              <div className="text-center mx-auto mb-4">
                <small className="text-danger   ">
                      please choose all required options
                </small>
              </div>
            ) : null}
            <Row className="text-center">
              <Col md={6} sm={12}>
                <Link to="/Products/All" style={{ color: "black" }}>
                  <Button className="con-btn  mb-3 py-3">
                    {/* Continue shopping */}
                    {this.state.text.ContinueShopping}
                  </Button>
                </Link>
              </Col>
              <Col md={6} sm={12}>
                <Button
                  className="pro-btn  mb-3 py-3 "
                  onClick={
                    // () => this.props.fun(this.state.Gift)
                    this.props.fun
                  }
                >
                  {/* Proceed to payment */}
                  {this.state.text.ProceedToPayment}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
    user: state.auth,
    user2: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserSignIn: (user) => {
      dispatch(UserSignIn(user));
    },
    NotVerified: (user) => {
      dispatch(NotVerified(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart2);
