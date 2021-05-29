import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class ElementForm extends Component {
    render(){
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Form>
        );
    }
}