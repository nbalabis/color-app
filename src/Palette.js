import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css'

function Palette() {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    let { id } = useParams()
    const findPalette = (id) => {
        return seedColors.find(palette => palette.id === id)
    }
    const palette = generatePalette(findPalette(id))
    const { colors, paletteName, emoji } = palette

    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
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
                handleClose={closeSnackbar} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <footer className='Palette-footer'>
                {paletteName}
                <span className='emoji'>{emoji}</span>
            </footer>
        </div>
    );
}

export default Palette;