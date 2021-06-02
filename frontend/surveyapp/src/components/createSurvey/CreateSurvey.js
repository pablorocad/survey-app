import React, { Component } from 'react';
import './CreateSurvey.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ElementForm from '../elementForm/ElementForm';

class CreateSurvey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    addQuestion(){

        const arrayQuestions = this.state.questions;

        arrayQuestions.push({
            id: "4848538ed287c535dcf2d85b033f56a3",
            question: "Nombre",
            type: "n",
            answers: [],
            survey: "10a394fb4a6f53329c45f521f0504a49"
        });

        this.setState({questions: arrayQuestions});
    }

    listQuestions(){
        const arrayQuestions = this.state.questions;
        return (
            arrayQuestions.map((qu,index) => {
                return (
                    <ElementForm question={qu.question} type={qu.type} answers={qu.answers} key={index}></ElementForm>
                );
            })
        );
    }

    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="container-form">
                    
                    <Form>
                        {this.listQuestions()}
                    </Form>

                    <div className="d-flex justify-content-center">
                        <Button variant="success" onClick={() => this.addQuestion()}>+</Button>
                    </div>

                </div>
        
            </div>
        )
    }

}

export default CreateSurvey;