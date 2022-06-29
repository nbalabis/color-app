import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles/DraggableColorBoxStyles'

function DraggableColorBox(props) {
    const { color, name, handleClick } = props
    const classes = useStyles()

    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    );
}

export default SortableElement(DraggableColorBox);