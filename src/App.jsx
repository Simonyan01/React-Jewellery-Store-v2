import UserContextProvider from 'context/createContext.jsx'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { useAuth } from 'hooks/use-auth';
import { Box } from '@mui/material';
import Router from 'routes/Router';

const App = () => {
  const { isAuth, name } = useAuth()

  return (
    <UserContextProvider>
      <Box className="flex flex-col min-h-screen">
        <Header isAuth={isAuth} name={name} />
        <Box className="flex-1">
          <Router />
        </Box>
        <Footer />
      </Box>
    </UserContextProvider>

  )
}

export default App
