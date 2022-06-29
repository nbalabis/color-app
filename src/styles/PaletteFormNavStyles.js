import { createUseStyles } from 'react-jss';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import sizes from './sizes'

const drawerWidth = 400

const useStyles = createUseStyles({
    root: {
        display: "flex"
    },
    hide: {
        display: "none"
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    navBtns: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        },
        [sizes.down('xs')]: {
            marginRight: "0.5rem"
        }
    }
})

const muiComponents = {
    AppBar: styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })),
    Button: styled(Button)({
        margin: "0 0.5rem",
        [sizes.down('xs')]: {
            margin: 0,
            padding: "0.3rem"
        }
    })
}

export { useStyles, muiComponents }