import { clearFormData, selectSignInData, setErrMsg, setFormData, setIsLoading, setIsOpen } from "features/auth/sign_in/signInSlice";
import { Alert, Box, CircularProgress, Snackbar, Stack } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  errorAlert, inputContainer } from "./styles";
import styles from "./sign-in.module.scss"
import { auth } from "utils/firebase";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { signInFormData, loading, errMsg, open } = useSelector(selectSignInData)
    const { userEmail, userPwd } = signInFormData

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setIsOpen(false))
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        dispatch(setFormData({ field: id, value }));
    };

    const handleSignIn = async (email, password) => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            dispatch(setIsOpen(true));
        }, 1000);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            dispatch(clearFormData())
            navigate('/');
        } catch (err) {
            let errorMessage = '';
            if (err.code === 'auth/invalid-email') {
                errorMessage = "Invalid email or empty field. Please try again.";
            } else if (err.code === 'auth/invalid-credential') {
                errorMessage = "Invalid credentials. Please try again.";
            } else if (err.code === 'auth/too-many-requests') {
                errorMessage = "Too many requests. Please try again later.";
            } else if (err.code === 'auth/missing-password') {
                errorMessage = "Missing Password. Please try again.";
            } else errorMessage = "An unexpected error occurred. Please try again.";

            dispatch(setErrMsg(errorMessage));
            console.warn(err);
        } finally {
            dispatch(setIsLoading(false))
        }
    }

    const inputFields = [
        { id: 'userEmail', label: 'Эл. адрес', type: 'email' },
        { id: 'userPwd', label: 'Пароль', type: 'password' },
    ];

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="error" size={50} />
            </Box>
        ) : (
            <Box className={styles.signInContainer}>
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
                <Stack sx={inputContainer}>
                    <Box className={styles.mainTitle}>Вход</Box>
                    {inputFields.map(({ id, label, type }) => (
                        <Box key={id}>
                            <label htmlFor={id}>{label}</label>
                            <input
                                id={id}
                                className={styles.typing}
                                value={signInFormData[id]}
                                type={type}
                                onChange={handleChange}
                            />
                        </Box>
                    ))}
                    <Box className={styles.textContainer}>
                        <input type="checkbox" />
                        <span className={styles.rememberMeText}>Запомни меня</span>
                    </Box>
                    <button
                        className={styles.signInButton}
                        onClick={() => handleSignIn(userEmail, userPwd)}
                        color="error"
                    >
                        Вход
                    </button>
                    <Box className={styles.recovery}>
                        <Box className={styles.forgotPassText}>Забыли Пароль?</Box>
                        <Link className={styles.retry} to="/forgot-password">Восстановить</Link>
                    </Box>
                </Stack>
                <Box className={styles.formBackgroundImg}>
                    <img
                        className={styles.jewelBg}
                        src="/src/assets/auth_part.png"
                        alt="Jewelry background"
                    />
                    <span className={styles.textOnBg}>Plard
                        <span className={styles.partOfText}>Gold</span>
                    </span>
                </Box>
            </Box>
        )
    )
}

export default SignIn