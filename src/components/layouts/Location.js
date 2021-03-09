import React, { Component } from "react";
import Map from "./Map";

export default class Location extends Component {
  render() {
    return (
      <div
        className="container  py-3 "
        style={{ maxWidth: "100%", position: "relative", display: "flex" }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            top: 100,
            padding: 20,
            right: 30,
            zIndex: 20,
            borderRadius: "8px",
            border: " solid 1px #707070 ",
            width: "200px",
          }}
          className="d-flex justify-content-center align-items-center  "
        >
          <div className="text-center">
            <p className="mb-1 " style={{ color: "#8c7049", fontSize: 27 }}>
              Dubai Festival City Mall{" "}
            </p>

            <p className="mb-1">
              Crescent Rd - Dubai Festival City - Dubai - United Arab Emirates
            </p>
            <small className="">Sunday open from 9 AM to 12 PM</small>
          </div>
        </div>

        <Map
          id="myMap"
          options={{
            center: { lat: 10, lng: 31.281559 },
            zoom: 8,
          }}
          onMapLoad={(map) => {
            var marker = new window.google.maps.Marker({
              position: {
                lat: 10,
                lng: 31.281559,
              },
              map: map,
              title: "Hello Istanbul!",
            });
          }}
        />
      </div>
    );
  }
}
