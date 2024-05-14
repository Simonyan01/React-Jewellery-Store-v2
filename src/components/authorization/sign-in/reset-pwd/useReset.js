import { setEmail, setErrMsg, setIsLoading, setOpen, setPassword, setSuccessMsg } from "features/auth/sign_in/signInSlice"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { UseAuth } from "context/useAuth"

const useQuery = () => new URLSearchParams(useLocation().search)

const useResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = useQuery()

  const { forgotPassword, resetPassword } = UseAuth()

  const handleChangeEmail = (e) => dispatch(setEmail(e.target.value))

  const handleChangePassword = (e) => dispatch(setPassword(e.target.value))

  const handleForgotPassword = async (email) => {
    dispatch(setIsLoading(true))

    setTimeout(() => {
      dispatch(setOpen(true))
    }, 1000)

    try {
      await forgotPassword(email)
      dispatch(setSuccessMsg("Password reset email sent successfully."))
      dispatch(setEmail(""))

      setTimeout(() => navigate("/login"), 2500)
    } catch (err) {
      let errorMessage = ""
      if (err.code === "auth/missing-email") {
        errorMessage = "Empty field. Please try again."
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Invalid email. Please try again."
      } else errorMessage = "An unexpected error occurred. Please try again."

      dispatch(setErrMsg(errorMessage))
      console.warn(err)
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  const handleResetPassword = async (password) => {
    dispatch(setIsLoading(true))

    try {
      await resetPassword(query.get("oobCode"), password)
      dispatch(setPassword(""))
      dispatch(setOpen(true))
    } catch (err) {
      console.warn(err)
    } finally {
      dispatch(setIsLoading(false))
      dispatch(setOpen(false))
      navigate("/login")
    }
  }

  return { handleChangeEmail, handleChangePassword, handleForgotPassword, handleResetPassword }
}

export default useResetPassword
