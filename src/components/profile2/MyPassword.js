import React, { Component } from "react";

import { Formik, Form } from "formik";
import { Col } from "react-bootstrap";

import * as Yup from "yup";

import { connect } from "react-redux";

const ChangePasswordSchema = Yup.object().shape({
 

  NewPassword: Yup.string()
    .min(8, "Your password must content Minimum eight characters")
    .max(50, "Too Long Pro!")
    .required("Please enter a Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Your password must content Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
 
});
class MyPassword extends Component {
 

  render() {
    return (
      <div>
       

        <Formik
          initialValues={{
            NewPassword: "",
          }}
          validationSchema={ChangePasswordSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();

    
          }}
        >
          {(FormikProps) => (
            <Form>
              <div className="px-4">
               

                <div className="form-group ">
                  <input
                    type="password"
                    className="form-control"
                    id="NewPassword"
                    name="NewPassword"
                    onChange={FormikProps.handleChange("NewPassword")}
                    value={FormikProps.values.NewPassword}
                    onBlur={FormikProps.handleBlur}
                    required
                  />
                  <label
                    className="form-control-placeholder d-flex"
                    htmlFor="NewPassword"
                  >
                    {this.props.text.NewPassword}
                  </label>
                  {FormikProps.touched.NewPassword &&
                  FormikProps.errors.NewPassword ? (
                    <small className="text-danger px-2 pt-2 d-flex">
                      {FormikProps.touched.NewPassword &&
                        FormikProps.errors.NewPassword}
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

export default connect(mapStateToProps)(MyPassword);
