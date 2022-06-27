import React from 'react';
import './styles/DraggableColorBox.css'

function DraggableColorBox(props) {
    const { color } = props
    return (
        <div className='DraggableColorBox' style={{ backgroundColor: color }}>
            {color}
        </div>
    );
}

export default DraggableColorBox;