import React, { Component } from "react";
import { Button, Modal, Col } from "react-bootstrap";
import "../../stylesheets/MyAddressesItem.css";

import { Formik, Form } from "formik";
import { CustomInput } from "reactstrap";

import * as Yup from "yup";
const ChangeAddressSchema = Yup.object().shape({
  Address: Yup.string().required("Please enter Address"),
  Title: Yup.string().required("Please enter Address"),
});

export default class MyAddressesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UpdateAddress: false,
      Default: false,
    };
  }

  UpdateAddressPop = () => {
    this.setState({
      UpdateAddress: !this.state.UpdateAddress,
      Default: this.props.info.default,
    });
  };

  handleDefault = () => {
    this.setState({
      Default: !this.state.Default,
    });
  };

  render() {
    return (
      <div className="address-card2 px-3 ">
    
        <Modal show={this.state.UpdateAddress} onHide={this.UpdateAddressPop}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                Title: this.props.info.title,
                Address: this.props.info.address,
              }}
              validationSchema={ChangeAddressSchema}
              onSubmit={(values, actions) => {
                this.props.UpdateAddress(
                  this.props.info.id,
                  values,
                  this.state.Default
                );
                this.UpdateAddressPop();
              }}
            >
              {(FormikProps) => (
                <Form>
                  <div className="px-4">
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control d-flex"
                        name="Address"
                        id="Address"
                        onChange={FormikProps.handleChange("Address")}
                        value={FormikProps.values.Address}
                        onBlur={FormikProps.handleBlur}
                        required
                      />
                      <label
                        className="form-control-placeholder d-flex"
                        htmlFor="Address"
                      >
                        {/* {this.state.text.massgae} */}
                        Address
                      </label>
                      {FormikProps.touched.Address &&
                      FormikProps.errors.Address ? (
                        <small className="text-danger px-2 pt-2 d-flex">
                          {FormikProps.touched.Address &&
                            FormikProps.errors.Address}
                        </small>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control d-flex"
                        name="Title"
                        id="Title"
                        onChange={FormikProps.handleChange("Title")}
                        value={FormikProps.values.Title}
                        onBlur={FormikProps.handleBlur}
                        required
                      />
                      <label
                        className="form-control-placeholder d-flex"
                        htmlFor="Title"
                      >
                        {/* {this.state.text.massgae} */}
                        Title
                      </label>
                      {FormikProps.touched.Title && FormikProps.errors.Title ? (
                        <small className="text-danger px-2 pt-2 d-flex">
                          {FormikProps.touched.Title &&
                            FormikProps.errors.Title}
                        </small>
                      ) : null}
                    </div>

                    <CustomInput
                      onChange={this.handleDefault}
                      type="checkbox"
                      id="signedbox"
                      // label={this.state.text.RememberMe}
                      label="Default"
                      defaultChecked={this.props.info.default}
                    />
                  </div>

                  <Col sm={8} className="text-center  mx-auto  my-3">
                    <button className="signinbtn" type="submit">
                      add
                    </button>
                  </Col>
                </Form>
              )}
            </Formik>{" "}
          </Modal.Body>
        </Modal>
        
        <div className="d-flex justify-content-between align-items-center">
         
         
          <div>
        <h2 className="address-title py-3 ">Address Title {this.props.info}</h2>
        <p className="address-body">
          Dubai, Emirates PO.
        </p>
        </div>
        <div>

        <Button variant="my" onClick={this.UpdateAddressPop} style={{color:"#8c7049",display: "block",
    textAlign: "center"}}>
          {/* <i class="fas fa-edit"></i> */}

          Change
        </Button>

        <Button
          variant="my"
          onClick={() => this.props.DeleteAddress(this.props.info.id)}
          style={{color:"black",display: "block",
          textAlign: "center"}}
        >
Delete         
 {/* <i class="fas fa-trash"></i> */}
        </Button>
        </div>
       
       
        </div>
      </div>
    );
  }
}
