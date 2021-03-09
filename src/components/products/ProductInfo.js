import React from "react";
import "../../stylesheets/ProductInfo.css";
import { Button, Row } from "reactstrap";

export default function ProductInfo({
  text,
  quan,
  handleAddQuan,
  handleRemoveQuan,
  AddToCart,
  SignInMenu,
}) {
  const HandleLike = () => {
    SignInMenu();
  };

  return (
    <div className="ProductInfo  px-4 ">
      <div className="d-flex justify-content-between align-content-center">
        <h2>Small Wallet</h2>

        <Button className="fav p-0 " onClick={HandleLike}>
          <i className="fas fa-heart  p-0"></i>
        </Button>
      </div>

      <h3 className="Productprice">
        615 AED
        <span className="ml-4">720 AED</span>
      </h3>

      <p className="mb-0"> {text.Colors}</p>
      <div>
        <div className="colors" style={{ backgroundColor: "black" }}></div>

        <div className="colors" style={{ backgroundColor: "red" }}></div>
        <div className="colors" style={{ backgroundColor: "blue" }}></div>
      </div>

      <div className="py-2">
        <p className="pr-5  inline">{text.Size}</p>
        <p className="inline">{text.SizeTable}</p>
        <Button className="size-btn px-4">
          {text.ChooseSize} <i className="fas fa-chevron-right"></i>
        </Button>
      </div>

      <div className="pt-3">
        <p> {text.Quantity} </p>

        <Row>
          <div className="w-50">
            <div className="Quan-btn px-4 my-4 mx-auto">
              <button
                onClick={handleRemoveQuan}
                className="quant-add-remove px-2 btn"
              >
                <i className="fas fa-minus"></i>
              </button>
              <p className="mb-0 py-1">{quan}</p>
              <button
                onClick={handleAddQuan}
                className="quant-add-remove px-2 btn"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="w-50">
            <Button
              className="add-to-card px-4 my-4 mx-auto"
              onClick={AddToCart}
            >
              {text.Add}
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
}
