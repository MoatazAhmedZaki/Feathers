import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/ProductHomeCard.css";

export default function ProductHomeCard({item, text}) {
  return (
    <div
      className="ProductHomeCard my-2 "
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "370px",
      }}
    >
      <div className="ProductHomeCard-Content">
        <p className="ProductHomeCard-pragh">{item.Caption}</p>

        <Link to={`/Product/1`} >
        <button className="ProductHomeCard-btn"> {text.ShowProduct}</button>
        </Link>
      </div>
    </div>
  );
}
