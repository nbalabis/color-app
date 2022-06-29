import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import './styles/PaletteList.css'

function PaletteList(props) {
    const { palettes, deletePalette } = props

    return (
        <div className='PaletteList'>
            <div className='container'>
                <nav className='nav'>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className='palettes'>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} key={palette.id} deletePalette={deletePalette} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaletteList;