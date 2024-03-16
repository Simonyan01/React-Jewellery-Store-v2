import UserContextProvider from 'context/createContext.jsx'
import Header from 'components/header/Header';
import { UseAuth } from 'hooks/use-auth';
import Router from 'routes/Router';

const App = () => {
  const { isAuth, name } = UseAuth()

  return (
    <UserContextProvider>
      <Header isAuth={isAuth} name={name} />
      <Router />
    </UserContextProvider>
  )
}

export default App
