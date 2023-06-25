import { response } from "express";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Contact = () => {
    const [email,setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const formHandler = async () => {
        let details = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };
        let response = await fetch('http://localhost:4321/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details),
        })
        let result = await response.json();
        alert(result.status)
    }
    return (
        <div>
            <Form onSubmit={formHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="full name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="phone" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="message" onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type ="submit">Send</Button>
            </Form>
        </div>
    )
}