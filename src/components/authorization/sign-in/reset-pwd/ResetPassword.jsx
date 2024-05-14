import { selectSignInData } from 'features/auth/sign_in/signInSlice'
import { Box, CircularProgress } from '@mui/material'
import ResetPasswordForm from './ResetPasswordForm'
import styles from "./styles/password.module.scss"
import { useSelector } from 'react-redux'

const ResetPassword = () => {
    const { loading } = useSelector(selectSignInData)

    return (
        loading ? (
            <Box className={styles.loaderContainer}>
                <CircularProgress color="error" size={50} />
            </Box>
        ) : (
            <Box className={styles.resetPwdContainer}>
                <ResetPasswordForm />
            </Box>
        )
    )
}

export default ResetPassword