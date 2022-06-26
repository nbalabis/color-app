import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';
import './PaletteList.css'

function PaletteList(props) {
    const { palettes } = props

    return (
        <div className='PaletteList'>
            <div className='container'>
                <nav className='nav'><h1>React Colors</h1></nav>
                <div className='palettes'>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaletteList;