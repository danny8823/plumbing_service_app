import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Login = () => {
    return (
        <div>
            <Form>
                <Form.Group className ='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type = 'email' placeholder= 'email@email.com'/>
                </Form.Group>
                <Form.Group className ='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = 'password' placeholder= 'password'/>
                </Form.Group>
                <Button variant ='primary' type='submit'>Sign in</Button>
            </Form>
        </div>
    )
}