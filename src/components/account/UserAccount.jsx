import { saveCreatedUser } from 'features/auth/sign_up/signUpSlice';
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { UseAuth } from "hooks/use-auth";
import { useEffect } from 'react';

const UserAccount = () => {
    const dispatch = useDispatch();

    const { isAuth } = UseAuth()

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        storedUser && dispatch(saveCreatedUser(JSON.parse(storedUser)));
    }, [dispatch]);

    return (
        <>
            {isAuth && <Typography variant="h1" color={"ActiveBorder"}>Welcome!!!</Typography>}
        </>
    );
};

export default UserAccount;