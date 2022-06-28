import React from 'react';
import { ChromePicker } from 'react-color';
import './styles/ColorPickerForm.css'

function ColorPickerForm(props) {
    const { currentColor, setCurrentColor } = props

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