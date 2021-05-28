import React, { Component } from 'react';
import './CreateSurvey.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateSurvey extends Component {

    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="container-form">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>
                    <div className="d-flex justify-content-center">
                        <Button variant="success">Success</Button>{' '}
                    </div>
                </div>
        
            </div>
        )
    }

}

export default CreateSurvey;