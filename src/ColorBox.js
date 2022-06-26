import React from 'react';
import './ColorBox.css'

function ColorBox(props) {
    return (
        <div className='ColorBox' style={{ background: props.background }}>
            <span>{props.name}</span>
            <span>MORE</span>
        </div>
    );
}

export default ColorBox;