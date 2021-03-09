import React, { Component } from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Container,
  // Pagination,
  Form,
} from "react-bootstrap";
import {
  Collapse,
  Button,
  Card,
  CardBody,
  CustomInput,
  FormGroup,
} from "reactstrap";
import InputRange from "react-input-range";

import NormalProductCard from "../products/NormalProductCard.js";

import "../../stylesheets/Productsfilter.css";
import "react-input-range/lib/css/index.css";
import ReactPaginate from "react-paginate";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../imgs/item1.bmp";
import img2 from "../../imgs/item2.bmp";
import img3 from "../../imgs/item3.bmp";
import img4 from "../../imgs/item4.bmp";
import img5 from "../../imgs/item5.bmp";
const text = require("../../localization/Products.json");

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

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      collapse1: true,
      collapse2: true,
      collapse3: true,
      collapse4: true,
      collapse5: true,
      value: { min: 2, max: 10 },

      currentPage: 1,
      text: "",
    };
  }

  toggle = (e) => {
    this.setState({ [e.target.id]: !this.state[e.target.id] });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
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
      <div className="products ">
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
          </Breadcrumb>
          <Container fluid>
            <Row>
              <Col lg={3} md={3} sm={12}>
                <Button
                  id="collapse1"
                  onClick={this.toggle}
                  className="toggle-title d-flex justify-content-between align-items-center"
                >
                  {this.state.text.Categories}

                  {this.state.collapse1 ? (
                    <i className="fas fa-chevron-up float-right  pt-1"></i>
                  ) : (
                    <i className="fas fa-chevron-down float-right  pt-1"></i>
                  )}
                </Button>
                <div className="clearfix"></div>

                <Collapse isOpen={this.state.collapse1} className="mb-3">
                  <Card>
                    <CardBody>
                      <Form>
                        <FormGroup>
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox1"
                            label="T-Shirts (411)"
                          />
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox2"
                            label="Sweatshirts (131)"
                          />
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox3"
                            label="Tank Tops (56)"
                          />
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox4"
                            label="Dress shirts (8)"
                          />
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>

                <Button
                  id="collapse2"
                  onClick={this.toggle}
                  className="toggle-title d-flex justify-content-between align-items-center"
                >
                  {this.state.text.Price}

                  {this.state.collapse2 ? (
                    <i className="fas fa-chevron-up float-right  pt-1"></i>
                  ) : (
                    <i className="fas fa-chevron-down float-right  pt-1"></i>
                  )}
                </Button>
                <div className="clearfix"></div>

                <Collapse
                  isOpen={this.state.collapse2}
                  className="mb-3"
                  dir="ltr"
                >
                  <Card>
                    <CardBody>
                      <form className="myform">
                        <InputRange
                          formatLabel={(value) => `${value} $`}
                          maxValue={20}
                          minValue={0}
                          value={this.state.value}
                          onChange={(value) => this.setState({ value: value })}
                        />
                      </form>
                    </CardBody>
                  </Card>
                </Collapse>

                <Button
                  id="collapse5"
                  onClick={this.toggle}
                  className="toggle-title d-flex justify-content-between align-items-center"
                >
                  {this.state.text.Collection}

                  {this.state.collapse5 ? (
                    <i className="fas fa-chevron-up float-right  pt-1"></i>
                  ) : (
                    <i className="fas fa-chevron-down float-right  pt-1"></i>
                  )}
                </Button>
                <div className="clearfix"></div>

                <Collapse isOpen={this.state.collapse5} className="mb-3">
                  <Card>
                    <CardBody>collection body</CardBody>
                  </Card>
                </Collapse>

                <Button
                  id="collapse3"
                  onClick={this.toggle}
                  className="toggle-title d-flex justify-content-between align-items-center"
                >
                  {this.state.text.Size}

                  {this.state.collapse3 ? (
                    <i className="fas fa-chevron-up float-right  pt-1"></i>
                  ) : (
                    <i className="fas fa-chevron-down float-right  pt-1"></i>
                  )}
                </Button>
                <div className="clearfix"></div>

                <Collapse isOpen={this.state.collapse3} className="mb-3">
                  <Card>
                    <CardBody>
                      <Form inline>
                        <Form.Group controlId="XS">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="XS"
                            label="XS"
                            onClick={this.SelectType}
                          />
                        </Form.Group>

                        <Form.Group controlId="S">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="S"
                            label="S"
                            onClick={this.SelectType}
                          />
                        </Form.Group>

                        <Form.Group controlId="M">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="M"
                            label="M"
                            onClick={this.SelectType}
                          />
                        </Form.Group>

                        <Form.Group controlId="L">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="L"
                            label="L"
                            //   label={icon2}
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                        <Form.Group controlId="XL">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="XL"
                            label="XL"
                            onClick={this.SelectType}
                          />
                        </Form.Group>

                        <Form.Group controlId="XLL">
                          <Form.Check
                            type="radio"
                            name="color"
                            value="XLL"
                            label="XLL"
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>

                <Button
                  id="collapse4"
                  onClick={this.toggle}
                  className="toggle-title d-flex justify-content-between align-items-center"
                >
                  {this.state.text.Color}
                  {this.state.collapse4 ? (
                    <i className="fas fa-chevron-up float-right  pt-1"></i>
                  ) : (
                    <i className="fas fa-chevron-down float-right  pt-1"></i>
                  )}
                </Button>
                <div className="clearfix"></div>
                <Collapse isOpen={this.state.collapse4} className="mb-3">
                  <Card>
                    <CardBody>
                      <Form inline className="colors">
                        <Form.Group controlId="black">
                          <Form.Check
                            className="black"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>

                        <Form.Group controlId="brown">
                          <Form.Check
                            className="brown"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                        <Form.Group controlId="brown2">
                          <Form.Check
                            className="brown2"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                        <Form.Group controlId="gray">
                          <Form.Check
                            className="gray"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                        <Form.Group controlId="white">
                          <Form.Check
                            className="white"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                        <Form.Group controlId="blue">
                          <Form.Check
                            className="blue"
                            type="radio"
                            name="color"
                            value="brown"
                            label=""
                            onClick={this.SelectType}
                          />
                        </Form.Group>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>

              <Col lg={9} md={9} sm={12}>
                <Row>
                  <Col lg={5} md={5} sm={12}>
                    <h2
                      className={
                        this.state.text.Lang === "ar"
                          ? " text-right"
                          : "text-left"
                      }
                    >
                      All
                      <span> (133)</span>
                    </h2>
                  </Col>
                  <Col lg={7} md={7} sm={12}>
                    <Form inline>
                      <p className="px-4 my-0">
                        {this.state.text.ShowProducts}
                      </p>
                      <Form.Control as="select" className="select-input">
                        <option value="featured">featured </option>
                        <option value="rating">rating </option>
                        <option value="top_selling">top_selling</option>
                        <option value="discount">discount</option>
                        <option value="price">price</option>
                      </Form.Control>
                      <p className="px-4 my-0"> {this.state.text.Sort} </p>
                      <Form.Control as="select" className="select-input">
                        <option value="ASC">A-Z</option>
                        <option value="DESC">Z-A</option>
                      </Form.Control>
                    </Form>
                  </Col>
                </Row>

                <Row>
                  {items.map((product) => (
                    <Col lg={4} md={6} sm={12}>
                      <NormalProductCard
                        product={product}
                        Lang={this.state.text.Lang}
                      />
                    </Col>
                  ))}
                </Row>

                <Container fluid>
                  <Row>
                    <Col
                      lg={{ span: "8", offset: "4" }}
                      md={6}
                      sm={6}
                      className=" py-5"
                    >
                      <Row>
                        <ReactPaginate
                          pageClassName={"page-item"}
                          pageLinkClassName={"page-link"}
                          previousLabel={this.state.text.Prev}
                          nextLabel={this.state.text.Next}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={3}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          // onPageChange={this.handlePageClick}
                          containerClassName={
                            "pagination mx-auto w-100 d-flex justify-content-center"
                          }
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
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

export default connect(mapStateToProps)(Products);
