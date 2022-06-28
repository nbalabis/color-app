import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Styles = {
    NavButtons: styled('div')({
        marginRight: '1rem',
        '& a': {
            textDecoration: 'none'
        }
    }),
    Button: styled(Button)({
        margin: "0 0.5rem",
    })
}

export default Styles