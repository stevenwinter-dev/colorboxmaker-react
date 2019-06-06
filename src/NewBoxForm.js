import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {height: '', width: '', color: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state, id: uuid()};
        this.props.createBox(newBox);
        this.setState({height: '', width: '', color: ''})
    }
    render() {
        return (
            <div className="NewBoxForm-container">
                <h1><i class="fas fa-box-open"></i>Color Box Maker<i class="fas fa-box-open"></i></h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="NewBoxForm-input-container">
                        <label htmlFor='height'>Height: </label>
                        <input 
                            placeholder="Height"
                            type='text'
                            id='height'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                        />  
                    </div>
                    <div className="NewBoxForm-input-container">
                        <label htmlFor='width'>Width: </label>
                        <input 
                            placeholder="Width"
                            type='text'
                            id='width'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="NewBoxForm-input-container">
                        <label htmlFor='color'>Color: </label>
                        <input
                            placeholder="Color"
                            type="text" 
                            id='color'
                            name='color'
                            value={this.state.color}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="NewBoxForm-button">Add Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;