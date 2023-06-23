import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { authenticate } from "../slice/authSlice";

export const Login = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandle = (e) => {
        e.preventDefault()
        try {
            dispatch(authenticate({email,password}))
            setEmail('')
            setPassword('')
        } catch (error) {
            throw new Error(error.message)
        }
    }
    return (
        <div>
            <Form onSubmit={LoginHandle}>
                <Form.Group className ='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type = 'email' placeholder= 'email@email.com' onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className ='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = 'password' placeholder= 'password'onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant ='primary' type='submit'>Sign in</Button>
            </Form>
        </div>
    )
}