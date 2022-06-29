import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import useStyles from './styles/PaletteListStyles';

function PaletteList(props) {
    const { palettes, deletePalette } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition
                            key={palette.id}
                            classNames='fade'
                            timeout={500}
                        >
                            <MiniPalette {...palette} key={palette.id} deletePalette={deletePalette} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
}

export default PaletteList;