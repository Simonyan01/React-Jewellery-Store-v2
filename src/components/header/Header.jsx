import AuthenticatedUser from "./AuthenticatedUser";
import { AppBar, Toolbar } from "@mui/material";
import styles from "./header.module.scss"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import { appBar } from "./styles";

const Header = ({ isAuth, name }) => {
    return (
        <AppBar position="fixed" color="inherit" sx={appBar}>
            <Toolbar className={styles.toolbar}>
                <img
                    className={styles.siteIcon}
                    src="/src/assets/main/site_icon.png"
                    alt="site_icon"
                />
                <SearchBar />
                {isAuth ? (
                    <Link to='/login' className={styles.signIn}>Вход</Link>
                ) : (
                    <AuthenticatedUser name={name} />
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;