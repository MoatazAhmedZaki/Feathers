import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../stylesheets/ProductDetailsCarousel.css";

import img1 from "../../imgs/wallet1.jpg";
import img2 from "../../imgs/wallet2.jpg";
import img3 from "../../imgs/wallet3.jpg";

export default class ProductCar extends Component {
  render() {
    const images = [
      {
        original: img1,
        thumbnail: img1,
      },
      {
        original: img2,
        thumbnail: img2,
      },
      {
        original: img3,
        thumbnail: img3,
      },
    ];

    return (
      <div>
        <div className="salee" style={{ height: "100%" }}>
          <div className="sale1" discount="10%">
            <ImageGallery items={images} thumbnailPosition="left" />
          </div>
        </div>
      </div>
    );
  }
}
