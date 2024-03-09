import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { removeUser, saveCreatedUser } from "features/auth/sign_up/signUpSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectData, setAnchorEl } from "features/main/mainSlice";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"
import { useAuth } from 'hooks/use-auth.jsx';
import { useEffect } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { anchorEl } = useSelector(selectData)
    const { isAuth, email } = useAuth();
    const open = Boolean(anchorEl);

    const handleClose = () => {
        dispatch(setAnchorEl(null))
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(removeUser());
        navigate('/login')
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        storedUser && dispatch(saveCreatedUser(JSON.parse(storedUser)));
    }, [dispatch, navigate]);

    return (
        <AppBar position="fixed" color="default" sx={{ height: "70px", paddingX: "14px" }}>
            <Toolbar className="flex items-center justify-center h-full">
                <span className="flex-grow select-none"><img src="/src/assets/site_icon.png" alt="site_icon" /></span>
                {isAuth ? (
                    <MenuItem>
                        <Box className="font-Montserrat font-semibold tracking-wider" onClick={() => navigate('/login')}>
                            Вход
                        </Box>
                    </MenuItem>
                ) : (
                    <Box>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(e) => dispatch(setAnchorEl(e.currentTarget))}
                            color="inherit"
                        >
                            <AccountCircle fontSize="large" />
                            <span className="text-base pl-2">Mary Tessa</span>
                            <KeyboardArrowDownIcon fontSize="inherit" className="text-[#4F4F4F]" />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Box className="grid place-items-center">
                                <Box sx={{ fontWeight: 700 }}>
                                    Личные Данные
                                </Box>
                                <MenuItem sx={{ lineHeight: 2, fontFamily: "Montserrat, sans-serif" }} onClick={() => navigate('/register')}>
                                    Создать Пользователя
                                </MenuItem>
                            </Box>
                            <Divider variant="fullWidth" sx={{
                                bgcolor: "#B3B3B4",
                                marginX: 1
                            }}
                            />
                            <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: "center", gap: 1, marginTop: 0.5 }}>
                                <Box className="text-[#4F4F4F] font-Montserrat font-semibold text-base">Выход</Box>
                                <Logout className="text-[#939393]" fontSize="small" />
                            </MenuItem>
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;