import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getPalette, gatherShades } from './paletteHelpers'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

function SingleColorPalette(props) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    let { paletteId, colorId } = useParams()
    const palette = getPalette(paletteId)
    const { paletteName, emoji } = palette
    const shades = gatherShades(palette, colorId).slice(1)

    const colorBoxes = shades.map(color => (
        <ColorBox
            key={color.id}
            name={color.name}
            background={color[format]}
            showLink={false}
        />
    ))
    const changeFormat = (evt) => {
        setFormat(evt.target.value)
        setSnackbarOpen(true)
    }
    const closeSnackbar = () => {
        setSnackbarOpen(false)
    }

    return (
        <div className='Palette'>
            <Navbar
                level={level}
                setLevel={setLevel}
                format={format}
                handleChange={changeFormat}
                open={snackbarOpen}
                handleClose={closeSnackbar}
                showingAllColors={false} />
            <h1>Single Color Palette</h1>
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
}

export default SingleColorPalette;