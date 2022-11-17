import React, { useState } from "react";

function RenderOutput({ items, handleChange, name }) {
  const [editing, setEdit] = useState(true);

  const handleChanges = (e) => {
    const obj = e.target.id;
    const value = e.target.value;
    handleChange(name, obj, value);
  };
  const handleSave = () => {
    setEdit((editing) => !editing);
  };

  const renderItems = (props) => {
    const items = props;
    let objects = Object.keys(items).map((key) => [`${key}: ${items[key]}`]);
    let displays = objects.map((item) => {
      return (
        <div key={item} className="resume-item">
          <p>{item}</p>
        </div>
      );
    });
    return (
      <div>
        {displays}
        <button onClick={handleSave} className="form-btn">
          Edit
        </button>
      </div>
    );
  };

  const editItems = (props) => {
    const items = props;
    let objects = Object.keys(items).map((key) => (
      <input
        type="text"
        defaultValue={items[key]}
        key={key}
        id={key}
        onChange={(e) => handleChanges(e)}
      />
    ));
    return (
      <div>
        {objects}
        <button onClick={handleSave} className="form-btn">
          Save
        </button>
      </div>
    );
  };

  return (
    <div className="resume-display">
      {editing ? renderItems(items) : editItems(items)}{" "}
    </div>
  );
}

export default RenderOutput;
