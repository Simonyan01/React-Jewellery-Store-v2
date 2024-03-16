import { selectSignUpData, setErrMsg, setLoading, setOpen, saveCreatedUser, setFormData, clearFormData } from 'features/auth/sign_up/signUpSlice';
import { Alert, Box, CircularProgress, Snackbar, Stack, } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styles from "./sign-up.module.scss"
import { auth } from 'utils/firebase';

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { signUpFormData, loading, open, errMsg } = useSelector(selectSignUpData)
    const { fullName, userEmail, userPwd } = signUpFormData

    const closeSnackbar = (_, reason) => {
        if (reason === 'clickaway') return

        dispatch(setOpen(false))
    };

    const handleSignUp = async (fullName, email, password) => {
        dispatch(setLoading(true))
        setTimeout(() => {
            dispatch(setOpen(true));
        }, 1000);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem("user", JSON.stringify({ fullName, email }));

            dispatch(saveCreatedUser({
                name: user.fullName,
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/');
            dispatch(clearFormData());
        } catch (err) {
            let errorMessage = "";
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = "Email already exists. Please choose another one.";
            } else if (err.code === 'auth/weak-password') {
                errorMessage = "Password should be at least 6 characters";
            } else if (err.code === 'auth/missing-password') {
                errorMessage = "The Password is missing";
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = "Invalid email or empty field. Please try again.";
            } else errorMessage = "An unexpected error occurred. Please try again.";

            dispatch(setErrMsg(errorMessage));
            console.warn(err);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        dispatch(setFormData({ field: id, value }));
    };

    const inputFields = [
        { id: 'fullName', label: 'Полное Имя', type: 'text' },
        { id: 'userEmail', label: 'Эл. адрес', type: 'email' },
        { id: 'userPwd', label: 'Пароль', type: 'password' },
        { id: 'repeatPwd', label: 'Повторите Пароль', type: 'password' }
    ];

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="success" size={50} />
            </Box>
        ) : (
            <Box className={styles.signUpContainer}>
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
                <Box className="relative select-none">
                    <img className={styles.jewelBg} src="/src/assets/auth_part.png" alt="Jewelry background" />
                    <span className={styles.textOnBg}>Plard<span className="font-medium">Gold</span></span>
                </Box>
                <Stack sx={{ gap: 1, paddingX: 2, width: "270px", height: "100%" }}>
                    <Box className={styles.mainTitle}>Регистрация</Box>
                    {inputFields.map(({ id, label, type }) => (
                        <Box key={id}>
                            <label htmlFor={id}>{label}</label>
                            <input
                                id={id}
                                className={styles.typing}
                                value={signUpFormData[id]}
                                type={type}
                                onChange={handleChange}
                            />
                        </Box>
                    ))}
                    <button
                        className={styles.signUpButton}
                        onClick={() => handleSignUp(fullName, userEmail, userPwd)}
                        color="error"
                    >
                        Регистрация
                    </button>
                </Stack>
            </Box>
        )
    )
}

export default SignUp