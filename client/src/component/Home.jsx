import React from "react";
import {BsStar} from 'react-icons/bs'
import { CarouselComponent } from "./CarouselComp";

const Home = () => {
    return (
        <div className = "m-auto">
            <h1 className="text-4xl font-bold m-auto text-center">Pro's Plumbing Inc</h1>
            <img src = "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt = 'water with bubbles'/>
            <p className = "text-3xl text-center mt-10">Get our 5 star service with just a few clicks</p>
            <div className="flex justify-center m-auto">
                <h1 className="text-8xl star-icon"><BsStar/></h1>
                <h1 className="text-8xl star-icon"><BsStar/></h1>
                <h1 className="text-8xl star-icon"><BsStar/></h1>
                <h1 className="text-8xl star-icon"><BsStar/></h1>
                <h1 className="text-8xl star-icon"><BsStar/></h1>
            </div>
            <img src = 'https://images.unsplash.com/photo-1594761051656-a37da88b5f5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt = "plumber working"/>
            <p className = "text-center mt-4">Real reviews from our customers!</p>
            <CarouselComponent/>
            <p className = "text-2xl text-center mt-10">Order our services right here on the page. Select a service and our licensed technician will arrive within a hour of your selected time!</p>
        </div>
    )
}

export default Home