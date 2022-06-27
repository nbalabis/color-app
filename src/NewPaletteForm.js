import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { arrayMoveImmutable } from 'array-move';

const drawerWidth = 400;
const maxColors = 20;

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
    const { savePalette, palettes } = props
    const [colors, setColors] = useState(palettes[0].colors)
    const paletteIsFull = colors.length >= maxColors
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

    const addRandomColor = () => {
        const allColors = palettes.map(p => p.colors).flat()
        const filteredArr = allColors.filter(color => !colors.includes(color))
        let rand = Math.floor(Math.random() * filteredArr.length)
        const randomColor = filteredArr[rand]
        setCurrentColor(randomColor.color)
        setNewColorName(randomColor.name)
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

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMoveImmutable(colors, oldIndex, newIndex))
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <PaletteFormNav
                AppBar={AppBar}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleSubmit={handleSubmit}
                newPaletteName={newPaletteName}
                setNewPaletteName={setNewPaletteName}
            />
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
                    <Button
                        variant="contained"
                        color='secondary'
                        onClick={() => setColors([])}
                    >
                        Clear Palette
                    </Button>
                    <Button
                        variant="contained"
                        color='primary'
                        onClick={addRandomColor}
                        disabled={paletteIsFull}
                    >
                        Random Color
                    </Button>
                </div>
                <ColorPickerForm
                    currentColor={currentColor}
                    setCurrentColor={setCurrentColor}
                    addNewColor={addNewColor}
                    newColorName={newColorName}
                    setNewColorName={setNewColorName}
                    paletteIsFull={paletteIsFull}
                />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <DraggableColorList
                    colors={colors}
                    removeColor={removeColor}
                    axis="xy"
                    onSortEnd={onSortEnd}
                />
            </Main>
        </Box>
    );
}

export default NewPaletteForm
