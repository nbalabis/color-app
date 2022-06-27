import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './styles/PaletteFormNav.css'

function PaletteFormNav(props) {
    const { AppBar, open, handleDrawerOpen, handleSubmit, newPaletteName, setNewPaletteName } = props

    return (
        <div className='PaletteFormNav'>
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
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <div className='nav-btns'>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            value={newPaletteName}
                            onChange={(evt) => setNewPaletteName(evt.target.value)}
                            validators={['required', 'paletteNameUnique']}
                            errorMessages={['Enter a palette name', 'Name already used']}
                        />
                        <Button type='submit' variant='contained' color='primary'>Save Palette</Button>
                    </ValidatorForm>
                    <Link to='/'>
                        <Button variant='contained' color='secondary'>Go Back</Button>
                    </Link>
                </div>
            </AppBar>
        </div>
    );
}

export default PaletteFormNav;