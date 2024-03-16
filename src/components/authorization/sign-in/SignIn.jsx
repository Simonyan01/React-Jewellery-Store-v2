import { clearFormData, selectSignInData, setErrMsg, setFormData, setLoading, setOpen } from "features/auth/sign_in/signInSlice";
import { saveCreatedUser, selectSignUpData } from "features/auth/sign_up/signUpSlice";
import { Alert, Box, CircularProgress, Snackbar, Stack } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sign-in.module.scss"
import { auth } from "utils/firebase";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { signInFormData, loading, errMsg, open } = useSelector(selectSignInData)
    const { userEmail, userPwd } = signInFormData

    const { signUpFormData } = useSelector(selectSignUpData)
    const { fullName } = signUpFormData

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        dispatch(setFormData({ field: id, value }));
    };

    const handleSignIn = async (email, password) => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(setOpen(true));
        }, 1000);

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            // localStorage.setItem("user", JSON.stringify({ email }));

            dispatch(saveCreatedUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
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
            } else errorMessage = "An unexpected error occurred. Please try again.";

            dispatch(setErrMsg(errorMessage));
            console.warn(err);
        } finally {
            dispatch(setLoading(false))
        }
    }

    const inputFields = [
        { id: 'userEmail', label: 'Эл. адрес', type: 'email' },
        { id: 'userPwd', label: 'Пароль', type: 'password' },
    ];

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="success" size={50} />
            </Box>
        ) : (
            <Box className={styles.signInContainer}>
                {errMsg && (
                    <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
                        <Alert
                            severity="error"
                            variant="filled"
                            sx={{ fontSize: 18, mb: 4, fontFamily: "serif", letterSpacing: 1 }}
                        >
                            {errMsg}
                        </Alert>
                    </Snackbar>
                )}
                <Stack sx={{ gap: 1, paddingX: 2, width: "270px" }}>
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
                    <Box className="flex gap-2 select-none">
                        <input type="checkbox" />
                        <span className={styles.saveMe}>Запомни меня</span>
                    </Box>
                    <button
                        className={styles.signInButton}
                        onClick={() => handleSignIn(userEmail, userPwd)}
                        color="error">
                        Вход
                    </button>
                    <Box className={styles.recovery}>
                        <Box className={styles.forgotPassText}>Забыли Пароль?</Box>
                        <Link className="font-semibold" to="/forgot-password">Восстановить</Link>
                    </Box>
                </Stack>
                <Box className="relative select-none">
                    <img className={styles.jewelBg} src="/src/assets/auth_part.png" alt="Jewelry background" />
                    <span className={styles.textOnBg}>Plard<span className="font-medium">Gold</span></span>
                </Box>
            </Box>
        )
    )
}

export default SignIn