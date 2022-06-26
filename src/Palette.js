import React, { useState } from 'react';
import Navbar from './Navbar';
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
            <Navbar level={level} setLevel={setLevel} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* Footer goes here */}
        </div>
    );
}

export default Palette;