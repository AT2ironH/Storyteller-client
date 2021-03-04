import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



class Map extends Component {

    render() {

        const position = [11.267489, -74.191023]


        return (
            <div>
               

                    <MapContainer style={{width: '350px', height: '250px'}}  center={position} zoom={13} scrollWheelZoom={false}>
                
                        <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker  position={position}>
                        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
                        </Marker>

                    </MapContainer>

                   
            </div>
        )
    }
}

export default Map;