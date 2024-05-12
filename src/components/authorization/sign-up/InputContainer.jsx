import { selectSignUpData } from 'features/auth/sign_up/signUpSlice';
import { useSelector } from "react-redux"
import styles from "./sign-up.module.scss"
import { inputContainer } from './styles';
import { Box, Stack } from '@mui/material';
import { useSignUp } from './createUser';

const InputContainer = () => {

    const { handleSignUp, handleChange } = useSignUp();

    const { signUpFormData } = useSelector(selectSignUpData)
    const { fullName, userEmail, userPwd } = signUpFormData

    const inputFields = [
        { id: 'fullName', label: 'Полное Имя', type: 'text' },
        { id: 'userEmail', label: 'Эл. адрес', type: 'email' },
        { id: 'userPwd', label: 'Пароль', type: 'password' },
        { id: 'repeatPwd', label: 'Повторите Пароль', type: 'password' }
    ];

    return (
        <Stack sx={inputContainer}>
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
    )
}

export default InputContainer