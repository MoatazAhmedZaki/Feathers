import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Location from "../layouts/Location.js";

import "../../stylesheets/ContactUs.css";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import { connect } from "react-redux";

import imgHeader from "../../imgs/contact-header.png";

const text = require("../../localization/ContactUs.json");

const ContactUsSchema = Yup.object().shape({
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
  message: Yup.string().required("Please enter a message"),
});

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  componentWillMount() {
    this.FetchLang();
  }

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

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }
  render() {
    return (
      <div className="contactUs-page">
        <Container className="py-5">
          <h1
            style={{ color: "black" }}
            className={
              "pb-5 px-5 pt-2 " +
              (this.state.text.Lang === "ar" ? " text-right" : "text-left")
            }
          >
            {this.state.text.Contact}
          </h1>

          <div
            style={{
              backgroundImage: `url(${imgHeader})`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              width: " 100%",
              height: "80vh",
              borderRadius: "10px",
            }}
          ></div>
        </Container>

        <Container>
          <Row>
            <Col lg={4} md={12} sm={12} className=" ">
              <ul className="nav nav-tabs  " id="MainUl" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link py-3 active d-flex justify-content-center align-content-center"
                    id="home-tab"
                    data-toggle="tab"
                    href="#DoctorInformation"
                    role="tab"
                    aria-controls="DoctorInformation"
                    aria-selected="true"
                  >
                    <p className="mb-0 mx-2">
                      <i className="fas fa-map-marker-alt "></i>
                    </p>
                    <h3 className="pt-2"> Dubai Festival City Mall</h3>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link py-3 d-flex justify-content-center align-content-center"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#clinicInformation"
                    role="tab"
                    aria-controls="clinicInformation"
                    aria-selected="false"
                  >
                    <p className="mb-0 mx-2">
                      <i className="fas fa-map-marker-alt "></i>
                    </p>
                    <h3 className="pt-2"> Dubai Festival City Mall</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-3 d-flex justify-content-center align-content-center"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#Schedule"
                    role="tab"
                    aria-controls="Schedule"
                    aria-selected="false"
                  >
                    <p className="mb-0 mx-2">
                      <i className="fas fa-map-marker-alt "></i>
                    </p>
                    <h3 className="pt-2"> Dubai Festival City Mall</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-3 d-flex justify-content-center align-content-center"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#PatientsRecord"
                    role="tab"
                    aria-controls="PatientsRecord"
                    aria-selected="false"
                  >
                    <p className="mb-0 mx-2">
                      <i className="fas fa-map-marker-alt "></i>
                    </p>
                    <h3 className="pt-2"> Dubai Festival City Mall</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-3 d-flex justify-content-center align-content-center"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#Notifications"
                    role="tab"
                    aria-controls="Notifications"
                    aria-selected="false"
                  >
                    <p className="mb-0 mx-2">
                      <i className="fas fa-map-marker-alt "></i>
                    </p>
                    <h3 className="pt-2"> Dubai Festival City Mall</h3>
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={8} md={12} sm={12} className=" px-0 mx-0">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="DoctorInformation"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <Location />
                </div>
                <div
                  className="tab-pane fade "
                  id="clinicInformation"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h1>2</h1>
                </div>
                <div
                  className="tab-pane fade"
                  id="Schedule"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h1>3</h1>
                </div>
                <div
                  className="tab-pane fade"
                  id="PatientsRecord"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h1>4</h1>
                </div>

                <div
                  className="tab-pane fade"
                  id="Notifications"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <h1>5</h1>
                </div>
              </div>
            </Col>
          </Row>

          {/* <Row> */}
          <h2
            className={
              "mx-auto py-5 " +
              (this.state.text.Lang === "ar" ? " text-right" : "text-left")
            }
          >
            {this.state.text.GetInTouch}
          </h2>

          <Row>
            <Col
              lg={8}
              md={8}
              sm={12}
              className="contact-form formholder mb-5 px-5"
            >
              <h3 className=" px-5 text-center" style={{ color: "#8c7049" }}>
                {this.state.text.SendUsAMessage}
              </h3>

              <Formik
                initialValues={{
                  FullName: "",
                  Phone: "",
                  Email: "",
                  message: "",
                }}
                validationSchema={ContactUsSchema}
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
                          className="form-control d-flex"
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
                          {this.state.text.FullName}
                        </label>
                        {FormikProps.touched.FullName &&
                        FormikProps.errors.FullName ? (
                          <small className="text-danger px-2 pt-2 d-flex">
                            {FormikProps.touched.FullName &&
                              FormikProps.errors.FullName}
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control d-flex"
                          name="Phone"
                          id="Phone"
                          onChange={FormikProps.handleChange("Phone")}
                          value={FormikProps.values.Phone}
                          onBlur={FormikProps.handleBlur}
                          required
                        />
                        <label
                          className="form-control-placeholder d-flex"
                          htmlFor="Phone"
                        >
                          {this.state.text.Phone}
                        </label>
                        {FormikProps.touched.Phone &&
                        FormikProps.errors.Phone ? (
                          <small className="text-danger px-2 pt-2 d-flex">
                            {FormikProps.touched.Phone &&
                              FormikProps.errors.Phone}
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control d-flex"
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
                          {this.state.text.Email}
                        </label>
                        {FormikProps.touched.Email &&
                        FormikProps.errors.Email ? (
                          <small className="text-danger px-2 pt-2 d-flex">
                            {FormikProps.touched.Email &&
                              FormikProps.errors.Email}
                          </small>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <textarea
                          type="text"
                          className="form-control d-flex"
                          name="message"
                          id="message"
                          onChange={FormikProps.handleChange("message")}
                          value={FormikProps.values.message}
                          onBlur={FormikProps.handleBlur}
                          required
                        />
                        <label
                          className="form-control-placeholder d-flex"
                          htmlFor="message"
                        >
                          {this.state.text.massgae}
                        </label>
                        {FormikProps.touched.message &&
                        FormikProps.errors.message ? (
                          <small className="text-danger px-2 pt-2 d-flex">
                            {FormikProps.touched.message &&
                              FormikProps.errors.message}
                          </small>
                        ) : null}
                      </div>
                    </div>

                    <div className=" d-flex justify-content-end w-100">
                      <button
                        className=" d-flex justify-content-center align-items-center"
                        type="submit"
                      >
                        <i className="fas fa-play "></i>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col lg={4} md={4} sm={12} className="contact-info text-center">
              <h4 className="pb-5" style={{ color: "#8c7049" }}>
                {this.state.text.ContactInfo}
              </h4>

              <p className="pt-5 px-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat.
              </p>

              <p className="py-5"> +0000 00 00 00000</p>
            </Col>
          </Row>
          {/* </Col> */}
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

export default connect(mapStateToProps)(ContactUs);
