import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'


function PaletteMetaForm(props) {
    const [open, setOpen] = useState(true);
    const [newPaletteName, setNewPaletteName] = useState()
    const { palettes, handleSubmit, hideForm } = props

    useEffect(() => {
        ValidatorForm.addValidationRule('paletteNameUnique', (value) => {
            return palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        });
    })

    const savePalette = () => {
        const newPalette = {
            paletteName: newPaletteName
        }
        handleSubmit(newPalette)
    }

    function EmojiPicker(props) {
        const ref = useRef()

        useEffect(() => {
            new Picker({ ...props, data, ref })
        }, [])

        return <div ref={ref} />
    }

    return (
        <Dialog open={open} onClose={hideForm} >
            <DialogTitle>Name Your Palette</DialogTitle>
            <ValidatorForm onSubmit={savePalette}>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your new beautiful palette. Make sure it's unique!
                    </DialogContentText>
                    <EmojiPicker onEmojiSelect={console.log} />
                    <TextValidator
                        value={newPaletteName}
                        onChange={(evt) => setNewPaletteName(evt.target.value)}
                        validators={['required', 'paletteNameUnique']}
                        errorMessages={['Enter a palette name', 'Name already used']}
                        fullWidth
                        margin='normal'
                        variant='filled'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={hideForm}>Cancel</Button>
                    <Button type='submit' variant='contained' color='primary'>Save Palette</Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog >
    );
}

export default PaletteMetaForm
