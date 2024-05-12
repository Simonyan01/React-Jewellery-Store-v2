import { Box, CircularProgress } from '@mui/material'
import styles from "./sign-in.module.scss"

const Loading = () => {
    return (
        <Box className={styles.loaderContainer}>
            <CircularProgress color="error" size={50} />
        </Box>
    )
}

export default Loading