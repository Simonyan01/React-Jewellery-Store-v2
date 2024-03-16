import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectData, setAnchorEl } from "features/main/mainSlice";
import { removeUser } from "features/auth/sign_up/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from "@mui/icons-material";
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom"

const Header = ({ isAuth, name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { anchorEl } = useSelector(selectData)
    const open = Boolean(anchorEl);

    const handleClose = () => {
        dispatch(setAnchorEl(null))
    };

    const handleLogout = () => {
        // localStorage.removeItem('user');
        dispatch(removeUser());
        navigate('/login')
    };

    return (
        <AppBar position="fixed" color="default" sx={{ height: "70px", paddingRight: "5px", paddingLeft: "20px" }}>
            <Toolbar className="flex items-center justify-between h-full">
                <span className="select-none">
                    <img src="/src/assets/site_icon.png" alt="site_icon" />
                </span>
                <Box className="relative select-none">
                    <input
                        type="search"
                        placeholder="Поиск"
                        className="bg-[#E8EAEB] placeholder:text-[#BABABA] outline-none font-Montserrat placeholder:font-semibold px-4 placeholder:tracking-wider h-10 w-96 rounded-3xl"
                    />
                    <Box className="h-6 w-6 text-gray-400 absolute top-1/2 right-1 transform bg-[#C10016] p-4 rounded-3xl -translate-y-1/2">
                        <SearchIcon style={{ fontSize: 22 }} className="relative right-2.5 bottom-3.5 cursor-pointer text-white" />
                    </Box>
                </Box>
                {!isAuth ? (
                    <MenuItem>
                        <Box className="font-Montserrat font-semibold tracking-wider" onClick={() => navigate('/register')}>
                            Вход
                        </Box>
                    </MenuItem>
                ) : (
                    <>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={(e) => dispatch(setAnchorEl(e.currentTarget))}
                            color="inherit"
                        >
                            <AccountCircle fontSize="large" />
                            <span className="text-base pl-2 font-Montserrat text-[#4F4F4F] font-semibold tracking-wide">{name}</span>
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
                            <Divider
                                variant="fullWidth"
                                sx={{
                                    bgcolor: "#B3B3B4",
                                    marginX: 1
                                }}
                            />
                            <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: "center", gap: 1, marginTop: 0.5 }}>
                                <Box className="text-[#4F4F4F] font-Montserrat font-semibold text-base">Выход</Box>
                                <Logout className="text-[#939393]" fontSize="small" />
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;