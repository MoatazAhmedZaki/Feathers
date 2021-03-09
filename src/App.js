import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navb from "./components/layouts/Navb";

import Home from "./components/mainPages/Home";
import Footer from "./components/layouts/Footer";
import AboutUs from "./components/mainPages/AboutUs";
import Products from "./components/mainPages/Products";
import ContactUs from "./components/mainPages/ContactUs";
import ProductDetails from "./components/mainPages/ProductDetails";
import ShoppingPage from "./components/mainPages/ShoppingPage";
// import Profile from "./components/mainPages/ProfilePage";
import Profile from "./components/mainPages/ProfilePage2";

import PrivacyPolicy from "./components/mainPages/PrivacyPolicy";

import ShippingAndDelivery from "./components/mainPages/ShippingAndDelivery";

import PaymentOptions from "./components/mainPages/PaymentOptions";
import GiftCards from "./components/mainPages/GiftCards";
// import SignUpPage from "./components/mainPages/SignUpPage";
import RefundPolicy from "./components/mainPages/RefundPolicy";

// import UserLocation from "./components/auth/UserLocation";

import { connect } from "react-redux";
// import Sidebar from "./components/layouts/Sidebar";
// import Pages from "./components/DashBoardPages/Pages";
// import DashBoardHome from "./components/DashBoardPages/DashBoardHome";

import { UserSignIn } from "./store/actions/authActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "ltr",
    };
  }

  render() {
    const Website = ({ match }) => {
      return (
        // <Switch>
        <div>
          {/* <Route path={match.url} exact={true} component={HomeDefaultComponent} /> */}
          <Navb url={match.url} />
          {/* <Nav2/> */}
          {/* <HashRouter> */}

          <Route exact={true} path="/" component={Home} />
          <Route path={`/AboutUs`} component={AboutUs} />
          <Route exact path={`/Products/:category`} component={Products} />
          <Route exact path={`/ContactUs`} component={ContactUs} />
          <Route exact path={`/Product/:id`} component={ProductDetails} />
          <Route exact path={`/ShoppingCart`} component={ShoppingPage} />
          <Route exact path={`/PrivacyPolicy`} component={PrivacyPolicy} />
          <Route exact path={`/Profile`} component={Profile} />
          <Route
            exact
            path={`/ShippingAndDelivery`}
            component={ShippingAndDelivery}
          />
          <Route exact path={`/PaymentOptions`} component={PaymentOptions} />
          <Route exact path={`/GiftCards`} component={GiftCards} />
          {/* <Route
            exact
            path={`/SignUpPage`}
            component={SignUpPage}
          /> */}
          <Route exact path={`/RefundPolicy`} component={RefundPolicy} />
          {/* </HashRouter> */}

          <Footer />
        </div>
      );
    };

    // const Dashboard = ({ match }) => {
    //   return (
    //     <div>
    //       <Route path="/DashBoard" component={Sidebar} />
    //       <div className="d-flex justify-content-end ">
    //         <div className="w-90 bg-primary px-3">
    //           <Route exact path="/DashBoard/Home" component={DashBoardHome} />
    //           <Route exact path="/DashBoard/Pages" component={Pages} />
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <HashRouter basename="/">
        {/* <Router> */}
        <div
          className="App"
          dir={this.props.lan === "ar" ? "rtl" : "ltr"}
          // dir="rtl"
        >
          <div className={this.props.lan === "ar" ? "ar" : "en"}>
            {/* <UserLocation/> */}
            <Switch>
              <Route path="/" component={Website} />
              {/* <Route path="/DashBoard/:Pages" component={Dashboard} /> */}
            </Switch>
          </div>
        </div>
        {/* </Router> */}
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserSignIn: (user) => {
      dispatch(UserSignIn(user));
    },
  };
};

const mapStateToProps = (state, ownprops) => {
  // console.log("ownprops");

  // console.log(ownprops);
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
