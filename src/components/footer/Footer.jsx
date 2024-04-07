import { Box } from '@mui/material'
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <Box
            position='fixed'
            className={styles.footerContainer}
            color='default'
        />
    )
}

export default Footer