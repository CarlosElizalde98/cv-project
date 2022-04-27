import React, { useState } from "react";

function RenderOutput(props) {
  const [editing, setEdit] = useState(true);

        this.state = {
            editing: true,
        }
    }
    handleChanges = (e) => {
        const obj = e.target.id;
        const value = e.target.value;
        props.handleChange(props.name, obj, value)
        
        }
    const handleSave = () => {
        setEdit( prevstate => ({
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
                  <button onClick={handleSave}>Edit</button>
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
                onChange={(e) => handleChanges(e)}
             />
        )
        return (
            <div className="resume-display">
                {objects}
                <button onClick={handleSave}>Save</button>
            </div>
        )
    }

    return (
        <div>{editing ? (renderItems(props)) : (editItems(props))} </div>
    );
};

export default RenderOutput;
