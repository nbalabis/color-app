import React from 'react';
import { useParams } from 'react-router-dom'
import ColorBox from './ColorBox';
import { getPalette, gatherShades } from './paletteHelpers'

function SingleColorPalette(props) {
    let { paletteId, colorId } = useParams()
    const palette = getPalette(paletteId)
    const shades = gatherShades(palette, colorId).slice(1)

    const colorBoxes = shades.map(color => (
        <ColorBox
            key={color.id}
            name={color.name}
            background={color.hex}
            showLink={false}
        />
    ))

    return (
        <div className='Palette'>
            <h1>Single Color Palette</h1>
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
        </div>
    );
}

export default SingleColorPalette;