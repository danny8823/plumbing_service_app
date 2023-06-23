import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/authSlice";

export const NavBar = () => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(false)
    const isLoggedIn = useSelector((state) => !!state.auth.me.id)
    const user = useSelector((state) => state.auth.me)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const signOff = () => {
        dispatch(logout())
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <Link to = '/'>Home</Link>
                    <Link to = '/services'>Services</Link>
                    <Link onClick={() => signOff()}>Sign off</Link>
                    <small>Logged in as: {user.email}</small>
                </div>
            ): (
                <div>
                    <Link to = '/'>Home</Link>
                    <Link to = '/register'>Register</Link>
                    <Link onClick={handleShow}>Sign in</Link>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Log in</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Login/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
            
        
        </div>
    )
}