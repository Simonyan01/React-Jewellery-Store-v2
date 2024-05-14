import { inputContainer } from '../styles/styles.js'
import styles from "./styles/password.module.scss"
import { Box, Stack } from '@mui/material'
import useResetPassword from './useReset.js'
import { Link } from 'react-router-dom'

const ForgotPasswordForm = ({ email }) => {
    const { handleChangeEmail, handleForgotPassword } = useResetPassword()

    return (
        <Stack sx={inputContainer}>
            <Box className={styles.mainTitle}>Восстановление Пароля</Box>
            <span className={styles.exampleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis a sapien tristique semper vulputate nisl. Laoreet pharetra donec diam fusce et.</span>
            <label htmlFor="email">Эл. адрес</label>
            <input
                id="email"
                className={styles.typing}
                value={email}
                type="email"
                onChange={handleChangeEmail}
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
    )
}

export default ForgotPasswordForm 