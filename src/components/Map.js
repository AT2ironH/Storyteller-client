import React, { Component } from "react";
import {
  MapContainer,
  MapConsumer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyComponent(props) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}

class Map extends Component {
  state = {
    position: [11.267489, -74.191023],
  };

  componentDidUpdate() {
    if (this.props.lat !== this.state.position[0]) {
      this.setState({
        position: [this.props.lat, this.props.lon],
      });
    }
  }

  render() {
    const { position } = this.state;
    // props has lat & log

    // update position = [lat, lng]
    console.log(this.state.position);
    return (
      <div id={"asd" + position[0]}>
        <MapContainer
          style={{ width: "350px", height: "250px" }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <MyComponent center={position} zoom={13} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}
export default Map;
