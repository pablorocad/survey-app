import React, { Component } from 'react';
import './CreateSurvey.css';
import Button from 'react-bootstrap/Button';

import ElementForm from '../elementForm/ElementForm';

class CreateSurvey extends Component {

    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="container-form">
                    <ElementForm></ElementForm>
                    <div className="d-flex justify-content-center">
                        <Button variant="success">Success</Button>{' '}
                    </div>
                </div>
        
            </div>
        )
    }

}

export default CreateSurvey;