import React from 'react';
import './MiniPalette.css'

function MiniPalette(props) {
    const { paletteName, emoji } = props

    return (
        <div className='MiniPalette'>
            <div className='colors'></div>
            <h5 className='title'>
                {paletteName} <span className='emoji'>{emoji}</span>
            </h5>
        </div>
    );
}

export default MiniPalette;