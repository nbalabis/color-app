import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
import chroma from "chroma-js"
import './styles/ColorBox.css'

function ColorBox(props) {
    const [copied, setCopied] = useState(false)
    const { name, background, paletteId, colorId, showLink } = props

    const isDarkColor = chroma(background).luminance() <= 0.08
    const isLightColor = chroma(background).luminance() >= 0.7
    let lightText
    let darkText
    if (isDarkColor) lightText = 'light-text'
    if (isLightColor) darkText = 'dark-text'
    const handleClick = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <CopyToClipboard text={background} onCopy={handleClick}>
            <div className='ColorBox' style={{ background }}>
                <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>copied!</h1>
                    <p className={darkText}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={lightText}>{name}</span>
                    </div>
                    <button className={`copy-button ${darkText}`}>Copy</button>
                </div>
                {showLink && (
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={evt => evt.stopPropagation()}>
                        <span className={`see-more ${darkText}`}>More</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    );
}

export default ColorBox;