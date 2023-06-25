/* eslint-disable no-undef */
import React from "react";
import {GoogleMap, useLoadScript, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api"
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {CiLocationArrow1} from 'react-icons/ci'
import { useRef } from "react";

export const Address = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDdCkJE1wJE4LTG_Pm2YariR_gfEOKW2h8',
        libraries: ['places']
    })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState(null)
    const [duration, setDuration] = useState(null)

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()

    const center = {lat:33.82445, lng:-118.04580}

    if(!isLoaded) return <div>Loading ...</div>
   
    async function calculateRoute() {
        if(originRef.current.value === '' || destinationRef.current.value === '' ) {
            return 
        }
        const directionsService = new google.maps.DirectionsService()
        const result = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(result)
        setDistance(result.routes[0].legs[0].distance.text)
        setDuration(result.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        destinationRef.current.value = ''
    }

    return (
        <div>
            <div className = 'w-96 m-auto'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                    To:
                    </Form.Label>
                    <Autocomplete>
                        <Form.Control type='address' placeholder="Your address here" ref={destinationRef}/>
                    </Autocomplete>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                    From:
                    </Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Cypress, Ca" ref={originRef}/>
                </Form.Group>
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
                <Button variant="primary" onClick={calculateRoute}>Calculate</Button> 
                <Button variant="primary" onClick={clearRoute}>Clear</Button>
            </Form>
            <CiLocationArrow1 onClick={() => map.panTo(center)}/>
        </div>
            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container"
                onLoad={(map) => setMap(map)}
            >
            <Marker 
                position={center}
            />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            </GoogleMap>
        </div>
    )
}

// function Map() {
//     return <GoogleMap 
//             zoom={10} center={{lat: 44, lng: -80}} 
//             mapContainerClassName="map-container"
//             onLoad={(map) => setMap(map)}
//             >
//             <Marker position={{lat:44, lng: -80}}/>
//             </GoogleMap>
// }