import React, { useRef }from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef()
    const USER_ID = 'skWCvVh0kWxGJOR_P'
    const TEMPLATE_ID = 'template_av397z4'
    const SERVICE_ID = 'service_atp7chh'
 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
        

    return (
        <div>
            <Form ref = {form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name= "user_email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="full name" name="user_name"/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="phone" placeholder="phone"/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="message" name="message" />
                </Form.Group>
                <Button variant="primary" type ="submit">Send</Button>
            </Form>
        </div>
    )
}