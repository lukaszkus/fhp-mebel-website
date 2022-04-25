import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  initial = {
    lat: 50.08268,
    lng: 19.9214,
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "79%", top: "-50px" }}
        initialCenter={this.initial}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAP_API_KEY,
})(MapContainer);
