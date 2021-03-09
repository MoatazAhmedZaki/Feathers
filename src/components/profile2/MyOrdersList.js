import React, { Component } from "react";
import MyOrdersitem from "./MyOrdersitem";

export default class MyOrdersList extends Component {
  render() {
    return (
      <div>
        {[1, 2, 3].map((info) => (
          <MyOrdersitem info={info} />
        ))}
      </div>
    );
  }
}
