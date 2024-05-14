import { selectSignUpData } from 'features/auth/sign_up/signUpSlice';
import ErrorSnackbar from './ErrorSnackbar';
import styles from "./sign-up.module.scss"
import { useSelector } from "react-redux"
import SignUpForm from './SignUpForm';
import { Box } from '@mui/material';
import Loading from './Loading';

const SignUp = () => {
    const { loading, errMsg } = useSelector(selectSignUpData)

    return (
        loading ? (
            <Loading />
        ) : (
            <Box className={styles.signUpContainer}>
                {errMsg && <ErrorSnackbar />}
                <Box className={styles.formBackgroundImg}>
                    <img
                        className={styles.jewelBg}
                        src="/src/assets/main/auth_part.png"
                        alt="Jewelry background"
                    />
                    <span className={styles.textOnBg}>Plard
                        <span className={styles.partOfText}>Gold</span>
                    </span>
                </Box>
                <SignUpForm />
            </Box>
        )
    )
}

export default SignUp