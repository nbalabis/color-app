import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css'

function Palette(props) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const { colors } = props.palette
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} />
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
            {/* Footer goes here */}
        </div>
    );
}

export default Palette;