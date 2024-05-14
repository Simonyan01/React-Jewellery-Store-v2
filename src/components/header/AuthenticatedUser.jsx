import { createUser, divider, logoutContainer, paperStyles, personalContainer, personalText } from "./styles/styles";
import { Avatar, Box, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectData, setAnchorEl } from "features/main/mainSlice";
import { removeUser } from "features/auth/sign_up/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import admin from "/src/assets/main/admin.jpg"
import styles from "./styles/header.module.scss"

const AuthenticatedUser = ({ name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { anchorEl } = useSelector(selectData)
    const open = Boolean(anchorEl);

    const handleClose = () => dispatch(setAnchorEl(null))

    const toggleIcon = (e) => dispatch(setAnchorEl(e.currentTarget))

    const handleLogout = () => {
        dispatch(removeUser());
        navigate('/')
    };

    return (
        <>
            <IconButton
                size="large"
                onClick={toggleIcon}
                color="inherit"
            >
                <Avatar src={admin} alt="Lyov's image" />
                <span className={styles.userName}>{name || "User"}</span>
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
    )
}

export default AuthenticatedUser