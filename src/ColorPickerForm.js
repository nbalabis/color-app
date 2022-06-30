import React from 'react';
import Styles from './styles/ColorPickerFormStyles'

const { ChromePicker } = Styles

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