import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PaletteMetaForm from './PaletteMetaForm';
import Styles from './styles/PaletteFormNavStyles'

const { NavButtons, Button, Nav } = Styles

function PaletteFormNav(props) {
    const [formShowing, setFormShowing] = useState(false)

    const { AppBar, open, handleDrawerOpen, handleSubmit, newPaletteName, setNewPaletteName, palettes } = props

    const showForm = () => {
        setFormShowing(true)
    }

    const hideForm = () => {
        setFormShowing(false)
    }

    return (
        <Nav>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <ColorLensIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <NavButtons>
                    <Button variant="contained" onClick={showForm}>
                        Save
                    </Button>
                    <Link to='/'>
                        <Button variant='contained' color='secondary'>Go Back</Button>
                    </Link>
                </NavButtons>
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
        </Nav>
    );
}

export default PaletteFormNav;