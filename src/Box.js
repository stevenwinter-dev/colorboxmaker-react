import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', qty: ''};
    }
    render() {
        return (
            <div>
                <div className="Box" style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color,
                    }}
                />
                <button onClick={this.props.removeBox} className="Box-button">X</button>
            </div>
        );
    }
}

export default Box;