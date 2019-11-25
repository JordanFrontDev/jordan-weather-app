import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const apiKey = 'AIzaSyAuQmUb8AjPJw91nYgLcGxyqapvqdhRsng';

const MapContainer = (props) => {
    const { latitude, longitude } = props.coords;

    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: latitude, lng: longitude }}

        >
            <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
    );
}


export default GoogleApiWrapper({
    apiKey: apiKey
})(MapContainer);