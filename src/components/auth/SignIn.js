import React, { Component } from "react";

import { Col, Row, Button } from "react-bootstrap";

import { Formik, Form } from "formik";

import * as Yup from "yup";

import { CustomInput } from "reactstrap";

import { connect } from "react-redux";
import { UserSignIn } from "../../store/actions/authActions";
import { NotVerified } from "../../store/actions/authActions";

import TwitterLogin from "react-twitter-login";
import { GoogleLogin } from "react-google-login";

const text = require("../../localization/SignIn.json");

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
      text: "",
      RememberMe: false,
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

  handleRememberMe = () => {
    this.setState({ RememberMe: !this.state.RememberMe });
  };

  handleSocialLogin = (user) => {
    console.log(user);
  };

  handleSocialLoginFailure = (err) => {
    console.log(err);
  };
  responseInstagram = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div>
        <h3 className="text-center ">{this.state.text.LetsSignYouIn}</h3>

        <p className="text-center pb-3">{this.state.text.Welcome} </p>

        <Formik
          initialValues={{
            UserName: "",
            Password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();

            this.props.handlverifyPhoneView();
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
                    onChange={FormikProps.handleChange("UserName")}
                    value={FormikProps.values.UserName}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder"
                    htmlFor="UserName"
                  >
                    {this.state.text.PhoneOrEmail}{" "}
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
                    onChange={FormikProps.handleChange("Password")}
                    value={FormikProps.values.Password}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder"
                    htmlFor="Password"
                  >
                    {this.state.text.Password}{" "}
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
                    onChange={this.handleRememberMe}
                    type="checkbox"
                    id="signedbox"
                    label={this.state.text.RememberMe}
                  />
                </Col>

                <Col xs={6} className="text-center my-2">
                  <Button
                    onClick={this.props.handleForget}
                    variant="Forgot-password"
                  >
                    {this.state.text.Forgot}{" "}
                  </Button>
                </Col>
              </Row>
              <Col sm={8} className="text-center  mx-auto  mb-3">
                <button className="signinbtn" type="submit">
                  {this.state.text.SignIn}{" "}
                </button>
              </Col>
            </Form>
          )}
        </Formik>

        <Col sm={8} className="text-center mx-auto   mb-3 mt-1">
          {/* <InstagramLogin
      authCallback={this.responseInstagram}
      appId="2669088873181727"
      appSecret="bcf9f03a399195854d8e4d3be65197ac"
      redirectUri="https://alexandrtovmach.github.io/react-instagram-login/"
      buttonTheme={"simple"}
     
    > */}

          <GoogleLogin
            clientId="844845104372-h8htjngp1os1tb79nksc54dq7tko4r8n.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="fbbtn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i class="fab fa-google px-3"></i>
                {this.state.text.google}
              </button>
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          {/* <button className="fbbtn" >
            <i className="fab fa-instagram px-3"></i>
            {this.state.text.Insta}
          </button> */}
          {/* </InstagramLogin> */}
        </Col>

        <Col sm={8} className="text-center mx-auto my-3">
          <TwitterLogin
            authCallback={this.responseInstagram}
            consumerKey="PyHxgJuyORZqhDiuKAne8LcxT"
            consumerSecret="RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
            callbackUrl="https://alexandrtovmach.github.io/react-twitter-login/"
          >
            <button className="gmbtn ">
              <i className="fab fa-twitter px-3"></i>
              {this.state.text.Twitter}
            </button>
          </TwitterLogin>
        </Col>

        <Col sm={8} className="mx-auto">
          <div className="d-flex justify-content-center">
            <p className="text-center  "> {this.state.text.NotAMember} </p>

            <Button
              variant="Forgot-password"
              onClick={this.props.handleSignUp}
              className=" signupbtnModal   pt-0 px-2 "
            >
              {this.state.text.SignUp}{" "}
            </Button>
          </div>
        </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
