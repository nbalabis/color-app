import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

function Navbar(props) {
    const { level, setLevel } = props

    return (
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>reactcolorpicker</a>
            </div>
            <div className='slider-container'>
                <span>Level: {level}</span>
                <div className='slider'>
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onChange={(level) => setLevel(level)}
                        trackStyle={[{ backgroundColor: "transparent" }]}
                        handleStyle={[
                            {
                                backgroundColor: "green",
                                outline: "none",
                                border: "2px solid green",
                                boxShadow: "none",
                                width: "13px",
                                height: "13px",
                                marginTop: "-3px",
                            },
                        ]}
                        railStyle={{ height: "8px" }}
                    />
                </div>
            </div>
        </header>
    );
}

export default Navbar;