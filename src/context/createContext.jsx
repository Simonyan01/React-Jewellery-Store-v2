import { confirmPasswordReset, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "utils/firebase"

export const UserContext = createContext({
    currentUser: null,
    forgotPassword: () => Promise,
    resetPassword: () => Promise,
})

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])

    const forgotPassword = (email) => sendPasswordResetEmail(auth, email, { url: `http://localhost:3000/login` })

    const resetPassword = (oobCode, newPassword) => confirmPasswordReset(auth, oobCode, newPassword)

    const value = {
        currentUser,
        forgotPassword,
        resetPassword,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
