import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";

import { CustomInput } from "reactstrap";

import { Formik, Form } from "formik";

import * as Yup from "yup";


import "../../stylesheets/SignUp.css";

import { connect } from "react-redux";
import { UserSignIn } from "../../store/actions/authActions";
import { NotVerified } from "../../store/actions/authActions";
const text = require("../../localization/SignUp.json");

const SignUpSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(6, "Your name must be between 6 and 30 characters")
    .max(30, "Your name must be between 6 and 30 characters")
    .required("Please enter a name")
    .matches(
      /^[A-Za-z0-9 ]+$/,
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
  Country: Yup.string().required("Please enter a Country"),

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
      password: "",
      terms: "true",
      text: "",
      country: "",
    };
  }

  handlesignedbox = (e) => {
    if (e.target.checked) {
      this.setState({ terms: true });
    }
  };



  handlePassword = (e) => {
    this.setState({ password: e.target.value });
    // console.log(this.state);
  };

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
      <div>
        <h3 className="text-center ">{this.state.text.Create}</h3>

       

        <Formik
          initialValues={{
            FullName: "",
            Phone: "",
            Email: "",
            BirthDate: "",
            Gender: "",
            country: "",
            Password: "",
            ConfirmPassword: "",
            termsOfService: false,
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();


            this.props.handlverifyPhoneView()
          }}
        >
          {(FormikProps) => (
            <Form>
              <div className="px-4">
                <div className="form-group   ">
                  <input
                    type="text"
                    className="form-control "
                    name="FullName"
                    id="FullName"
                    onChange={FormikProps.handleChange("FullName")}
                    value={FormikProps.values.FullName}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder"
                    htmlFor="FullName"
                  >
                    {this.state.text.FullName}{" "}
                  </label>
                  {FormikProps.touched.FullName &&
                  FormikProps.errors.FullName ? (
                    <small className="text-danger px-2 pt-2  ">
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
                  <label className="form-control-placeholder" htmlFor="Phone">
                    {this.state.text.Phone}
                  </label>
                  {FormikProps.touched.Phone && FormikProps.errors.Phone ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Phone && FormikProps.errors.Phone}
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
                  <label className="form-control-placeholder" htmlFor="Email">
                    {this.state.text.Email}
                  </label>
                  {FormikProps.touched.Email && FormikProps.errors.Email ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Email && FormikProps.errors.Email}
                    </small>
                  ) : null}
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    name="BirthDate"
                    id="BirthDate"
                    onChange={FormikProps.handleChange("BirthDate")}
                    value={FormikProps.values.BirthDate}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder"
                    htmlFor="BirthDate"
                  >
                    {this.state.text.BirthDate}{" "}
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
                    <option value="Male" label={this.state.text.Male} />
                    <option value="female" label={this.state.text.Female} />
                  </select>
                  <label className="form-control-placeholder" htmlFor="Gender">
                    {this.state.text.Gender}
                  </label>

                  {FormikProps.touched.Gender && FormikProps.errors.Gender ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Gender && FormikProps.errors.Gender}
                    </small>
                  ) : null}
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    id="Country"
                    name="Country"
                    onChange={FormikProps.handleChange("Country")}
                    value={FormikProps.values.Country}
                    onBlur={FormikProps.handleBlur}
                    required
                  >
                    <option value="" hidden />
                    {/* <option value={1} label={this.state.text.Male} />
                    <option value={2} label={this.state.text.Female} /> */}
                    {["Cairo","Giza"].map((cont) => (
                          <option
                            key={cont}
                            value={cont}
                            label={cont}
                          />
                          // console.log("id" ,cont.id , "name" ,cont.trans.name)
                        ))
                     }
                  </select>
                  <label className="form-control-placeholder" htmlFor="Country">
                    {this.state.text.country}
                  </label>

                  {FormikProps.touched.Country && FormikProps.errors.Country ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Country &&
                        FormikProps.errors.Country}
                    </small>
                  ) : null}
                </div>
                {/* 
                {this.state.country?

this.state.country.map((cont) => (
                  // <option value={cont.id} label={cont.trans.name} />
                  console.log("id" ,cont.id , "name" ,cont.trans.name)

)):null} */}

                {/* 
                <div className="form-group">
                  <select
                    className="form-control"
                    id="Country"
                    name="Country"
                    onChange={FormikProps.handleChange("Country")}
                    value={FormikProps.values.Country}
                    onBlur={FormikProps.handleBlur}
                    required
                  >
                    <option value="" hidden />
                    {this.state.country?

this.state.country.map((cont) => (
                  <option value={cont.id} label={cont.trans.name} />

)):null}
                  </select>
                  <label className="form-control-placeholder" htmlFor="Country">
                    {this.state.text.country}
                  </label>

                  {FormikProps.touched.Country && FormikProps.errors.Country ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Country && FormikProps.errors.Country}
                    </small>
                  ) : null}
                </div> */}

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="Password"
                    onChange={FormikProps.handleChange("Password")}
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
                    onChange={FormikProps.handleChange("ConfirmPassword")}
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
                    onChange={FormikProps.handleChange("termsOfService")}
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

        {this.props.signin ? (
          <div className="d-flex justify-content-center">
            <p className="text-center  "> {this.state.text.Already}</p>

            <Button
              onClick={this.props.handleSignIn}
              variant="Forgot-password"
              className="p-0 px-2"
            >
              {this.state.text.SignIn}
            </Button>
          </div>
        ) : null}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
