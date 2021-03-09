import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Modal,
  Breadcrumb,
} from "react-bootstrap";

import ProductInfo from "../products/ProductInfo.js";
import "../../stylesheets/ProductDetails.css";
import SelectedCarousel from "../home-components/SelectedCarousel.js";
import ProductDescription from "../products/ProductDescription.js";

import ProductReviews from "../products/ProductReviews.js";
import axios from "axios";
import ProductCar from "../products/ProductCar.js";
import { SignInMenu } from "../../store/actions/Menu";

import { Formik, Form } from "formik";

import * as Yup from "yup";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import img1 from "../../imgs/item1.bmp";
import img2 from "../../imgs/item2.bmp";
import img3 from "../../imgs/item3.bmp";
import img4 from "../../imgs/item4.bmp";
import img5 from "../../imgs/item5.bmp";
const text = require("../../localization/ProductDetails.json");

const items = [
  {
    id: 1,
    Caption: "Small Wallet",
    img: img1,
    price: "615 AED",
    discount: false,
    Price2: "",
    percentage: "",
    fav: true,
  },
  {
    id: 2,
    Caption: "Mobile Cover",
    img: img2,
    price: "350 AED",
    discount: true,
    price2: "389 AED",
    percentage: "10",
    fav: false,
  },
  {
    id: 3,
    Caption: "Bracelet ",
    img: img3,
    price: "400 AED",
    discount: false,
    price2: "",
    percentage: "",
    fav: false,
  },
  {
    id: 4,
    Caption: "Cap",
    img: img4,
    price: "420 AED",
    discount: false,
    price2: "",
    percentage: "",
    fav: false,
  },
  {
    id: 5,
    Caption: "Earbuds Case",
    img: img5,
    price: "210 AED",
    discount: false,
    price2: "",
    percentage: "",
    fav: false,
  },
];


