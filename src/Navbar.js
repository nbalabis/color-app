import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'

function Navbar(props) {
    const { level, setLevel, format, handleChange, open, handleClose } = props

    const handleSelect = (evt) => {
        handleChange(evt)
    }

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
            <div className='select-container'>
                <Select
                    onChange={handleSelect}
                    value={format}
                >
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                ContentProps={{
                    'aria-describedby': 'message-id'
                }}
                action={[
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                        key='close'
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                ]}
            />
        </header>
    );
}

export default Navbar;