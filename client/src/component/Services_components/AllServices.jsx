import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../slice/servicesSlice";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AllServices = (prop) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const services = useSelector((state) => state.services.services)
    const {category} = prop 
    
    const orderClicker = () => {
        navigate('/address')
    }
    
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        dispatch(fetchServices())
    },[dispatch])

    return (
        <div className = 'flex flex-row flex-wrap justify-center w-screen m-auto'>
           {services && services.length ? (
            services
                .filter((service) => {
                    return service ? service.category === category : service
                })
                .map((service) => (
                        <Card key={service.id} className = 'p-1.5 mt-2 mb-2 ml-1 mr-1 shadow-lg shadow-teal-950' 
                             style={{ width: '20rem' }}>
                            <Card.Img className = "w-3/4 m-auto h-42" variant="top" src={service.image} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                                <Card.Text>
                                    {USDollar.format(service.price)}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={orderClicker}>Order</Button>
                        </Card>
                ))
           ) : (
            <h1>No Data!</h1>
           )}
        </div>
    )
}