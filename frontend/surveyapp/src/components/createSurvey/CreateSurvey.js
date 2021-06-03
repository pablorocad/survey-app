import React, { Component } from 'react';
import './CreateSurvey.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ElementForm from '../elementForm/ElementForm';

const fetch = require('node-fetch')
class CreateSurvey extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            values: [],
            creators: 1,
            questions: [
                {
                    question: "Survey name:",
                    type: "n",
                    answers: [],
                },
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
        if(!this.state.values[this.state.creators]) {
            alert('Insert a question')
            return;
        }

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
        this.setState({questions: [this.state.questions[0]], values:[this.state.values[0]], creators: this.state.creators + 1}, () => {
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

    async finishSurvey(){

        const questionsArray = this.state.questions;
        questionsArray.shift();
        questionsArray.pop();
        questionsArray.pop();
        const newSurvey = {
            name: this.state.values[0],
            questions: questionsArray
        };

        console.log(newSurvey)

        await fetch('http://localhost:2080/survey',
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSurvey)
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
                        <div className="p-1">
                            <Button variant="success" onClick={() => this.addQuestion()}>Add question</Button>
                        </div>
                        <div className="p-1">
                            <Button variant="warning" onClick={() => this.finishSurvey()}>Finish survey</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateSurvey;