import { appBar, createUser, divider, logoutContainer, paperStyles, personalContainer, personalText, searchIcon } from "./styles";
import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectData, setAnchorEl } from "features/main/mainSlice";
import { removeUser } from "features/auth/sign_up/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from "@mui/icons-material";
import Logout from '@mui/icons-material/Logout';
import styles from "./header.module.scss"

const Header = ({ isAuth, name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { anchorEl } = useSelector(selectData)
    const open = Boolean(anchorEl);

    const handleClose = () => {
        dispatch(setAnchorEl(null))
    };

    const toggleIcon = (e) => dispatch(setAnchorEl(e.currentTarget))

    const handleLogout = () => {
        dispatch(removeUser());
        navigate('/login')
    };

    return (
        <AppBar position="fixed" color="inherit" sx={appBar}>
            <Toolbar className={styles.toolbar}>
                <span className={styles.siteIcon}>
                    <img src="/src/assets/site_icon.png" alt="site_icon" />
                </span>
                <Box className={styles.searchBar}>
                    <input type="search" placeholder="Поиск" />
                    <Box className={styles.searchIconContainer}>
                        <SearchIcon style={searchIcon} className={styles.searchIcon} />
                    </Box>
                </Box>
                {!isAuth ? (
                    <Link to='/register' className={styles.signIn}>Вход</Link>
                ) : (
                    <>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleIcon}
                            color="inherit"
                        >
                            <AccountCircle fontSize="large" />
                            <span className={styles.userName}>{name}</span>
                            <KeyboardArrowDownIcon fontSize="inherit" className={styles.arrowDownIcon} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={paperStyles}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Box sx={personalContainer}>
                                <Box sx={personalText}>
                                    Личные Данные
                                </Box>
                                <MenuItem sx={createUser} onClick={() => navigate('/register')}>
                                    Создать Пользователя
                                </MenuItem>
                            </Box>
                            <Divider
                                variant="fullWidth"
                                sx={divider}
                            />
                            <MenuItem onClick={handleLogout} sx={logoutContainer}>
                                <Box className={styles.signUp}>Выход</Box>
                                <Logout className={styles.logoutIcon} fontSize="small" />
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;