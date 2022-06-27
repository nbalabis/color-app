import React from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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