import { Alert, Snackbar } from "@mui/material"
import { successAlert } from '../styles/styles'

const SuccessSnackbar = ({ successMsg, open, closeSnackbar }) => {
    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={closeSnackbar}>
            <Alert severity="success" variant="filled" sx={successAlert}>
                {successMsg}
            </Alert>
        </Snackbar>

    )
}

export default SuccessSnackbar