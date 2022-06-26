import React, { useState } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';
import './Palette.css'

function Palette(props) {
    const [level, setLevel] = useState(500)

    const { colors } = props.palette
    const colorBoxes = colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name} />
    ))

    return (
        <div className='Palette'>
            <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onChange={(level) => setLevel(level)}
            />
            {/* Navbar goes here */}
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* Footer goes here */}
        </div>
    );
}

export default Palette;