import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

import "../../stylesheets/ShoppingCart3.css";
import { Link } from "react-router-dom";

import { Formik } from "formik";
import { Form as Form2 } from "formik";

import * as Yup from "yup";

import { connect } from "react-redux";


const ChangeAddressSchema = Yup.object().shape({
  Address: Yup.string().required("Please enter Address"),
  Title: Yup.string().required("Please enter Address"),
});

class ShoppingCart3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChangePaymentMethod: false,
      ChangeShippingMethod: false,
      ChangeAddress: false,
      AddAddress: false,
      Default: false,
    };
  }

  ChangePaymentMethod = (e) => {
    this.setState({ ChangePaymentMethod: !this.state.ChangePaymentMethod });
  };

  ChangeShippingMethod = (e) => {
    this.setState({ ChangeShippingMethod: !this.state.ChangeShippingMethod });
  };
  ChangeAddress = (e) => {
    this.setState({ ChangeAddress: !this.state.ChangeAddress });
  };
  AddAddress = (e) => {
    this.setState({ AddAddress: !this.state.AddAddress });
  };

  handleDefault = () => {
    this.setState({ Default: !this.state.Default });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    // console.log("car3", this.props.CartProducts);

    // const addresses =    this.props.user.user.userMetas.addresses

    // var newJson = addresses.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
    // // newJson = newJson.replace(/'/g, '"');

    // var data = JSON.parse(newJson.replace(/'/g, '"'));

    // console.log("jason" ,JSON.stringify(addresses))
  }
  render() {
    return (
      <Container className="shoppingcart2">
        {/* {console.log("test",this.props.user.user.userMetas.addresses)} */}

        <Modal
          show={this.state.ChangePaymentMethod}
          onHide={this.ChangePaymentMethod}
        >
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            <Row>
              {[1,2].map((method) => (
                    // console.log("img",img)
                    <Col md={6} xs={12} className="text-center">
                      <label>
                        <input
                          type="radio"
                          name="ShippingMethoud"
                          value={method}
                          onChange={() =>
                            this.ChangePaymentMethod()
                          }
                        />
                        <p>method {method}</p>
                      </label>
                    </Col>
                  ))
               }
            </Row>
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.ChangeShippingMethod}
          onHide={this.ChangeShippingMethod}
        >
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            <Row>
              {[1,2].map((method) => (
                    <Col md={6} xs={12} className="text-center">
                      <label>
                        <input
                          type="radio"
                          name="ShippingMethoud"
                          value={method}
                          onChange={() =>
                            this.ChangeShippingMethod()
                          }
                        />
                        <p>method {method}</p>
                      </label>
                    </Col>
                  ))
               }
            </Row>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.ChangeAddress} onHide={this.ChangeAddress}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            {this.props.Profile ? (
              this.props.Profile.addresses.length === 0 ? (
                <p className="text-center">{this.props.text.NoAddresses} </p>
              ) : // this.props.user.user.userMetas.addresses)
              this.props.user.user ? (
                <Form.Control
                  as="select"
                  className="my-border no-bg"
                  onChange={(e) => {
                    this.props.ChangeAddress(e);
                    this.ChangeAddress();
                  }}
                >
                  <option> Choose An Address</option>

                  {this.props.Profile.addresses.map((address) => (
                    <option value={address.id}>{address.address}</option>
                  ))}
                </Form.Control>
              ) : null
            ) : null}

            <p className="text-center">{this.props.text.OR}</p>

            <div className=" d-flex justify-content-center w-100">
              <Button onClick={this.AddAddress} className="pro-btn">
                {this.props.text.AddAddress}
              </Button>
            </div>
          </Modal.Body>
        </Modal>

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
                <Form2>
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
                  </div>

                  <Col sm={8} className="text-center  mx-auto  my-3">
                    <button className="signinbtn" type="submit">
                      {/* {this.props.text.Update} */}
                      add
                    </button>
                  </Col>
                </Form2>
              )}
            </Formik>
          </Modal.Body>
        </Modal>

        <Row className="my-5">
          <Col lg={8} md={12} sm={12} className="  right-border">
            <h3 className="d-flex">{this.props.text.Summary}</h3>

            <p className="d-flex pb-5">{this.props.text.YourCart}</p>

            {/* <div className=" d-flex  "> */}

            {[1,2,3].map((product) => (
              <Row className="pb-3 text-center">
                <Col lg={2}>
                  <div
                    style={{ width: 100, height: 100 }}
                    className="rounded-circle mx-auto"
                  >
                    <img
                    src={require("../../imgs/wallet1.jpg")}
                    className="h-100 w-100 rounded-circle"
                      alt="Product Name"
                    />
                  </div>
                </Col>
                <Col lg={2}>
                  <p>Product Name</p>
                  <p>Product Id</p>
                </Col>
                <Col lg={2}>
                  <p>white</p>
                </Col>
                <Col lg={2}>
                  <p>XL</p>
                </Col>
                <Col lg={2}>
                  <p>300 AED</p>
                </Col>
                <Col lg={2}>
                  <p>5</p>
                </Col>
              </Row>
            ))}

            <div className="d-flex justify-content-between total-cost-summry">
              <p className="mb-0 mx-4 pt-2">{this.props.text.TotalCost}</p>

              <p className="mb-0 mx-4  pt-2">

                25000 AED
              </p>
            </div>

            {this.props.text.Lang === "en" ? (
              <Button className="back-btn my-5" onClick={this.props.fun}>
                <i className="fas fa-long-arrow-alt-left mx-3"></i> Back
              </Button>
            ) : (
              <Button className="back-btn my-5" onClick={this.props.fun}>
                <i className="fas fa-long-arrow-alt-right mx-3"></i> العوده
              </Button>
            )}

            {/* </div> */}
          </Col>

          <Col lg={4} md={12} sm={12}>
            <Row className="py-3">
              <Col lg={6} className="text-center">
                <p>{this.props.text.PaymentMethouds}</p>

                {/* {  this.props.CartProducts.payment_option.trans[0].name } */}
                <div className="methods-holder mx-auto">
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/visa.png")}
                    alt="Generic placeholder"
                  />
                  {/* {this.props.CartProducts.payment_option ? (
                    <h1>{this.props.CartProducts.payment_option.trans.name}</h1>
                  ) : null} */}
                </div>
                <Button
                  className="change-btn"
                  onClick={this.ChangePaymentMethod}
                >
                  {this.props.text.Change}
                </Button>
              </Col>

              <Col lg={6} className="text-center">
                <p>{this.props.text.Deliverymethod} </p>

                <div className="methods-holder mx-auto">
                  <img
                    //    width={100}
                    className="p-1"
                    src={require("../../imgs/dpd.png")}
                    alt="Generic placeholder"
                  />

