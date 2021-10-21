import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const location = {
    lat: 23.777758,
    lng: 90.405739
};

const Directional = ({origin, destination}) => {
    const [response, setResponse] = useState(null)
    const directionsCallback = (res) => {
        if (res !== null) {
            setResponse(res);
        }

    }
    return (
        <div>
            <LoadScript
                googleMapsApiKey='AIzaSyBSojCgFVh4Jman1U6A5-3AzI80mg65IaM'
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    // required
                    zoom={14}
                    // required
                    center={location}
                >

                    <DirectionsService
                        // required
                        options={{
                            destination: origin,
                            origin: destination,
                            travelMode: "DRIVEING"
                        }}
                        // required
                        callback={directionsCallback}
                    />


                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Directional;