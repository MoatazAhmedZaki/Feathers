import React, { Component } from "react";

import HomeHeader from "../home-components/HomeHeader.js";
import TopCollections from "../home-components/TopCollections.js";
import SelectedCarousel from "../home-components/SelectedCarousel.js";
import ChooseUs from "../home-components/ChooseUs.js";

import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import img1 from "../../imgs/item1.bmp";
import img2 from "../../imgs/item2.bmp";
import img3 from "../../imgs/item3.bmp";
import img4 from "../../imgs/item4.bmp";
import img5 from "../../imgs/item5.bmp";

const text = require("../../localization/Home.json");

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

class Home extends Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
      <div className="home-page">
        <HomeHeader text={this.state.text} />

        <TopCollections text={this.state.text} NewArrivals={items} />

        <Container>
          <SelectedCarousel
            products={items}
            text={this.state.text}
            Selected={true}
          />
        </Container>

        <ChooseUs text={this.state.text} />

        <Container>
          <SelectedCarousel
            products={items}
            text={this.state.text}
            Selected={false}
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

export default connect(mapStateToProps)(Home);
