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

    generateField() {
        if(this.state.type === 'n'){
            return <Form.Control type="text" onChange={this.props.onChangeValue} name={this.props.code}/>
        }
        else if(this.state.type === 's'){
            return this.state.answers.map((ans,i) => {
                return(<Form.Check
                    type="radio"
                    label={ans.answer}
                    key={i}
                  />);
            })
        }
        else if(this.state.type === 't'){
            return <Form.Control 
            as="textarea" 
            rows={3} placeholder="If it's a question with options, write the answers separated by line break, if not, just don't write anything"
            onChange={this.props.onChangeValue}
            name={this.props.code}
            ></Form.Control>
        }
    }

    render(){
        return(
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>{this.state.question}</Form.Label>
                {this.generateField()}
            </Form.Group>
        );
    }
}