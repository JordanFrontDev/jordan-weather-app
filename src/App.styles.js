import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    weatherContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    weatherBox: {
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontWeight: '300',
        fontSize: '7rem',
        margin: 'none'
    },
    tempBox: {
        marginRight: '2rem'
    },
    temps: {
        fontSize: '1.5rem'
    },
    tempMax: {
        marginRight: '2rem'
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: '20%',
        fontSize: '1rem',
        padding: '0.5rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        border: '2px solid #fff',
        color: '#fff',
        marginTop: '1rem',
        cursor: 'pointer',
        transition: '.all 2s',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        '&:active': {
            transform: 'scale(1)'

        }
    }
})