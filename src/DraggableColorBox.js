import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/DraggableColorBox.css'

function DraggableColorBox(props) {
    const { color, name } = props
    return (
        <div className='DraggableColorBox' style={{ backgroundColor: color }}>
            <div className='box-content'>
                <span>{name}</span>
                <DeleteIcon className='delete-icon' />
            </div>
        </div>
    );
}

export default DraggableColorBox;