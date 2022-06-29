import React from 'react';
import useStyles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
    const { paletteName, emoji } = props
    const classes = useStyles()

    return (
        <footer className={classes.paletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    );
}

export default PaletteFooter;