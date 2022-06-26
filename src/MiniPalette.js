import React from 'react';
import './MiniPalette.css'

function MiniPalette(props) {
    const { paletteName, emoji, colors } = props

    return (
        <div className='MiniPalette'>
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