import { selectSignUpData, setOpen } from "features/auth/sign_up/signUpSlice"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Snackbar } from "@mui/material"
import { errorAlert } from "./styles"

const ErrorSnackbar = () => {
    const dispatch = useDispatch()

    const { open, errMsg } = useSelector(selectSignUpData)

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
            <Alert
                severity="error"
                variant="filled"
                sx={errorAlert}
            >
                {errMsg}
            </Alert>
        </Snackbar>
    )
}

export default ErrorSnackbar