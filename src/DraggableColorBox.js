import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@mui/icons-material/Delete';
import Styles from './styles/DraggableColorBoxStyles'

const { ColorBox, BoxContent } = Styles

function DraggableColorBox(props) {
    const { color, name, handleClick } = props
    return (
        <ColorBox style={{ backgroundColor: color }}>
            <BoxContent>
                <span>{name}</span>
                <DeleteIcon className='delete-icon' onClick={handleClick} />
            </BoxContent>
        </ColorBox>
    );
}

export default SortableElement(DraggableColorBox);