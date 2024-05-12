import { selectSignInData } from "features/auth/sign_in/signInSlice";
import { Box, Stack } from "@mui/material";
import { inputContainer } from "./styles";
import styles from "./sign-in.module.scss"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSignIn } from "./saveUser";


const InputContainer = ({ userEmail, userPwd }) => {
    const { handleSignIn, handleChange } = useSignIn()
    const { signInFormData } = useSelector(selectSignInData)

    const inputFields = [
        { id: 'userEmail', label: 'Эл. адрес', type: 'email' },
        { id: 'userPwd', label: 'Пароль', type: 'password' },
    ];

    return (
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
    )
}

export default InputContainer