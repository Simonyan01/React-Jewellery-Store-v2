import { selectSignUpData } from "features/auth/sign_up/signUpSlice"
import { useSelector } from "react-redux"

export const useAuth = () => {
  const { name, email, token, id } = useSelector(selectSignUpData)

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  }
}
