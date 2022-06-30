import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import MiniPalette from './MiniPalette';
import useStyles from './styles/PaletteListStyles';

function PaletteList(props) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [deletingId, setDeletingId] = useState('')
    const { palettes, deletePalette } = props
    const classes = useStyles()

    const openDialog = (paletteId) => {
        setDeleteDialogOpen(true)
        setDeletingId(paletteId)
    }

    const closeDialog = () => {
        setDeleteDialogOpen(false)
        setDeletingId('')
    }

    const handleDelete = () => {
        deletePalette(deletingId)
        closeDialog()
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <TransitionGroup className={classes.palettes}>
                    {palettes.map(palette => (
                        <CSSTransition
                            key={palette.id}
                            classNames='fade'
                            timeout={500}
                        >
                            <MiniPalette
                                {...palette}
                                key={palette.id}
                                openDialog={openDialog}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
            <Dialog open={deleteDialogOpen} onClose={closeDialog} aria-labelledby='delete-dialog-title'>
                <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                <List>
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Delete
                        </ListItemText>
                    </ListItem>
                    <ListItem button onClick={closeDialog}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            Cancel
                        </ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}

export default PaletteList;