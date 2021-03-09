import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Col } from "react-bootstrap";

import * as Yup from "yup";

import { connect } from "react-redux";

import "../../stylesheets/MyAccount.css";

const SignUpSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(6, "Your name must be between 6 and 30 characters")
    .max(30, "Your name must be between 6 and 30 characters")
    .required("Please enter a name")
    .matches(
      /^[A-Za-z0-9 ]+$/,
      "Your name must be composed only with letter and numbers"
    ),
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
  Currency: Yup.string().required("Please enter a Currency "),
});

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverError: "",
      serverValid: "",
      text: "",
      country: "",
      file: null,
      thumb: null,
    };
  }

  handleChange = (file) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ thumb: reader.result });
    };
    console.log(this.state);

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div className="py-2">
        <Formik
          initialValues={{
            // file: null,

            FullName: "User Name",
            Email: "User Email",
            BirthDate: 10 / 11 / 2020,
            Gender: "Male",
            Country: "",
            Currency: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            console.log(values);
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
                    onChange={FormikProps.handleChange("FullName")}
                    value={FormikProps.values.FullName}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="FullName"
                  >
                    {this.props.text.FullName}{" "}
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
                    name="Email"
                    id="Email"
                    onChange={FormikProps.handleChange("Email")}
                    value={FormikProps.values.Email}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="Email"
                  >
                    {this.props.text.Email}
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
                    className="form-control-placeholder d-flex"
                    htmlFor="BirthDate"
                  >
                    {this.props.text.BirthDate}{" "}
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
                    <option value="Male" label={this.props.text.Male} />
                    <option value="female" label={this.props.text.Female} />
                  </select>
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="Gender"
                  >
                    {this.props.text.Gender}
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
                    {/* <option value={1} label={this.props.text.Male} />
                    <option value={2} label={this.props.text.Female} /> */}
                    {this.state.country
                      ? this.state.country.map((cont) => (
                          <option
                            key={cont.id}
                            value={cont.id}
                            label={cont.trans.name}
                          />
                          // console.log("id" ,cont.id , "name" ,cont.trans.name)
                        ))
                      : null}
                  </select>
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="Country"
                  >
                    {this.props.text.country}
                  </label>

                  {FormikProps.touched.Country && FormikProps.errors.Country ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Country &&
                        FormikProps.errors.Country}
                    </small>
                  ) : null}
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    id="Currency"
                    name="Currency"
                    onChange={FormikProps.handleChange("Currency")}
                    value={FormikProps.values.Currency}
                    onBlur={FormikProps.handleBlur}
                    required
                  >
                    <option value="" hidden />

                    {this.props.currencies
                      ? this.props.currencies.rows.map((cont) => (
                          <option
                            key={cont.id}
                            value={cont.id}
                            label={cont.name}
                          />
                          // console.log("id" ,cont.id , "name" ,cont.trans.name)
                        ))
                      : null}
                  </select>
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="Currency"
                  >
                    {this.props.text.Currency}
                  </label>

                  {FormikProps.touched.Currency &&
                  FormikProps.errors.Currency ? (
                    <small className="text-danger px-2 pt-2">
                      {FormikProps.touched.Currency &&
                        FormikProps.errors.Currency}
                    </small>
                  ) : null}
                </div>
              </div>

              <Col sm={3} className="  mb-3">
                <button className="signinbtn" type="submit">
                  {this.props.text.Update}
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
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps)(MyAccount);
