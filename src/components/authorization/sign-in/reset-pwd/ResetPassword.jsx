import { selectSignInData, setPassword } from 'features/auth/sign_in/signInSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../reset-pwd/password.module.scss"
import { Box, Stack } from '@mui/material'
import { UseAuth } from 'context/useAuth'

const useQuery = () => new URLSearchParams(useLocation().search)

const ResetPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const query = useQuery()

    const { resetPassword } = UseAuth()
    const { password } = useSelector(selectSignInData)

    const handleResetPassword = async () => {
        try {
            await resetPassword(query.get('oobCode'), password)
            dispatch(setPassword(""))
            navigate("/login")
        } catch (err) {
            console.warn(err);
        }
    }

    const handleChange = (e) => {
        dispatch(setPassword(e.target.value))
    };

    return (
        <Box className={styles.resetPwdContainer}>
            <Stack spacing={2}>
                <Box className={styles.mainTitle}>Введите новый пароль</Box>
                <input
                    className={styles.typing}
                    value={password}
                    type="password"
                    onChange={handleChange}
                />
                <button
                    className={styles.sentButton}
                    onClick={handleResetPassword}
                    color="error">
                    Отправить
                </button>
            </Stack>
        </Box>
    )
}

export default ResetPassword