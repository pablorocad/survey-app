import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

//<ElementForm question="¿Maneja Carro?" type="s" answers={[{answer:"Si"},{answer:"No"}]}></ElementForm>

export default class ElementForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            question: props.question,
            type: props.type,
            answers: props.answers
        }
    }

    generateField(props) {
        if(props.type === 'n'){
            return <Form.Control type="text"/>
        }
        return props.answers.map((ans,i) => {
            return(<Form.Check
                type="radio"
                label={ans.answer}
                key={i}
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