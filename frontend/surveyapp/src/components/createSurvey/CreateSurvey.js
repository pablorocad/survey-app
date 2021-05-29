import React, { Component } from 'react';
import './CreateSurvey.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ElementForm from '../elementForm/ElementForm';

class CreateSurvey extends Component {

    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="container-form">
                    
                    <Form>
                        <ElementForm question="¿Maneja Carro?" type="s" answers={[{answer:"Si"},{answer:"No"}]}></ElementForm>
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