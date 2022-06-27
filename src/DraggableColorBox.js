import React from 'react';
import './styles/DraggableColorBox.css'

function DraggableColorBox(props) {
    const { color, name } = props
    return (
        <div className='DraggableColorBox' style={{ backgroundColor: color }}>
            {name}
        </div>
    );
}

export default DraggableColorBox;