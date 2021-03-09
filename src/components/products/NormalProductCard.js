import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/NormalProductCard.css";

import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import { SignInMenu } from "../../store/actions/Menu";


function NormalProductCard({ product, SignInMenu }) {
  return (
    <div className="NormalProductCardHolder">
      <div className="NormalProductCard py-2 ">
        <Link to={`/Product/${product.id}`}>
          <div
            className="NormalProductCard-bg"
            style={{
              backgroundImage: `url(${product.img})`,
            }}
          >
            {product.discount === false ? null : (
              <div className="sale ">{product.percentage}%</div>
            )}
          </div>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="product-title m-0 pt-3 px-1 ">{product.Caption}</p>

            <p className="product-price px-1 ">
              {product.price}

              {product.discount === false ? null : (
                <span className="pl-3">{product.price2}</span>
              )}
            </p>
          </div>

          <Button className="fav p-0 " onClick={SignInMenu}>
            <i
              className={
                "fas fa-heart   p-0 " + (product.fav === true ? "like" : "")
              }
            ></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignInMenu: () => {
      dispatch(SignInMenu());
    },
  };
};
const mapStateToProps = (state, ownprops) => {
  return {
    lan: state.lan,
    user: state.auth,
    user2: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalProductCard);
