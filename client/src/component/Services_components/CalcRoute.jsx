import React from "react";
import {Button, Form} from "react-bootstrap"

export const CalcRoute = () => {
    return (
        <div className = 'w-96 m-auto'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                    To:
                    </Form.Label>
                    <Form.Control type='address' placeholder="Your address here"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                    From:
                    </Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Cypress, Ca" />
                </Form.Group>
                <Button variant="primary">Calculate</Button>
            </Form>
        </div>
    )
}