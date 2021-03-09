import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../stylesheets/ShoppingCart.css";
import { connect } from "react-redux";

import itemImg from "../../imgs/wallet1.jpg";


class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Gift: false,
      GiftText: "",
    };
  }

  handleGift = (e) => {
    this.setState({
      Gift: !this.state.Gift,
      GiftText: "",
    });
  };

  handleGiftText = (e) => {
    this.setState({
      GiftText: e.target.value,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="ShoppingCart">
      
            <Container>
              {window.innerWidth > 750 ? (
                <div>
                  <Row className="pb-3  table-head">
                    <Col sm={6} className="text-center ">
                      <Row>
                        <Col sm={3}>{this.props.text.Product}</Col>
                        <Col sm={3}>{this.props.text.Name} </Col>
                        <Col sm={3}>{this.props.text.Color}</Col>
                        <Col sm={3}>{this.props.text.Size} </Col>
                      </Row>
                    </Col>
                    <Col sm={6} className="px-5">
                      <Row>
                        <Col className="px-0 align-self-start d-flex">
                          {this.props.text.Ammount}
                        </Col>
                        <Col className=" align-self-start d-flex">
                          {this.props.text.Price}
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  {[1, 2, 3].map((product) => (
                    <Row className=" py-3">
                      <Col sm={6} className="text-center">
                        <Row>
                          <Col sm={3} className=" ">
                            <div
                              style={{ width: 100, height: 100 }}
                              className="rounded-circle mx-auto"
                            >
                              <img
                                src={itemImg}
                                className="h-100 w-100 rounded-circle"
                                alt="Product Name"
                              />
                            </div>
                          </Col>

                          <Col sm={3}>
                            <p>Product Name</p>
                            <p>Product id</p>
                          </Col>
                          <Col sm={3}>
                            <p className="pt-my">white</p>
                          </Col>
                          <Col sm={3}>
                            <p className="pt-my">XXL</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={6}>
                        <Row className="px-4">
                          <Col className="px-0">
                            <div className="Quan-btn px-4 my-4  d-flex justify-content-between">
                              <button
                                // onClick={() =>
                                //   this.props.Min(
                                //     product.quantity,
                                //     product.product_id
                                //   )
                                // }
                                className="quant-add-remove px-3 btn"
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <p className="mb-0 py-1">5</p>
                              <button
                                // onClick={() =>
                                //   this.props.Plus(
                                //     product.quantity,
                                //     product.product_id
                                //   )
                                // }
                                className="quant-add-remove px-3 btn"
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </Col>
                          <Col className="align-self-start  justify-content-between  align-items-center d-flex">
                            <p className="pt-my  ">Product Price</p>

                            <button
                              // onClick={() =>
                              //   this.props.Delete(product.product_id)
                              // }
                              className="pt-my pb-3 px-5"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  ))}
                </div>
              ) : (
                <Row>
                  {[1, 2, 3].map((product) => (
                    <Col lg={4} md={4} xs={12} className="text-center  my-3 ">
                      <div className="card my-2 rounded">
                        <div
                          style={{ width: 150, height: 150 }}
                          className="rounded-circle mx-auto my-3"
                        >
                          <img
                            src={itemImg}
                            className="h-100 w-100 rounded-circle"
                            alt= "Product Name"
                          />
                        </div>

                        <div className="d-flex justify-content-between py-2 px-3">
                          <big>{this.props.text.Product} </big>
                          <p className=""> Product Name</p>
                        </div>

                        <div className="d-flex justify-content-between py-2 px-3">
                          <big> {this.props.text.Id} </big>
                          <div>
                            <p>Product Id</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between py-2 px-3">
                          <big> {this.props.text.Color} </big>
                          <p className=""> white</p>
                        </div>

                        <div className="d-flex justify-content-between py-2 px-3">
                          <big> {this.props.text.Size} </big>
                          <p className=""> Xl</p>
                        </div>

                        <div className="d-flex justify-content-between py-2 px-3">
                          <big> {this.props.text.Ammount} </big>
                          <div className="Quan-btn px-4  d-flex justify-content-between">
                            <button
                              // onClick={() =>
                              //   this.props.Min(
                              //     product.quantity,
                              //     product.product_id
                              //   )
                              // }
                              className="quant-add-remove px-3 btn"
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <p className="mb-0 py-1">5</p>
                            <button
                              // onClick={() =>
                              //   this.props.Plus(
                              //     product.quantity,
                              //     product.product_id
                              //   )
                              // }
                              className="quant-add-remove px-3 btn"
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between py-2 px-3">
                          <big> {this.props.text.Price} </big>
                          <p className="">Product Price</p>
                        </div>

                        <button
                          // onClick={() => this.props.Delete(product.product_id)}
                          className="pt-my pb-3 px-5"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <i className="fas fa-times fa-2x"></i>
                        </button>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}

              <Row>
                <Col lg={6} md={6} sm={12} className=" pb-3">
                 
                   
                      <InputGroup className="my-3 p-2">
                     

                        <Form.Control
                          as="select"
                          className="my-border no-bg"
                          // onChange={this.props.ValidateVouchers}
                        >
                          <option hidden>{this.props.text.AllVouchers}</option>

                          {[1,2,3].map((voucher) => (

                            <option value={voucher}>
                            Voucher number  {voucher}
                            </option>
                          ))}

                        
                        </Form.Control>
                      </InputGroup>

                  <Link to="/Products/All" style={{ color: "black" }}>
                    {this.props.text.Lang === "en" ? (
                      <h2 className="pt-3 d-flex">
                        <i className="fas fa-long-arrow-alt-left p-2"></i>
                        {this.props.text.BackToShopping}
                      </h2>
                    ) : (
                      <h2 className="pt-3 d-flex">
                        <i className="fas fa-long-arrow-alt-right p-2"></i>
                        {this.props.text.BackToShopping}
                      </h2>
                    )}
                  </Link>
                </Col>

                <Col lg={6} md={6} sm={12}>
                  {/* <Form.Group controlId="gift">
                <Form.Check
                  type="checkbox"
                  label="Send as a gift"
                  defaultChecked={this.state.Gift}
                  onClick={this.handleGift}
                />
              </Form.Group> */}

                  <Form.Group controlId="white">
                    <Form.Check
                      className="white d-flex"
                      type="checkbox"
                      name="color"
                      value="brown"
                      label=""
                      onClick={this.handleGift}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="exampleForm.ControlTextarea1"
                    className={this.state.Gift ? " mx-3" : "d-none"}
                  >
                    <Form.Control
                      onChange={this.handleGiftText}
                      as="textarea"
                      rows="3"
                      placeholder="Type Your Card Here"
                      value={this.state.GiftText}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-content-center text-center my-4">
                    <div className="total-cost mx-3 mb-3">
                      <p>
                        {this.props.text.TotalCost}
                        <span className="px-3">
                        2000 AED
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                         3000 AED
                        </span>
                      </p>
                    </div>

                    <Button
                      className="checkout mx-3 mb-3 "
                      onClick={() => this.props.fun(this.state.GiftText)}
                    >
                      {this.props.text.CHECKOUT}
                    </Button>
                  </div>
                </Col>
              </Row>
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

export default connect(mapStateToProps)(ShoppingCart);
