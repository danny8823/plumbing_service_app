import React from "react";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import {Button, Form} from 'react-bootstrap'
import { newUser } from "../slice/authSlice";
import {useNavigate} from 'react-router-dom'
export const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    
    const formHandler = (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            setEmail('')
            setName('')
            setPassword('')
            setConfirmPassword('')
            dispatch(newUser({email,name,password}))
            navigate('/')         
        } else {
            console.log('passwords do not match')
        }
    }

    return (
        <div>
            <Form onSubmit={formHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="full name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type ="submit">Register</Button>
            </Form>
        </div>
    )
}