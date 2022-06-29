import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PaletteMetaForm from './PaletteMetaForm';
import { useStyles, muiComponents } from './styles/PaletteFormNavStyles'

function PaletteFormNav(props) {
    const [formShowing, setFormShowing] = useState(false)
    const { open, handleDrawerOpen, handleSubmit, newPaletteName, setNewPaletteName, palettes } = props
    const classes = useStyles()
    const { AppBar, Button } = muiComponents

    const showForm = () => {
        setFormShowing(true)
    }

    const hideForm = () => {
        setFormShowing(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <ColorLensIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to='/'>
                        <Button variant='contained' color='secondary' className={classes.button}>Go Back</Button>
                    </Link>
                    <Button variant="contained" onClick={showForm} className={classes.button}>
                        Save
                    </Button>
                </div>
            </AppBar>
            {formShowing && (
                <PaletteMetaForm
                    handleSubmit={handleSubmit}
                    newPaletteName={newPaletteName}
                    setNewPaletteName={setNewPaletteName}
                    palettes={palettes}
                    hideForm={hideForm}
                />
            )}
        </div>
    );
}

export default PaletteFormNav;