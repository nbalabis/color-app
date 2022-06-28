import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { TextValidator } from 'react-material-ui-form-validator';


const drawerWidth = 400;

const Styles = {
    drawerWidth: 400,
    Main: styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            height: 'calc(100vh - 64px)',
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    ),
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
    DrawerHeader: styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    })),
    DrawerContainer: styled('div')({
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }),
    AddButton: styled(Button)({
        width: '100%',
        padding: '1rem',
        marginTop: '1rem',
        fontSize: '2rem'
    }),
    ColorNameInput: styled(TextValidator)({
        width: '100%',
        height: '70px',
    }),
    ButtonSection: styled(Button)({
        width: '100%'
    }),
    Button: styled(Button)({
        width: '50%'
    })
}

export default Styles