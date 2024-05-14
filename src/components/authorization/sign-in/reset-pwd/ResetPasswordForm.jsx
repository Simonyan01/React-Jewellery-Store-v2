import styles from "./styles/password.module.scss"
import { Box, Stack } from '@mui/material'
import useResetPassword from './useReset.js'

const ResetPasswordForm = ({ password }) => {
    const { handleChangePassword, handleResetPassword } = useResetPassword()

    return (
        <Stack spacing={2}>
            <Box className={styles.mainTitle}>Введите новый пароль</Box>
            <input
                className={styles.typing}
                value={password}
                type="password"
                onChange={handleChangePassword}
            />
            <button
                className={styles.sendButton}
                onClick={() => handleResetPassword(password)}
                color="error">
                Войти
            </button>
        </Stack>
    )
}

export default ResetPasswordForm 