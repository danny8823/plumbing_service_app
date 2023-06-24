import React from "react";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../slice/servicesSlice";

export const AllServices = (prop) => {
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services.services)

    const {category} = prop

    console.log(category)
    useEffect(() => {
        dispatch(fetchServices())
    },[dispatch])

    return (
        <div className = 'flex flex-wrap justify-center w-60 m-auto'>
           {services && services.length ? (
            services
                .filter((service) => {
                    return service ? service.category === category : service
                })
                .map((service) => (
                    <div key = {service.id}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <img src = {service.image} alt='service'></img>
                        <small>{service.price}</small>
                    </div>
                ))
           ) : (
            <h1>No Data!</h1>
           )}
        </div>
    )
}