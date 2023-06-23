import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselComponent = () => {
    return (
        <div className = 'm-auto'>
            <Carousel className = 'w-1/2 h-60 m-auto'>
                <Carousel.Item>
                    <p>
                        "I could not believe how easy it was to get service! I just clicked on what service was needed and 
                        Danny the plumber came out within the hour! I will be using their services for life!"
                    </p>
                    <p>
                        -John Hamcheck
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p> 
                        "My bathroom tub clogged up and I came across Pro's plumbing site and I couldn't believe how easy it was to 
                        get a plumber out here. Within 5 minutes I was able to state the services I need with a couple clicks. James
                        came out and fixed my clog, He was so knowledgable and clean! Thank you Pro's Plumbing!" 
                    </p>
                    <p>
                        -Sally McFly
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p> 
                        "We had a leak on our hose bib and I got our go to plumbing company to come out and I was not disappointed! They make it so easy with their app to get service!
                        Thank you Pro's Plumbing!" 
                    </p>
                    <p>
                        -David Kim
                    </p>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}