import { selectSignInData, setOpen } from 'features/auth/sign_in/signInSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Snackbar } from '@mui/material'
import { errorAlert } from './styles/styles'

const ErrorSnackbar = ({ open }) => {
    const dispatch = useDispatch()

    const { errMsg } = useSelector(selectSignInData)

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };

    return (
        <>
            {errMsg && (
                <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
                    <Alert
                        severity="error"
                        variant="filled"
                        sx={errorAlert}
                    >
                        {errMsg}
                    </Alert>
                </Snackbar>
            )}
        </>
    )
}

export default ErrorSnackbar