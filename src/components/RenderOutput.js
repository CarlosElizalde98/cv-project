import React from 'react';

const RenderOutput = (props) => {
    const {items} = props;

    return (
        <div className="resume-display">
            {items.map((item) => {
                return <div key={item} className="resume-item">{item}</div>
            })}
        </div>
    );
}

export default RenderOutput;