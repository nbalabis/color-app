import React from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { styled } from '@mui/system';
import './styles/ColorPickerForm.css'

function ColorPickerForm(props) {
    const { currentColor, setCurrentColor, addNewColor, newColorName, setNewColorName, paletteIsFull } = props

    return (
        <div style={{ width: '100%' }}>
            <ChromePicker
                className='color-picker'
                width='100%'
                color={currentColor}
                onChange={newColor => setCurrentColor(newColor.hex)}
            />
        </div>
    );
}

export default ColorPickerForm;