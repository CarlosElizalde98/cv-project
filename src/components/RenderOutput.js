import React, { useState } from "react";

function RenderOutput({items, handleChange, name}) {
    const [editing, setEdit] = useState(true)

        this.state = {
            editing: true,
        }
    }
    handleChanges = (e) => {
        const obj = e.target.id;
        const value = e.target.value;
        handleChange(name, obj, value)
        
        }
    const handleSave = () => {
        setEdit( editing => !editing
        )
    }
    
    const renderItems = (props) => {
        const items = props;
        console.log(items)
        let objects = Object.keys(items).map((key) => [`${key}: ${items[key]}`])
        console.log(objects)
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

    const editItems = (props) => {
        const items = props;
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
        <div>{editing ? (renderItems(items)) : (editItems(items))} </div>
    );
};

export default RenderOutput;
