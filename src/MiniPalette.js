import React from 'react';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import './styles/MiniPalette.css'

function MiniPalette(props) {
    const { paletteName, emoji, colors, id } = props
    let navigate = useNavigate()
    const handleClick = () => {
        navigate(`/palette/${id}`)
    }

    return (
        <div className='MiniPalette' onClick={handleClick}>
            <div className='delete'>
                <DeleteIcon
                    sx={{
                        color: 'white',
                        backgroundColor: '#eb3d30',
                        width: '20px',
                        height: '20px',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        padding: '10px',
                        zIndex: 10,
                        opacity: 0,
                        transition: 'all 0.3s ease-in-out',
                    }}
                />
            </div>
            <div className='colors'>
                {colors.map(color => (
                    <div
                        className='mini-color'
                        style={{ backgroundColor: color.color }}
                        key={color.name}
                    />
                ))}
            </div>
            <h5 className='title'>
                {paletteName} <span className='emoji'>{emoji}</span>
            </h5>
        </div>
    );
}

export default MiniPalette;