import React from 'react';

const RenderOutput = (props) => {
    const {items} = props;
    let objects = Object.keys(items).map((key) => [`${key}: ${items[key]}`])
    return (
        <div className="resume-display">
            {objects.map((item) => {
                return <div key={item} className="resume-item">{item}</div>
            })}
        </div>
    );
}

export default RenderOutput;