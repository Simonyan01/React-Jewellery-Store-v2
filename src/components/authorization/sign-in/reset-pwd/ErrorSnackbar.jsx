import { Alert, Snackbar } from "@mui/material"
import { errorAlert } from "../styles/styles"

const ErrorSnackbar = ({ errMsg, open, closeSnackbar }) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
            <Alert severity="error" variant="filled" sx={errorAlert}>
                {errMsg}
            </Alert>
        </Snackbar>
    )
}

export default ErrorSnackbar