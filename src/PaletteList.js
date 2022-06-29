import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import useStyles from './styles/PaletteListStyles';

function PaletteList(props) {
    const { palettes, deletePalette } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map(palette => (
                        <MiniPalette {...palette} key={palette.id} deletePalette={deletePalette} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PaletteList;