import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
const text = require("../../localization/AboutUs.json");

class AboutUs extends Component {
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

  componentDidUpdate(oldprops, oldstate) {
    if (oldprops !== this.props) {
      this.FetchLang();
    }
  }
  componentWillMount() {
    this.FetchLang();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Container
          className={
            "py-5 " +
            (this.state.text.Lang === "ar" ? " text-right" : "text-left")
          }
          style={{ color: "#8f8f8f" }}
        >
          <Row className="pb-5">
            <Col lg={12} md={12} sm={12}>
              <h1 className="pb-5 px-5 pt-2" style={{ color: "black" }}>
                {this.state.text.About}
              </h1>

              <p>
                Inspired by the iconic beauty and symmetry of the ever-elegant
                peacock, a bird celebrated for its colors, proud demeanor and
                extravagant and detailed eye-spotted tail, FEATHERS began the
                writing of a new story of style on October 10, 2010. The Emirati
                brand has the Arabic culture deeply rooted in its tale from the
                logo which was inspired by the traditional architectural
                patterns, motifs close to the heart of its creator an architect
                himself, to the designs that pay tribute to the Emirates proud
                and rich heritage. Combining luxury with aesthetics and
                reflecting the distinctive Emirati and Middle Eastern fashion,
                FEATHERS is the first Arabic Luxury brand to offer a full range
                of products from genuinely crafted leather goods, exquisite time
                pieces, writing instruments, fine jewelry, to captivating
                fragrances, accessories, sunglasses and top-of-the line shoes.
                Appealing to the young arabs, FEATHERS goods are coveted by the
                elite who want to make a bold statement by celebrating their
                love of luxury in the most arabic way. The exquisite designs
                embody the brand identity by playing up the intense details and
                color combinations that the brand became famous for. Khalid
                Basaeed, Founder of FEATHERS UAE, the first Emirati brand for
                luxury goods is an Emirati entrepreneur and a UAE University
                graduate, majoring in Architecture and holding a MSc degree in
                Urban Design from Edinburgh college of Art. His studies opened
                his eyes on product design which was one of the majors offered
                in college. Having noticed a gap in the market for Arabic
                identity in the luxury industry, Basaeed, displaying
                unparalleled vision decided to start his own business by
                establishing the 1st Emirati brand, and the rest is history.
                FEATHERS UAE first boutique opened in Abu Dhabi, the capital and
                precisely at the iconic Dalma Mall. Other shops followed and
                today the ever expanding brand has a strong presence in the
                following upscale shopping centers scattered around the country
              </p>

              <p>
                Inspired by the iconic beauty and symmetry of the ever-elegant
                peacock, a bird celebrated for its colors, proud demeanor and
                extravagant and detailed eye-spotted tail, FEATHERS began the
                writing of a new story of style on October 10, 2010.
              </p>

              <p>
                The Emirati brand has the Arabic culture deeply rooted in its
                tale from the logo which was inspired by the traditional
                architectural patterns, motifs close to the heart of its creator
                an architect himself, to the designs that pay tribute to the
                Emirates proud and rich heritage. Combining luxury with
                aesthetics and reflecting the distinctive Emirati and Middle
                Eastern fashion, FEATHERS is the first Arabic Luxury brand to
                offer a full range of products from genuinely crafted leather
                goods, exquisite time pieces, writing instruments, fine jewelry,
                to captivating fragrances, accessories, sunglasses and
                top-of-the line shoes.
              </p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col lg={12} md={12} sm={12}>
              <h2 style={{ color: "black" }}>{this.state.text.Mission}</h2>

              <p className="py-3">
                Cras gravida bibendum dolor eu varius. Morbi fermentum velit
                nisl, eget vehicula lorem sodales eget. Donec quis volutpat
                orci. Sed ipsum felis, tristique id egestas et, convallis ac
                velit. In consequat dolor libero, nec luctus orci rutrum nec.
                Phasellus vel arcu sed nibh ornare accumsan. Vestibulum in
                elementum erat. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Aenean laoreet rhoncus ipsum eget tempus. Praesent
                convallis fermentum sagittis.
              </p>
            </Col>
          </Row>

          <Row className="pb-5">
            <Col lg={12} md={12} sm={12}>
              <h2 style={{ color: "black" }}>{this.state.text.Vision} </h2>
              <p className="py-3">
                Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
                consectetur et luctus et, porta ut dolor. Curabitur ultricies
                ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
                consectetur diam. Maecenas vitae egestas dolor. Fusce tempor
                magna at tortor aliquet finibus. Sed eu nunc sit amet elit
                euismod faucibus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Duis
                gravida eget neque vel vulputate.
              </p>
            </Col>
          </Row>

          <Row>
            {[1, 2, 3, 4].map((img) => (
              <Col lg={3} md={3} sm={12} className="mb-3">
                <img
                  style={{ borderRadius: "10px" }}
                  src={require("../../imgs/khalid.png")}
                  className="img-fluid mx-auto"
                  alt="Mr.khalid The Owner "
                />
              </Col>
            ))}
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

export default connect(mapStateToProps)(AboutUs);
