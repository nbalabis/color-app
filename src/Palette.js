import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPalette } from './paletteHelpers'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import useStyles from './styles/PaletteStyles'

function Palette(props) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const classes = useStyles()
    const { id } = useParams()
    const palette = getPalette(id, props.palettes)
    const { colors, paletteName, emoji } = palette

    const colorBoxes = colors[level].map(color => (
        <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            colorId={color.id}
            paletteId={id}
            showLink={true}
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
        <div className={classes.palette}>
            <Navbar
                level={level}
                setLevel={setLevel}
                format={format}
                handleChange={changeFormat}
                open={snackbarOpen}
                handleClose={closeSnackbar}
                showingAllColors />
            <div className={classes.paletteColors}>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
}

export default Palette;