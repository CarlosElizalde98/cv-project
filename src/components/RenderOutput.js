import React, { Component } from 'react';

class RenderOutput extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false,
        }
        this.renderItems = this.renderItems.bind(this)
        this.editItems = this.editItems.bind(this)
    }

    handleSave = () => {
        this.setState( prevstate => ({
            editing: !prevstate.editing,
        }))
    }

    renderItems = (props) => {
        const {items} = props;
        let objects = Object.keys(items).map((key) => [`${key}: ${items[key]}`])
        return (
            <div className="resume-display">
                {objects.map((item) => {
                    return <div key={item} className="resume-item">
                        <p>{item}</p>
                        <button onClick={this.handleSave}>Edit</button>
                        </div>
                })}
            </div>
        );
    }

    editItems = (props) => {
        const {items} = props;
        let objects = 
            Object.keys(items).map((key) => 
                <input type="text" 
                defaultValue={items[key]} 
                key={key}
                name={key}
             />
        )
        return (
            <div className="resume-display">
                {objects}
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }

    render() {
    
        return (
            <div>{this.state.editing ? (this.renderItems(this.props)) : (this.editItems(this.props))} </div>
        );
}
}

export default RenderOutput;