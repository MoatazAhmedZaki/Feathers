import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../stylesheets/Home-Header.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderImg1 from "../../imgs/homerHeader.bmp";

import headerImg2 from "../../imgs/homehader2.jpg";

export default class HomeHeader extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
    };
    return (
      <Slider {...settings} className="Home-Header">
        {[HeaderImg1, headerImg2].map((slide, i) => (
          <div>
            <div
              style={{
                backgroundImage: `url(${slide})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100vh",
              }}
              className={
                "d-flex justify-content-start align-items-center " +
                (this.props.text.Lang === "ar" ? " text-right" : "text-left")
              }
            >
              <Col sm={9} className="mx-auto">
                <div className="slider-caption">
                  {this.props.text.Lang === "en" ? (
                    <h2> Sale of the summer collection {i + 1} </h2>
                  ) : (
                    <h1> {i + 1} تخفيضات علي المنتجات الصيفية </h1>
                  )}
                  {this.props.text.Lang === "en" ? (
                    <p> Sale of the summer collection {i + 1} </p>
                  ) : (
                    <p> {i + 1} تخفيضات علي المنتجات الصيفية </p>
                  )}

                  {this.props.text.Lang === "en" ? (
                    <Link
                      to={`/Product/${i + 1}`}
                      className="slider-btn"
                    >
                      <i className="fas fa-arrow-circle-right pr-2"></i> Shop
                      now
                    </Link>
                  ) : (
                    <Link
                      to={`/Product/${slide.id}`}
                      className="slider-btn"
                    >
                      تسوق الان
                      <i className="fas fa-arrow-circle-left pl-2"></i>
                    </Link>
                  )}
                </div>
              </Col>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
