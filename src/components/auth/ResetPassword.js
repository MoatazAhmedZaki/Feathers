import React, { Component } from "react";

import { Col } from "react-bootstrap";



import { Formik, Form } from "formik";

import * as Yup from "yup";

import { connect } from "react-redux";
const text = require("../../localization/ResetPassword.json");

const VerifyPhoneSchema = Yup.object().shape({
  Phone: Yup.string()
    .min(4, "Your number must be between 4 and 16 characters")
    .max(16, "Your number must be between 4 and 16 characters")
    .required("Please enter a Phone")
    .matches(/^[0-9]+$/, "Your phone must be composed only with numbers"),
});

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
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
        <h3 className="text-center ">{this.state.text.Forgot} </h3>
        <p className="text-center pb-3">{this.state.text.Enter} </p>

       

        <Formik
          initialValues={{
            Phone: "",
          }}
          validationSchema={VerifyPhoneSchema}
          onSubmit={(values, actions) => {
            this.props.handleForget()
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
                    {this.state.text.Phone}{" "}
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
                  {this.state.text.Verify}{" "}
                </button>
              </Col>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps)(ResetPassword);
