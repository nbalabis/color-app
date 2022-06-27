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
import { arrayMoveImmutable } from 'array-move';

function ColorPickerForm(props) {
    const { currentColor, setCurrentColor, addNewColor, newColorName, setNewColorName, paletteIsFull } = props

    return (
        <div>
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
                    style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                    disabled={paletteIsFull}
                >
                    {paletteIsFull ? 'PALETTE FULL' : 'ADD COLOR'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default ColorPickerForm;