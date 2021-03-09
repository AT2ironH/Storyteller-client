import React, { Component } from "react";
import {
  MapContainer,
  MapConsumer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import AllStories from "./AllStories";



function MyComponent(props) {
  const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}

class Map2 extends Component {
  state = {
    position: [44.7866, 20.4489],
  };

  //   componentDidUpdate() {
  //     if (this.props.lat && this.props.lat !== this.state.position[0]) {
  //       this.setState({
  //         position: [this.props.lat, this.props.lon],
  //       });
  //     }
  //   }

  render() {
    let myIcon = new L.Icon({
      iconUrl: "mapPin.png",
      iconSize: [33, 43],
    });
    const { position } = this.state;
    // props has lat & log

    // update position = [lat, lng]
    console.log(this.state.position);
    return (
      <div id={"asd" + position[0]}>
        <MapContainer
          style={{ width: "340px", height: "250px" }}
          center={position}
          zoom={1}
          scrollWheelZoom={false}
        >
          <MyComponent center={position} zoom={1} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.stories.map((story) => {
            return (
              <Marker
                icon={myIcon}
                position={[story.location.lat, story.location.lon]}
              >
                <Popup>
                  this is a cool popup <br /> Easily customizable. //we can put
                  a name of the user who made this popup and the location of the
                  popup
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    );
  }
}
export default Map2;
