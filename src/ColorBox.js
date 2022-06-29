import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom';
import useStyles from './styles/ColorBoxStyles';

function ColorBox(props) {
    const [copied, setCopied] = useState(false)
    const { name, background, paletteId, colorId, showingFullPalette } = props
    const classes = useStyles(props)

    const handleClick = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <CopyToClipboard text={background} onCopy={handleClick}>
            <div className={classes.ColorBox} style={{ background }}>
                <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }} />
                <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={evt => evt.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    );
}

export default ColorBox;