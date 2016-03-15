import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default (props) => {
    return (
        <div>
            <GoogleMapLoader
                container={
                <div style="{{height: '100%'}}"></div>
                }
                googleMapElement={
                  <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{lat: props.lat, lng: props.lon}}>
                  </GoogleMap>
                }
            />
        </div>
    );
}