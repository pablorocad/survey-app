import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class ElementForm extends Component {
    
    state = {
        question: this.props.question,
        type: this.props.type,
        answers: this.props.answers
    }

    generateField(props) {
        if(props.type === 'n'){
            return <Form.Control type="text"/>
        }
        return props.answers.map((ans,i) => {
            return(<Form.Check
                type="radio"
                label={ans.answer}
                key={ans.answer}
              />);
        })
    }

    render(){
        return(
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>{this.state.question}</Form.Label>
                <this.generateField type={this.state.type} answers={this.state.answers}></this.generateField>
            </Form.Group>
        );
    }
}