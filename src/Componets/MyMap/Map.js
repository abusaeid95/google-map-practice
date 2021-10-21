import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const Map = () => {
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyBSojCgFVh4Jman1U6A5-3AzI80mg65IaM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default Map;