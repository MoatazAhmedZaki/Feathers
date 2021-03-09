import React, { Component } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import MyAddressesItem from "./MyAddressesItem";
import { Formik, Form } from "formik";
import { CustomInput } from "reactstrap";

import * as Yup from "yup";


const ChangeAddressSchema = Yup.object().shape({
  Address: Yup.string().required("Please enter Address"),
  Title: Yup.string().required("Please enter Address"),
});

export default class MyAddressesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddAddress: false,
      serverError: "",
      serverValid: "",
      Default: false,
    };
  }

  AddAddress = () => {
    this.setState({
      AddAddress: !this.state.AddAddress,
    });
  };

  handleDefault = () => {
    this.setState({ Default: !this.state.Default });
  };

 

  render() {
    return (
      <div>
      

        <Modal show={this.state.AddAddress} onHide={this.AddAddress}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                Title: "",
                Address: "",
              }}
              validationSchema={ChangeAddressSchema}
              onSubmit={(values, actions) => {
                actions.resetForm();

                this.props.AddAddress(values, this.state.Default);
                this.AddAddress();
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
                    />
                  </div>

                  <Col sm={8} className="text-center  mx-auto  my-3">
                    <button className="signinbtn" type="submit">
                      {/* {this.props.text.Update} */}
                      add
                    </button>
                  </Col>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>


<Col sm={12} className="mx-auto mx-4">
        <Row className="justify-content-center align-items-center">



        <Col sm={12} className=" mb-2 d-flex justify-content-center">
            <Button
              className="d-flex align-items-center justify-content-center"
              style={{ width:"206px",
                height: "49px",
                borderRadius: "30px",
                border: "solid 1px #8c7049",
                backgroundColor: "#ffffff" }}
              variant="my"
              onClick={this.AddAddress}
            >

              <p className="mb-0">                 <i class="fas fa-plus px-3" style={{color:"#8c7049"}}></i>
 Add New Address</p>
            </Button>
          </Col>
         { [1,2,3].map((info) => (
                 

                 <Col  xs={12} className="my-2">
                   <MyAddressesItem
                     info={info}
                     DeleteAddress={this.props.DeleteAddress}
                     UpdateAddress={this.props.UpdateAddress}
                   />
                   <hr/>
                 </Col>
               ))
         }
         



        </Row>

        </Col>
      </div>
    );
  }
}
