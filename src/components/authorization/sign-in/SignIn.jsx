import { selectSignInData } from "features/auth/sign_in/signInSlice";
import styles from "./styles/sign-in.module.scss"
import SignInForm from "./SignInForm";
import ErrorSnackbar from "./ErrorSnackbar";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Loading from "./Loading";

const SignIn = () => {
    const { open, errMsg, userEmail, userPwd, loading } = useSelector(selectSignInData)

    return (
        loading ? (
            <Loading />
        ) : (
            <Box className={styles.signInContainer}>
                {errMsg && <ErrorSnackbar open={open} />}
                <SignInForm userEmail={userEmail} userPwd={userPwd} />
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
            </Box>
        )
    )
}

export default SignIn