import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        height: 'calc(100vh - 64px)',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function NewPaletteForm(props) {
    const [open, setOpen] = useState(true);
    const [currentColor, setCurrentColor] = useState('purple')
    const [newColorName, setNewColorName] = useState('')
    const [newPaletteName, setNewPaletteName] = useState('')
    const [colors, setColors] = useState([])
    const { savePalette, palettes } = props
    let navigate = useNavigate()

    useEffect(() => {
        ValidatorForm.addValidationRule('colorNameUnique', (value) => {
            return colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        });
        ValidatorForm.addValidationRule('colorUnique', (value) => {
            return colors.every(
                ({ color }) => color !== currentColor
            )
        });
        ValidatorForm.addValidationRule('paletteNameUnique', (value) => {
            return palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        });
    })

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const addNewColor = (evt) => {
        const newColor = { color: currentColor, name: newColorName }
        setColors([...colors, newColor])
        setNewColorName('')
    }

    const handleSubmit = () => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors: colors
        }
        savePalette(newPalette)
        navigate('/')
    }

    const removeColor = (colorName) => {
        setColors(colors.filter(color => color.name !== colorName))
    }

    return (
        <Box sx={{ display: 'flex' }}>
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
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            value={newPaletteName}
                            onChange={(evt) => setNewPaletteName(evt.target.value)}
                            validators={['required', 'paletteNameUnique']}
                            errorMessages={['Enter a palette name', 'Name already used']}
                        />
                        <Button type='submit' variant='contained' color='primary'>Save Palette</Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Typography variant='h4'>Design Your Palette</Typography>
                <div>
                    <Button variant="contained" color='secondary'>Clear Palette</Button>
                    <Button variant="contained" color='primary'>Random Color</Button>
                </div>
                <ChromePicker
                    color={currentColor}
                    onChange={newColor => setCurrentColor(newColor.hex)}
                />
                <ValidatorForm onSubmit={addNewColor}>
                    <TextValidator
                        value={newColorName}
                        onChange={(evt) => setNewColorName(evt.target.value)}
                        validators={['required', 'colorNameUnique', 'colorUnique']}
                        errorMessages={['Enter a color name', 'Name must be unique', 'Color already used']}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        style={{ backgroundColor: currentColor }}
                    >ADD COLOR</Button>
                </ValidatorForm>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {colors.map(color => (
                    <DraggableColorBox
                        color={color.color}
                        name={color.name}
                        key={color.name}
                        handleClick={() => removeColor(color.name)}
                    />
                ))}
            </Main>
        </Box>
    );
}

export default NewPaletteForm
