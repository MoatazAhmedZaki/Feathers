import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Modal,
  Dropdown,
  Row,
} from "react-bootstrap";

import "../../stylesheets/Navb.css";
import { Link, withRouter } from "react-router-dom";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import ResetPassword from "../auth/ResetPassword";
import VerifyPhone from "../auth/VerifyPhone";

import { connect } from "react-redux";
import { changeLang } from "../../store/actions/changeLang";

/////menu////
import { SignInMenu } from "../../store/actions/Menu";
import { SignUpMenu } from "../../store/actions/Menu";
import { verifyPhone } from "../../store/actions/Menu";
import { forgetMenu } from "../../store/actions/Menu";

////

import { UserSignIn } from "../../store/actions/authActions";

import { UserSignOut } from "../../store/actions/authActions";



const text = require("../../localization/NavB.json");

class Navb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      megaMenu: false,
      signInMenu: false,
      signUpMenu: false,
      forgetMenu: false,
      passwordType: false,
      verifyPhone: false,
      text: "",
      categories: "",
      navBackground: true,
    };
  }

  changeLang = (e) => {
    e.preventDefault();
    if (e.target.id === "ar") {
      this.setState({ text: text.AR });
    } else if (e.target.id === "en") {
      this.setState({ text: text.EN });
    }
    this.props.changeLang(e.target.id);
  };

  componentWillMount() {
    if (this.props.lan === "ar") {
      this.setState({ text: text.AR });
    } else {
      this.setState({ text: text.EN });
    }
  }

  megaMenu = (e) => {
    this.setState({ megaMenu: !this.state.megaMenu });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 150 ? true : false;

      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
   

    const location =
      this.props.location.pathname === this.props.url
        ? "trans-navbar"
        : "black-navbar";

    return (
      <div
        //  className={`my-navbar ${location}`}
        className={
          `my-navbar  ${location} ` +
          (this.state.navBackground
            ? " trans-navbar"
            : ` black-navbar ${
                location === "trans-navbar" ? "staticNav" : null
              } `)
        }
      >
        <div className=" mx-auto">
          <Container>
            <Navbar variant="dark" className="nav-text" expand="lg">
              <Navbar.Brand href="/" className="py-3">
                <img
                  src={require("../../imgs/logo.svg")}
                  style={{ width: "173px", height: "115px" }}
                  alt="Finest-Quality"
                />
              </Navbar.Brand>

              <div className="search  search-none">
                <input
                  type="text"
                  placeholder=" "
                  onKeyDown={this.HandleSearch}
                />
                <div>
                  <svg>
                    <use href="#path" />
                  </svg>
                </div>
              </div>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link to="/" className="nav-link">
                    {/* Home */}
                    {this.state.text.HomeLink}
                  </Link>

                  <Link to="/AboutUs" name="test" className="nav-link">
                    {this.state.text.AboutUsLink}
                  </Link>

                  <Link
                    to={{
                      pathname: `/Products/All`,
                    }}
                    onMouseEnter={this.megaMenu}
                    className="nav-link search-block"
                  >
                    {this.state.text.ProductsLink}
                  </Link>

                  <div class=" dropdown search-none ">
                    <a
                      class="nav-link "
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.text.ProductsLink}
                    </a>
                    <div
                      class="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <div class="container">
                        <div class="row">
                          {["Men", "Women", "children", "Accessories"].map(
                            (cat, i) => (
                              <Col lg={3} md={3} xs={12} className=" ">
                                <div>
                                  <p className="megaMeny-title">{cat}</p>
                                  <ul>
                                    {[
                                      "Type 1",
                                      "Type 2",
                                      "Type 3",
                                      "Type 4",
                                    ].map((child) => (
                                      <li>
                                        <Link
                                          to={{
                                            pathname: `/Products/1`,
                                          }}
                                        >
                                          {child}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </Col>
                            )
                          )}
                        </div>
                      </div>
                      {/* <!--  /.container  --> */}

                      {/* <div className="holder"></div> */}
                    </div>
                  </div>

                  <Link to="/ContactUs" className="nav-link">
                    {this.state.text.ContactUsLink}
                  </Link>
                </Nav>
                {/* <form onKeyDown={this.HandleSearch}> */}
                <div className="search  search-block ">
                  <input
                    type="text"
                    placeholder=" "
                    onKeyDown={this.HandleSearch}
                  />
                  <div>
                    {/* onSubmit={this.HandleSearch} */}
                    <svg>
                      <use href="#path" />
                    </svg>
                  </div>
                </div>
                {/* </form> */}

                {/* <button className="nav-link navbtn" onClick={this.handleSignIn}>
                  <i className="far fa-user"></i>{" "}
                </button> */}
                {/* <Link className="nav-link">
                  <i className="fas fa-sign-in-alt "></i>
                </Link> */}

                {this.props.user.isLogin === true ? (
                  <Dropdown className="d-blo">
                    <Dropdown.Toggle
                      variant="profile-dropmMenu"
                      id="dropdown-basic"
                    >
                      {this.props.user.user.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="Profile" class="dropdown-item">
                        Profile
                      </Link>
                      <Dropdown.Item onClick={this.logOut}>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <button
                    className="nav-link navbtn d-blo"
                    onClick={this.props.SignInMenu}
                  >
                    <i className="far fa-user" style={{ fontSize: "20px" }}></i>
                  </button>
                )}

                <Link to="/ShoppingCart" className="nav-link d-blo">
                  {/* <i className="fas fa-shopping-bag"></i> */}
                  <i
                    class="fas fa-shopping-cart"
                    style={{ fontSize: "20px" }}
                  ></i>
                </Link>

                {this.props.lan === "en" ? (
                  <a
                    href="/"
                    id="ar"
                    className="nav-link d-blo py-0"
                    style={{ fontSize: "18px" }}
                    onClick={this.changeLang}
                  >
                    AR
                  </a>
                ) : (
                  <a
                    href="/"
                    id="en"
                    className="nav-link d-blo py-0"
                    style={{ fontSize: "18px" }}
                    onClick={this.changeLang}
                  >
                    EN
                  </a>
                )}

                <svg xmlns="http://www.w3.org/2000/svg" className="svg">
                  <symbol xmlns="http://www.w3.org/2000/svg" id="path">
                    <path
                      d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
                      transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
                    ></path>
                  </symbol>
                </svg>
              </Navbar.Collapse>

              {/* <Button onClick={this.setUser}>test</Button> */}
            </Navbar>
          </Container>
        </div>

        {this.state.megaMenu ? (
          <div className="megaMenu">
            <div className="megaMenu-holder " onMouseLeave={this.megaMenu}>
              <Container fluid>
                <Col lg={6} md={6} sm={12} className="mx-auto">
                  <div className="mega-slider ">
                    <Row className="mx-auto py-5">
                      {["Men", "Women", "children", "Accessories"].map(
                        (cat, i) => (
                          <Col lg={3} md={3} xs={12} className=" ">
                            <div>
                              <p className="megaMeny-title">{cat}</p>
                              <ul>
                                {["Type 1", "Type 2", "Type 3", "Type 4"].map(
                                  (child) => (
                                    <li>
                                      <Link
                                        to={{
                                          pathname: `/Products/1`,
                                        }}
                                      >
                                        {child}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </Col>
                        )
                      )}
                    </Row>
                  </div>
                  {/* </Slider> */}
                </Col>
              </Container>
            </div>
          </div>
        ) : null}

        <Modal show={this.props.menu.SignInMenu} onHide={this.props.SignInMenu}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body className={this.props.lan === "ar" ? "ar" : "en"}>
            <SignIn
              handleForget={this.props.forgetMenu}
              handleSignUp={this.props.SignUpMenu}
              handleSignIn={this.props.SignInMenu}
              handlverifyPhoneView={this.props.verifyPhone}
            />
          </Modal.Body>
        </Modal>

        <Modal show={this.props.menu.SignUpMenu} onHide={this.props.SignUpMenu}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body className={this.props.lan === "ar" ? "ar" : "en"}>
            <SignUp
              signin={true}
              // passwordType={this.state.passwordType}
              // handlPasswordView={this.handlPasswordView}
              handlverifyPhoneView={this.props.verifyPhone}
              handleSignIn={this.props.SignInMenu}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.menu.verifyPhone}
          onHide={this.props.verifyPhone}
        >
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body className={this.props.lan === "ar" ? "ar" : "en"}>
            <VerifyPhone handlverifyPhoneView={this.props.verifyPhone} />
          </Modal.Body>
        </Modal>

        <Modal show={this.props.menu.forgetMenu} onHide={this.props.forgetMenu}>
          <Modal.Header closeButton className="text-center"></Modal.Header>
          <Modal.Body className={this.props.lan === "ar" ? "ar" : "en"}>
            <ResetPassword handleForget={this.props.forgetMenu} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    // posts:state.posts
    user: state.auth,
    user2: state.auth,
    menu: state.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lan) => {
      dispatch(changeLang(lan));
    },
    UserSignIn: (user) => {
      dispatch(UserSignIn(user));
    },
    UserSignOut: () => {
      dispatch(UserSignOut());
    },
    SignInMenu: () => {
      dispatch(SignInMenu());
    },
    SignUpMenu: () => {
      dispatch(SignUpMenu());
    },

    verifyPhone: () => {
      dispatch(verifyPhone());
    },

    forgetMenu: () => {
      dispatch(forgetMenu());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navb));
