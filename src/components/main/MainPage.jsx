import { saveCreatedUser } from 'features/auth/sign_up/signUpSlice';
import { ColorTabs } from './categories/ColorTabs';
import Category from './categories/Category';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Box } from '@mui/material';

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        storedUser && dispatch(saveCreatedUser(JSON.parse(storedUser)));
    }, [dispatch]);

    return (
        <Box className="px-12">
            <Category />
            <ColorTabs />
        </Box>
    );
};

export default MainPage;