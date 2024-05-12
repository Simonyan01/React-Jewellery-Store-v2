import { selectSignInData, setEmail, setErrMsg, setIsLoading, setOpen, setSuccessMsg } from 'features/auth/sign_in/signInSlice'
import { Alert, Box, CircularProgress, Snackbar, Stack } from '@mui/material'
import { errorAlert, inputContainer, successAlert } from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./password.module.scss"
import { UseAuth } from 'context/useAuth'

const ForgotPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { forgotPassword } = UseAuth()
    const { loading, email, errMsg, open, successMsg } = useSelector(selectSignInData)

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };

    const handleChange = (e) => {
        dispatch(setEmail(e.target.value))
    };

    const handleForgotPassword = async (email) => {
        dispatch(setIsLoading(true))

        setTimeout(() => {
            dispatch(setOpen(true));
        }, 1000);

        try {
            await forgotPassword(email)
            dispatch(setSuccessMsg("Password reset email sent successfully."))
            dispatch(setEmail(""))

            setTimeout(() => navigate("/login"), 3000);
        } catch (err) {
            let errorMessage = '';
            if (err.code === 'auth/missing-email') {
                errorMessage = "Empty field. Please try again.";
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = "Invalid email. Please try again.";
            } else errorMessage = "An unexpected error occurred. Please try again.";

            dispatch(setErrMsg(errorMessage));
            console.warn(err);
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="error" size={50} />
            </Box>
        ) : (
            <Box className={styles.forgotPwdContainer}>
                {errMsg && (
                    <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
                        <Alert severity="error" variant="filled" sx={errorAlert}>
                            {errMsg}
                        </Alert>
                    </Snackbar>
                )}
                {successMsg && (
                    <Snackbar open={open} autoHideDuration={2000} onClose={closeSnackbar}>
                        <Alert severity="error" variant="filled" sx={successAlert}>
                            {successMsg}
                        </Alert>
                    </Snackbar>
                )}
                <Stack sx={inputContainer}>
                    <Box className={styles.mainTitle}>Восстановление Пароля</Box>
                    <span className={styles.exampleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis a sapien tristique semper vulputate nisl. Laoreet pharetra donec diam fusce et.</span>
                    <label htmlFor="email">Эл. адрес</label>
                    <input
                        id="email"
                        className={styles.typing}
                        value={email}
                        type="email"
                        onChange={handleChange}
                    />
                    <button
                        className={styles.forgotPwdButton}
                        onClick={() => handleForgotPassword(email)}
                        color="error">
                        Отправить
                    </button>
                    <Box className={styles.recovery}>
                        <Box className={styles.forgotPassText}>Помните Свой Пароль??</Box>
                        <Link className={styles.retry} to="/login">Попробовать Сново</Link>
                    </Box>
                </Stack>
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