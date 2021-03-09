import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../stylesheets/Home-Header.css";
import { Row, Col } from "react-bootstrap";
import NormalProductCard from "../products/NormalProductCard";
import "../../stylesheets/SelectedCarousel.css";

import { Link } from "react-router-dom";

export default class SelectedCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      fade: false,
      // rtl:true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="SelectedCarousel py-4">
        {this.props.Selected !== false ? (
          <Row className="py-3 px-3 ">
            <Col lg={10} md={10} sm={12}>
              <p
                className={
                  " selected-text " +
                  (this.props.text.Lang === "ar" ? " text-right" : "text-left")
                }
              >
                {this.props.text.SelectedJustForYou}
              </p>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <Link to="/Products/All">
                <button className="show-more-btn">
                  {this.props.text.ShowMore}
                </button>
              </Link>
            </Col>
          </Row>
        ) : (
          <p className=" selected-text text-center">
            {this.props.text.ProductsInToday}
          </p>
        )}

        <Slider {...settings}>
          {this.props.products.map((product) => (
            <div className="px-2" key={product.id}>
              <NormalProductCard
                product={product}
                // imgBase={this.props.apiData}
                Lang={this.props.text.Lang}
                // Update={this.props.Update}
                // CurrencyInfo={this.props.CurrencyInfo}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
