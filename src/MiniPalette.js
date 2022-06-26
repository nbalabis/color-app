import React from 'react';
import { useNavigate } from "react-router-dom";
import './MiniPalette.css'

function MiniPalette(props) {
    const { paletteName, emoji, colors, id } = props
    let navigate = useNavigate()
    const handleClick = () => {
        navigate(`/palette/${id}`)
    }

    return (
        <div className='MiniPalette' onClick={handleClick}>
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