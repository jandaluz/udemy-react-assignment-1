import React from 'react';
import './UserOutput.css';

const output = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <p>Para1</p>
            <p>Para2</p>
        </div>
    )
}

export default output;