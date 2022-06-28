import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function PaletteMetaForm(props) {
    const [open, setOpen] = useState(true);
    const [newPaletteName, setNewPaletteName] = useState()

    useEffect(() => {
        ValidatorForm.addValidationRule('paletteNameUnique', (value) => {
            return props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        });
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const savePalette = () => {
        const newPalette = {
            paletteName: newPaletteName
        }
        props.handleSubmit(newPalette)
    }

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Name Your Palette</DialogTitle>
            <ValidatorForm onSubmit={savePalette}>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your new beautiful palette. Make sure it's unique!
                    </DialogContentText>
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
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' variant='contained' color='primary'>Save Palette</Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog >
    );
}

export default PaletteMetaForm
