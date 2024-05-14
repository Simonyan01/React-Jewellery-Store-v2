import ForgotPassword from "components/authorization/sign-in/reset-pwd/ForgotPassword";
import ResetPassword from "components/authorization/sign-in/reset-pwd/ResetPassword";
import SignIn from "components/authorization/sign-in/SignIn";
import SignUp from "components/authorization/sign-up/SignUp";
import { Route, Routes, useRoutes } from "react-router-dom"
import MainPage from "components/main/MainPage";

const Router = () => {
    const element = useRoutes([
        { path: "/", element: <MainPage /> },
        { path: "/login", element: <SignIn /> },
        { path: "/register", element: <SignUp /> },
        { path: "/reset", element: <ResetPassword /> },
        { path: "/forgot-password", element: <ForgotPassword /> }
    ])

    const routes = [
        { id: 1, path: '/' },
        { id: 2, path: '/register' },
        { id: 3, path: '/login' },
        { id: 4, path: '/forgot-password' },
        { id: 5, path: '/reset' }
    ];

    return (
        <Routes>
            {routes.map(({ path, id }) => <Route key={id} path={path} element={element} />)}
        </Routes>
    )
}

export default Router
