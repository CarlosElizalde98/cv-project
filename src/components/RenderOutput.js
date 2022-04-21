import React, { Component } from 'react';

class RenderOutput extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: true,
        }
    }
    handleChanges = (e) => {
        const obj = e.target.id;
        const value = e.target.value;
        this.props.handleChange(this.props.name, obj, value)

    }
    handleSave = () => {
        this.setState( prevstate => ({
            editing: !prevstate.editing,
        }))
    }

    renderItems = (props) => {
        const {items} = props;
        let objects = Object.keys(items).map((key) => [`${key}: ${items[key]}`])
        let displays = objects.map((item) => {
            return <div key={item} className="resume-item">
                <p>{item}</p>
                </div>
        })
        
        return (
            <div className="resume-display">
                {displays}
                  <button onClick={this.handleSave}>Edit</button>
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
                id={key}
                onChange={(e) => this.handleChanges(e)}
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