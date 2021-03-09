import React, { Component } from "react";
import MyNotificationsItem from "./MyNotificationsItem";

export default class MyNotificationsList extends Component {
  render() {
    return (
      <div>
        {[1, 2, 3].map((info) => (
          <MyNotificationsItem info={info} />
        ))}
      </div>
    );
  }
}
