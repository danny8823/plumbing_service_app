import React from "react";
import { useState } from "react";
import { AllServices } from "./Services_components/AllServices";
import { useSpring, animated } from '@react-spring/web'

export const Services = () => {
    const [category,setCategory] = useState('')
    const [springs, api] = useSpring(() => ({
        from: { y: 0 },
      }))

    const clickCategory = (cat) => {
        api.start({
            from: {
            y: 0,
            },
            to: {
            y: 5,
            },
        })
        if(cat === 'water') {
            setCategory('water')
        } else if (cat === 'gas') {
            setCategory('gas')
        } else if (cat === 'sewer') {
            setCategory('sewer')
        } else if(cat === 'misc'){
            setCategory('misc')
        } else {
            setCategory('')
        }
    }

    return (
        <>
        <div>
            <div>
                <div className = 'flex text-center card-container'>
                <animated.div style = {{...springs}} className = 'category-card cursor-pointer hover:bg-sky-300' onClick={() => {clickCategory("water")}}>
                    <h1>Water</h1>
                    <img className = 'w-3/4 m-auto h-36'src = 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
                    alt ='faucet filling up cup'/>
                    <small>Water heater, faucets, shower, pipe fix, etc...</small>
                </animated.div>
                <animated.div style = {{...springs}} className = 'category-card cursor-pointer hover:bg-sky-300' onClick={() => {clickCategory("gas")}}>
                    <h1>Gas</h1>
                    <img className = 'w-3/4 m-auto h-36' src = 'https://images.unsplash.com/photo-1608454770647-01dc0f7dd97d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
                    alt = 'gas burner'/>
                    <small>pipe fix, new route, additions, etc...</small>
                </animated.div>
                <animated.div style = {{...springs}} className = 'category-card cursor-pointer hover:bg-sky-300' onClick={() => {clickCategory("sewer")}}>
                    <h1>Sewer</h1>
                    <img className = 'w-3/4 m-auto h-36' src = 'https://images.unsplash.com/photo-1507833421144-4a33437fea3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
                    alt = 'water in swimming pool'/>
                    <small>Drain cleaning, clean-out installs, additions, etc... </small>
                </animated.div>
                <animated.div style = {{...springs}} className = 'category-card cursor-pointer hover:bg-sky-300' onClick={() => {clickCategory("misc")}}>
                    <h1>Misc.</h1>
                    <img className = 'w-3/4 m-auto h-36' src = 'https://images.unsplash.com/photo-1569597967185-cd6120712154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
                    alt = 'toilet in bathroom'/>
                    <small>Toilet, disposals, etc.</small>
                </animated.div>
                </div>
            </div>
            <AllServices category = {category}/>
        </div>
        </>
    )
}