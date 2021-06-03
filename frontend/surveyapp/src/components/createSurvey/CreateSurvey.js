import React, { Component } from 'react';
import './CreateSurvey.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ElementForm from '../elementForm/ElementForm';

class CreateSurvey extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            values: [],
            creators: 0,
            questions: [
                {
                    question: "Question:",
                    type: "n",
                    answers: [],
                },
                {
                    question: "Answers:",
                    type: "t",
                    answers: [],
                }
            ]
        }
    }

    handleChange(event) {

        const arrayValues = this.state.values;

        arrayValues[event.target.name] = event.target.value;
        this.setState({values: arrayValues});
        
    }

    addQuestion(){
        const arrayQuestions = this.state.questions;

        arrayQuestions.pop();
        arrayQuestions.pop();
        
        if(this.state.values[this.state.creators + 1]){
            console.log(this.state.values[this.state.creators],this.state.values[this.state.creators + 1]);
        }
        else{
            console.log(this.state.values[this.state.creators]);
            arrayQuestions.push({
                question: this.state.values[this.state.creators],
                type: "n",
                answers: [],
            });
        }

        this.setState({questions: [], values:[], creators: this.state.creators + 1}, () => {
            arrayQuestions.push({
                question: "Question:",
                type: "n",
                answers: [],
            },
            {
                question: "Answers:",
                type: "t",
                answers: [],
            });
            this.setState({questions: arrayQuestions});
        });
    }

    listQuestions(){
        const arrayQuestions = this.state.questions;
        return (
            arrayQuestions.map((qu,index) => {
                return (
                    <ElementForm question={qu.question} type={qu.type} answers={qu.answers} key={index} code={index}
                    onChangeValue={this.handleChange}></ElementForm>
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