<p>$12.00</p>
<p className="mb-0"><small>Cash on delivery</small></p>
                  {/* <h1> {this.props.CartProducts.shipping.trans.name}</h1> */}
                </div>
                <Button
                  className="change-btn"
                  onClick={this.ChangeShippingMethod}
                >
                  {this.props.text.Change}
                </Button>
              </Col>
            </Row>

            <div className=" text-center py-5">
              <h2 className="Address-delivery-title">
                {this.props.text.AddressDelivery}
              </h2>

              <p className="px-3">


                {/* {this.props.Profile &&
                this.props.Profile.addresses &&
                this.props.Profile.addresses.length !== 0 ? (
                  this.props.CartProducts.shipping_address === 0 ? (
                    <p> please add shipping address</p>
                  ) : (



                   (this.props.Profile.addresses.find(
                      (x) => x.id === this.props.CartProducts.shipping_address
                    )) !== undefined ?

this.props.Profile.addresses.find(
                      (x) => x.id === this.props.CartProducts.shipping_address
                    ).address
                    
                    : 
                    <p> please add shipping address</p>

                     
                  )
                ) : (
            

                  <p> please add shipping address</p>
                )} */}

                Beatrice Waddle 1391 Single Street. Chicago, MA 02129 USA +5
                781-644-3627 BeatriceLWaddle@rhyta.com
              </p>

              <Button className="change-add-btn" onClick={this.ChangeAddress}>
                {" "}
                {this.props.text.Change}
              </Button>
            </div>

            {/* {this.state.error ? (
              <div className="mx-auto text-center">
                <small className="text-danger">
                Please add shipping address
                </small>
              </div>
            ) : null} */}

            <Row className="text-center py-4">
              <Col md={6} sm={12}>
                <Link to="/Products/All" style={{ color: "black" }}>
                  <Button className="con-btn  mb-3 py-3">
                    {this.props.text.ContinueShopping}
                  </Button>
                </Link>
              </Col>
              <Col md={6} sm={12}>
                <Button
                  className="pro-btn  mb-3 py-3 "
                  onClick={() => this.props.Checkout()
                  }
                >
                  {this.props.text.ProceedToPayment}
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
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps)(ShoppingCart3);
