import { selectSignInData, setOpen } from 'features/auth/sign_in/signInSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import styles from "./styles/password.module.scss"
import ForgotPasswordForm from './ForgotPasswordForm'
import SuccessSnackbar from './SuccessSnackbar'
import ErrorSnackbar from './ErrorSnackbar'

const ForgotPassword = () => {
    const dispatch = useDispatch()

    const { loading, email, errMsg, open, successMsg } = useSelector(selectSignInData)

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="error" size={50} />
            </Box>
        ) : (
            <Box className={styles.forgotPwdContainer}>
                {errMsg && (
                    <ErrorSnackbar
                        open={open}
                        errMsg={errMsg}
                        closeSnackbar={closeSnackbar}
                    />
                )}
                {successMsg && (
                    <SuccessSnackbar
                        open={open}
                        successMsg={successMsg}
                        closeSnackbar={closeSnackbar}
                    />
                )}
                <ForgotPasswordForm email={email} />
                <Box className={styles.formBackgroundImg}>
                    <img className={styles.jewelBg} src="/src/assets/main/auth_part.png" alt="Jewelry background" />
                    <span className={styles.textOnBg}>Plard
                        <span className={styles.partOfText}>Gold</span>
                    </span>
                </Box>
            </Box>
        )
    )
}

export default ForgotPassword