import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { auth } from "utils/firebase"
import {
  setLoading,
  setOpen,
  saveCreatedUser,
  setErrMsg,
  clearFormData,
  setFormData,
} from "features/auth/sign_up/signUpSlice"

export const useSignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignUp = async (fullName, email, password) => {
    dispatch(setLoading(true))
    setTimeout(() => dispatch(setOpen(true)), 1000)

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      localStorage.setItem("user", JSON.stringify({ fullName, email }))

      dispatch(
        saveCreatedUser({
          name: user.fullName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }),
      )
      navigate("/")
      dispatch(clearFormData())
    } catch (err) {
      let errorMessage = ""
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "Email already exists. Please choose another one."
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters"
      } else if (err.code === "auth/missing-password") {
        errorMessage = "The Password is missing"
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Invalid email or empty field. Please try again."
      } else errorMessage = "An unexpected error occurred. Please try again."

      dispatch(setErrMsg(errorMessage))
      console.warn(err)
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    dispatch(setFormData({ field: id, value }))
  }

  return { handleSignUp, handleChange }
}
