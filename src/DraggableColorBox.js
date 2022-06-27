import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/DraggableColorBox.css'

function DraggableColorBox(props) {
    const { color, name, handleClick } = props
    return (
        <div className='DraggableColorBox' style={{ backgroundColor: color }}>
            <div className='box-content'>
                <span>{name}</span>
                <DeleteIcon className='delete-icon' onClick={handleClick} />
            </div>
        </div>
    );
}

export default SortableElement(DraggableColorBox);