import React from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';

function PaletteList(props) {
    const { palettes } = props

    return (
        <div>
            <h1>React Colors</h1>
            {palettes.map(palette => (
                <MiniPalette {...palette} />
            ))}
        </div>
    );
}

export default PaletteList;