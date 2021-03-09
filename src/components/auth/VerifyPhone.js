import React, { Component } from "react";
import { Col } from "react-bootstrap";

import { Formik, Form } from "formik";

import * as Yup from "yup";

import { connect } from "react-redux";
import { UserSignIn } from "../../store/actions/authActions";
import { NotVerified } from "../../store/actions/authActions";
const text = require("../../localization/VerifyPhone.json");

const VerifyPhoneSchema = Yup.object().shape({
  Phone: Yup.string()
    .min(4, "Your number must be between 4 and 16 characters")
    .max(16, "Your number must be between 4 and 16 characters")
    .required("Please enter a Phone")
    .matches(/^[0-9]+$/, "Your phone must be composed only with numbers"),
  Code: Yup.string()
    .min(4, "Your code must be 4 characters")
    .max(7, "Your code must be 4 characters")
    .required("Please enter a Code ")
    .matches(/^[0-9]+$/, "Please enter a valid code "),
});

const ResendCodeSchema = Yup.object().shape({
  Phone: Yup.string()
    .min(4, "Your number must be between 4 and 16 characters")
    .max(16, "Your number must be between 4 and 16 characters")
    .required("Please enter a Phone")
    .matches(/^[0-9]+$/, "Your phone must be composed only with numbers"),
});

class VerifyPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
      serverError2: "",
      serverValid2: "",
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
    this.FetchLang();
  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }

  render() {
    return (
      <div className="pb-5">
        <h3 className="text-center ">{this.state.text.Verify1}</h3>
        <p className="text-center pb-3">{this.state.text.Enter} </p>

        <Formik
          initialValues={{
            Phone: "",
            Code: "",
          }}
          validationSchema={VerifyPhoneSchema}
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
                    name="Code"
                    id="Code"
                    onChange={FormikProps.handleChange("Code")}
                    value={FormikProps.values.Code}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label className="form-control-placeholder" htmlFor="Code">
                    {this.state.text.Code}
                  </label>
                  {FormikProps.touched.Code && FormikProps.errors.Code ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Code && FormikProps.errors.Code}
                    </small>
                  ) : null}
                </div>
              </div>

              <Col sm={8} className="text-center  mx-auto  mb-3">
                <button className="signinbtn" type="submit">
                  {this.state.text.Verify2}
                </button>
              </Col>
            </Form>
          )}
        </Formik>

        <Formik
          initialValues={{
            Phone: "",
          }}
          validationSchema={ResendCodeSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
          }}
        >
          {(FormikProps) => (
            <Form>
              <div className="px-4">
                <p className="text-center">
                  OR if you don't receive the code please enter your phone
                  number and click on resend
                </p>

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
                    Phone
                  </label>
                  {FormikProps.touched.Phone && FormikProps.errors.Phone ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Phone && FormikProps.errors.Phone}
                    </small>
                  ) : null}
                </div>
              </div>

              <Col sm={8} className="text-center  mx-auto  mb-3">
                <button className="signinbtn" type="submit">
                  Resend Code
                </button>
              </Col>
            </Form>
          )}
        </Formik>

        {/* 
    
            <AvForm className="signup-form" onValidSubmit={this.handleSignUpSubmit} >
              {this.state.serverValid ? (
                <Alert variant="success">{this.state.serverValid} </Alert>
              ) : null}
    
              {this.state.serverError ? (
                <Alert variant="danger">{this.state.serverError} </Alert>
              ) : null}


<div className="px-4">


                <AvField
                name="Code"
                id="Code"

                type="text"
                placeholder="Code"
                validate={{
                  required: { value: true, errorMessage: "Please enter a Phone" },
                  pattern: {
                    value: "^[0-9]+$",
                    errorMessage: "Your code must be composed only with numbers",
                  },
                  minLength: {
                    value: 1,
                    errorMessage: "Your number must be between 1 and 16 characters",
                  },
                  maxLength: {
                    value: 4,
                    errorMessage: "Your name must be between 6 and 5 characters",
                  },
                }}
              />
           
</div>    
              <Col sm={12} className="text-center  my-5">
                <button className="signinbtn "> Submit </button>
              </Col>
            </AvForm> */}
        {/* <Form>
                  <Row form>
                    <Col sm={12}>
                      <FormGroup className="modalInput">
                        <Input
                          type="number"
                          name="MobileNumber"
                          id="exampleusername"
                          placeholder="Mobile Number"
                          className="myform-control"
                        />
                      </FormGroup>
                    </Col>
                    <Col sm={12} className="text-center  my-2">
                      <button className="signinbtn "> Reset password </button>
                    </Col>
                  </Row>
                </Form> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhone);
