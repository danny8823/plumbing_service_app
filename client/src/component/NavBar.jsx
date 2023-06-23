import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/authSlice";
import { RegisterForm } from "./Register";

export const NavBar = () => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const isLoggedIn = useSelector((state) => !!state.auth.me.id)
    const user = useSelector((state) => state.auth.me)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleClose2 = () => setShow2(false)
    const handleShow2 = () => setShow2(true)

    const signOff = () => {
        dispatch(logout())
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <Link className = 'mx-2 no-underline hover:underline text-black' to = '/'>Home</Link>
                    <Link className = 'mx-2 no-underline hover:underline text-black' to = '/services'>Services</Link>
                    <Link className = 'mx-2 no-underline hover:underline text-black' onClick={() => signOff()}>Sign off</Link>
                    <small>Logged in as: {user.email}</small>
                </div>
            ): (
                <div>
                    <Link className = 'mx-2 no-underline hover:underline text-black' to = '/'>Home</Link>
                    <Link className = 'mx-2 no-underline hover:underline text-black' onClick={handleShow2}>Register</Link>
                    <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Register</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><RegisterForm/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Link className = 'mx-2 no-underline hover:underline text-black' onClick={handleShow}>Sign in</Link>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Log in</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Login/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
            
        
        </div>
    )
}