import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getPalette, gatherShades } from './paletteHelpers'
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import useStyles from './styles/PaletteStyles';

function SingleColorPalette(props) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const { paletteId, colorId } = useParams()
    const palette = getPalette(paletteId, props.palettes)
    const { paletteName, emoji } = palette
    const shades = gatherShades(palette, colorId).slice(1)
    const classes = useStyles()
    const colorBoxes = shades.map(color => (
        <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showingFullPalette={false}
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
        <div className={classes.Palette}>
            <Navbar
                level={level}
                setLevel={setLevel}
                format={format}
                handleChange={changeFormat}
                open={snackbarOpen}
                handleClose={closeSnackbar}
                showingAllColors={false} />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${paletteId}`} className='back-button'>GO BACK</Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    );
}

export default SingleColorPalette;