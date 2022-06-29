import React from 'react';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
    const { paletteName, emoji, colors, id, deletePalette } = props
    const classes = useStyles()
    let navigate = useNavigate()

    const handleClick = () => {
        navigate(`/palette/${id}`)
    }

    const handleDelete = (evt) => {
        evt.stopPropagation()
        deletePalette(id)
    }

    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon
                onClick={handleDelete}
                className={classes.deleteIcon}
                style={{ transition: "all 0.3s ease-in-out" }}
            />
            <div className={classes.colors}>
                {colors.map(color => (
                    <div
                        className={classes.miniColor}
                        style={{ backgroundColor: color.color }}
                        key={color.name}
                    />
                ))}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}

export default MiniPalette;