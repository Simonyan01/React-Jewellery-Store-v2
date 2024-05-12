import { selectSignInData } from "features/auth/sign_in/signInSlice";
import InputContainer from "./InputContainer";
import ErrorSnackbar from "./ErrorSnackbar";
import styles from "./sign-in.module.scss"
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Loading from "./Loading";

const SignIn = () => {
    const { userEmail, userPwd, loading } = useSelector(selectSignInData)

    return (
        loading ? (
            <Loading />
        ) : (
            <Box className={styles.signInContainer}>
                <ErrorSnackbar />
                <InputContainer userEmail={userEmail} userPwd={userPwd} />
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