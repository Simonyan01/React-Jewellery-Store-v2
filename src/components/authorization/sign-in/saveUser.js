import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "utils/firebase"
import {
  clearFormData,
  setErrMsg,
  setFormData,
  setIsLoading,
  setOpen,
} from "features/auth/sign_in/signInSlice"

export const useSignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    dispatch(setFormData({ field: id, value }))
  }

  const handleSignIn = async (email, password) => {
    dispatch(setIsLoading(true))
    setTimeout(() => dispatch(setOpen(true)), 1000)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      dispatch(clearFormData())
      navigate("/")
    } catch (err) {
      let errorMessage = ""
      if (err.code === "auth/invalid-email") {
        errorMessage = "Invalid email or empty field. Please try again."
      } else if (err.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials. Please try again."
      } else if (err.code === "auth/too-many-requests") {
        errorMessage = "Too many requests. Please try again later."
      } else if (err.code === "auth/missing-password") {
        errorMessage = "Missing Password. Please try again."
      } else errorMessage = "An unexpected error occurred. Please try again."

      dispatch(setErrMsg(errorMessage))
      console.warn(err)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
  return { handleChange, handleSignIn }
}
