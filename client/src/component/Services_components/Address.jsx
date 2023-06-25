import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

export const Address = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyDdCkJE1wJE4LTG_Pm2YariR_gfEOKW2h8'})

    if(!isLoaded) return <div>Loading ...</div>
    return <Map/>
}

function Map() {
    return <GoogleMap 
            zoom={10} center={{lat: 44, lng: -80}} 
            mapContainerClassName="map-container"
            >
            <Marker position={{lat:44, lng: -80}}/>
            </GoogleMap>
}