const reviewSchema = Yup.object().shape({
  Review: Yup.string()
    .required("must write review")
    .matches(/^[A-Za-z0-9 ]+$/, "Please enter a valid Review "),
});

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quan: 1,
      product: [],
      Reviews: [],
      // baseUrl: "",
      image_base_url: "",
      addReview: false,
      Rates: "",
      text: "",
      CartProducts: "",
      rate: "",
    };
  }

  FetchLang = () => {
    if (this.props.lan === "ar") {
      this.setState({ text: text.AR });
    } else if (this.props.lan === "en") {
      this.setState({ text: text.EN });
    }
  };
  handleAddReview = () => {
    this.setState({
      addReview: !this.state.addReview,
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleAddQuan = () => {
    let number = this.state.quan;
    number++;

    this.setState({ quan: number });
  };

  handleRemoveQuan = () => {
    if (this.state.quan > 1) {
      let number = this.state.quan;
      number--;

      this.setState({ quan: number });
    } else {
      return null;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      window.scrollTo(0, 0);

      // console.log("test0", prevState, this.state);
      // this.setState({ state: this.state });
      this.FetchLang();

      this.FetchUserReviews();
      this.FetchProduct();
      this.FetchRates();
    }
  }

  FetchImgBase = () => {
    const headers = {
      lang: this.props.lan,
    };

    axios
      .get(
        "http://95.111.238.113:3000/api/v1/products",
        //  request,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (res.data.status === 200) {
          this.setState({
            image_base_url: res.data.image_base_url,
          });
          // console.log("categories", res.data.Categories);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  FetchUserReviews = () => {
    const headers = {
      lang: this.props.lan,
    };

    axios
      .get(
        `http://95.111.238.113:3000/api/v1/user-reviews/${this.props.match.params.id}`,
        //  request,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (res.data.status === 200) {
          this.setState({
            Reviews: res.data.Reviews,
          });
          // console.log("categories", res.data.Categories);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  AddToCart = () => {
    const request = {
      product_id: this.props.match.params.id,
      quantity: this.state.quan,
      // shipping_address: this.props.user.user  ? this.props.user.user.addresses.find(x => x.default === true).id  : null,
      shipping_address:
        this.props.user.user && this.props.user.user.addresses.length !== 0
          ? this.props.user.user.addresses[0].id
          : null,

      shipping_to: {
        full_name: this.props.user.user ? this.props.user.user.name : null,
        phone: this.props.user.user ? this.props.user.user.phone : null,
        email: this.props.user.user ? this.props.user.user.email : null,
      },
    };
    const headers = {
      lang: this.props.lan,
      "x-access-token": this.props.user.user
        ? this.props.user.user.accessToken
        : null,
    };
    axios
      .put(`http://95.111.238.113:3000/api/v1/cart`, request, {
        headers,
      })
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (res.data.status === 200) {
          console.log(res);
          // return <Redirect to='/login'  />
          this.props.history.push("/feathers/ShoppingCart");

          // console.log("categories", res.data.Categories);
        } else {
          // alert("you are not a valid user");

          this.props.SignInMenu();
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  FetchProduct = () => {
    const headers = {
      lang: this.props.lan,
      "x-access-token": this.props.user.user
        ? this.props.user.user.accessToken
        : null,
    };
    axios
      .get(
        `http://95.111.238.113:3000/api/v1/product/${this.props.match.params.id}`,
        //  request,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (res.data.status === 200) {
          this.setState({
            product: res.data.Product,
          });
          // console.log("categories", res.data.Categories);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  FetchRates = () => {
    const headers = {
      lang: this.props.lan,
    };
    axios
      .get(
        `http://95.111.238.113:3000/api/v1/product-rate-details/${this.props.match.params.id}`,
        //  request,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        if (res.data.status === 200) {
          this.setState({
            Rates: res.data.Reviews,
          });
          // console.log("categories", res.data.Categories);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  componentWillMount() {
    // if (this.props.lan === "AR") {
    //   this.setState({ text: text.AR });
    // } else {
    //   this.setState({ text: text.EN });
    // }

    this.FetchLang();

    this.FetchImgBase();
    this.FetchUserReviews();
    this.FetchProduct();
    this.FetchRates();
  }
  onChangeRate = (v) => {
    console.log("selected star", v);

    this.setState({ rate: v });
  };

  Update = () => {
    this.forceUpdate();
    console.log("fire");
  };

  render() {
    return (
      <div className="product-Details-page ">
        {/* {console.log("item", this.state)} */}

        {/* {console.log(this.props.match.params.id)} */}
        {/* {    console.log("props",this.props.user.user.accessToken)
} */}

        <Modal show={this.state.addReview} onHide={this.handleAddReview}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                Review: "",
              }}
              validationSchema={reviewSchema}
              onSubmit={(values, actions) => {
                actions.resetForm();

                const request = {
                  product_id: this.props.match.params.id,
                  rate: this.state.rate,
                  review: values.Review,
                };

                const headers = {
                  lang: this.props.lan,
                  "x-access-token": this.props.user.user
                    ? this.props.user.user.accessToken
                    : null,
                };

                axios
                  .post(
                    "http://95.111.238.113:3000/api/v1/review-product",
                    request,
                    {
                      headers,
                    }
                  )
                  .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    if (res.data.status === 200) {
                      // this.setState({ serverValid: res.data.message });
                      this.Update();

                      setTimeout(() => this.handleAddReview(), 0);
                    } else {
                      this.props.SignInMenu();
                    }
                  })
                  .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                  });
              }}
            >
              {(FormikProps) => (
                <Form>
                  <div className="text-center rate">
                    <Rate
                      defaultValue={0}
                      onChange={this.onChangeRate}
                      style={{ fontSize: 40 }}
                      allowHalf
                    />
                  </div>
                  <div className="px-4">
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control"
                        name="Review"
                        id="Review"
                        onChange={FormikProps.handleChange("Review")}
                        value={FormikProps.values.Review}
                        onBlur={FormikProps.handleBlur}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="Review"
                      >
                        Add Comment{" "}
                      </label>
                      {FormikProps.touched.Review &&
                      FormikProps.errors.Review ? (
                        <small className="text-danger px-2 pt-2">
                          {FormikProps.touched.Review &&
                            FormikProps.errors.Review}
                        </small>
                      ) : null}
                    </div>
                  </div>

                  <Col sm={8} className="text-center  mx-auto  mb-3">
                    <button className="signinbtn" type="submit">
                      Add
                    </button>
                  </Col>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>

        <Container className="py-5">
          <Breadcrumb className="my-Breadcrumb pt-3 pb-0">
            <Breadcrumb.Item>
              <Link to="/feathers">
                <i className="fas fa-home"></i>
              </Link>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
              <Link to="/feathers/Products/All"> Products </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to={`/feathers/Product/1`}>
                  Product Name
                </Link>
              </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="pb-3"
            >
              <ProductCar  />
            </Col>

            <Col lg={6} md={12} sm={12}>
              <ProductInfo
                product={this.state.product}
                text={this.state.text}
                quan={this.state.quan}
                handleAddQuan={this.handleAddQuan}
                handleRemoveQuan={this.handleRemoveQuan}
                Update={this.Update}
                AddToCart={this.AddToCart}
                SignInMenu={this.props.SignInMenu}
              />
            </Col>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Col sm={12}>
              <Nav variant="pills" className="justify-content-center py-5">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="mx-3">
                    {this.state.text.Description}
                  </Nav.Link>
                </Nav.Item>

          
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="mx-3">
                      {this.state.text.Reviews}
                    </Nav.Link>
                  </Nav.Item>
              </Nav>
            </Col>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ProductDescription
                  product={this.state.product}
                  text={this.state.text}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ProductReviews
                  text={this.state.text}
                  product={this.state.product}
                  Reviews={this.state.Reviews}
                  baseUrl={this.state.image_base_url}
                  addReview={this.handleAddReview}
                  Rates={this.state.Rates}
                />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <SelectedCarousel
            products={items}
            text={this.state.text}

          /> 
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

const mapDispatchToProps = (dispatch) => {
  return {
    SignInMenu: () => {
      dispatch(SignInMenu());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
