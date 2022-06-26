import React from 'react';
import { Link } from 'react-router-dom'

function PaletteList(props) {
    const { palettes } = props

    return (
        <div>
            <h1>React Colors</h1>
            {palettes.map(palette => (
                <Link to={`palette/${palette.id}`}>
                    {palette.paletteName}
                </Link>
            ))}
        </div>
    );
}

export default PaletteList;