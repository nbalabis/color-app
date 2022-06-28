import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ValidatorForm } from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { arrayMoveImmutable } from 'array-move';
import Styles from './styles/NewPaletteFormStyles'

const { Main, AppBar, DrawerHeader, DrawerContainer, drawerWidth, ColorNameInput, AddButton, ButtonSection, Button } = Styles
const maxColors = 20;

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
                        display: 'flex',
                        alignItems: 'center'
                    }
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
                <DrawerContainer>
                    <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
                    <ButtonSection>
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
                    </ButtonSection>
                    <ColorPickerForm
                        currentColor={currentColor}
                        setCurrentColor={setCurrentColor}
                        addNewColor={addNewColor}
                        newColorName={newColorName}
                        setNewColorName={setNewColorName}
                        paletteIsFull={paletteIsFull}
                    />
                    <ValidatorForm onSubmit={addNewColor} style={{ width: '100%' }}>
                        <ColorNameInput
                            placeholder='Color Name'
                            margin='normal'
                            variant='filled'
                            value={newColorName}
                            onChange={(evt) => setNewColorName(evt.target.value)}
                            validators={['required', 'colorNameUnique', 'colorUnique']}
                            errorMessages={['Enter a color name', 'Name must be unique', 'Color already used']}
                        />
                        <AddButton
                            className='add-color-btn'
                            type='submit'
                            variant='contained'
                            color='primary'
                            style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                            disabled={paletteIsFull}
                        >
                            {paletteIsFull ? 'PALETTE FULL' : 'ADD COLOR'}
                        </AddButton>
                    </ValidatorForm>
                </DrawerContainer>
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
