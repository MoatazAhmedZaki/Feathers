import React, { Component } from "react";
import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import "../../stylesheets/ProfilePage2.css";
import MyOrdersList from "../profile2/MyOrdersList";
import MyNotificationsList from "../profile2/MyNotificationsList";
import MyAddressesList from "../profile2/MyAddressesList";
import MyAccount from "../profile2/MyAccount";
import { connect } from "react-redux";
import { UserSignOut } from "../../store/actions/authActions";
import { UserSignIn } from "../../store/actions/authActions";

import MyPassword from "../profile2/MyPassword";
import NormalProductCard from "../products/NormalProductCard";

import img1 from "../../imgs/item1.bmp";
import img2 from "../../imgs/item2.bmp";
import img3 from "../../imgs/item3.bmp";
import img4 from "../../imgs/item4.bmp";
import img5 from "../../imgs/item5.bmp";
import ProfPic from "../../imgs/pp.png";

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

const text = require("../../localization/ProfilePage.json");

class ProfilePage2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
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
    window.scrollTo(0, 0);
    this.FetchLang();
  }

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }

  render() {
    return (
      <div className="ProfilePage">
        <Container className="py-5">
          <Row className="mb-4">
            <Col lg={2} md={4} xs={12} className="text-center">
              <img
                className="img-fluid mx-auto rounded"
                src={ProfPic}
                alt="User Pic"
              />
            </Col>

            <Col lg={10} md={9} xs={12}>
              <div className="py-5">
                <p>
                  <i class="far fa-user"></i>{" "}
                  <span className="px-2"> Hello,</span>
                  User Name{" "}
                </p>
              </div>

              <Button
                variant="my"
                className="profile-logout-btn d-flex align-items-center "
                onClick={this.logOut}
              >
                <i class="fas fa-power-off mx-2"></i> {this.state.text.LogOut}
              </Button>
            </Col>
          </Row>

          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row>
                <Col
                  sm={2}
                  className="setting-holder1 setting-holder p-0 mb-4 "
                >
                  <Nav variant="pills" className="flex-column  ">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="1"
                        className="d-flex align-items-center"
                      >
                        Orders
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="2"
                        className="d-flex align-items-center"
                      >
                        Addresses
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        eventKey="3"
                        className="d-flex align-items-center"
                      >
                        Favourites
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        eventKey="4"
                        className="d-flex align-items-center"
                      >
                        {this.state.text.Profile}
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link
                        eventKey="5"
                        className="d-flex align-items-center"
                      >
                        Notifications
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10} className="mb-4">
                  <Tab.Content className=" setting-holder  pb-4 container">
                    <Tab.Pane eventKey="1">
                      <MyOrdersList Orders={this.state.Orders} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="2">
                      <MyAddressesList />
                    </Tab.Pane>

                    <Tab.Pane eventKey="3">
                      <Row>
                        {items.map((product, i) => (
                          <Col md={4} sm={12}>
                            <NormalProductCard product={product} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="4">
                      <h2 className="pb-3 d-flex">General Information</h2>
                      <MyAccount text={this.state.text} />
                      <h2 className="pb-3 d-flex">Change Password</h2>

                      <MyPassword text={this.state.text} />
                    </Tab.Pane>

                    <Tab.Pane eventKey="5">
                      <MyNotificationsList
                        Notifications={this.state.Notifications}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
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
    UserSignIn: (user) => {
      dispatch(UserSignIn(user));
    },
    UserSignOut: () => {
      dispatch(UserSignOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage2);
