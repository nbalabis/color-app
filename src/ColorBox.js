import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
import './ColorBox.css'

function ColorBox(props) {
    const [copied, setCopied] = useState(false)
    const { name, background, paletteId, colorId } = props

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
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <Link to={`/palette/${paletteId}/${colorId}`} onClick={evt => evt.stopPropagation()}>
                    <span className='see-more'>More</span>
                </Link>
            </div>
        </CopyToClipboard>
    );
}

export default ColorBox;