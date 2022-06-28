import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function PaletteMetaForm(props) {
    const [open, setOpen] = useState(false);
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
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Save Palette
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Name Your Palette</DialogTitle>
                <DialogContent>
                    <ValidatorForm onSubmit={savePalette}>
                        <TextValidator
                            value={newPaletteName}
                            onChange={(evt) => setNewPaletteName(evt.target.value)}
                            validators={['required', 'paletteNameUnique']}
                            errorMessages={['Enter a palette name', 'Name already used']}
                        />
                        <Button type='submit' variant='contained' color='primary'>Save Palette</Button>
                    </ValidatorForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PaletteMetaForm
