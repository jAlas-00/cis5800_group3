import { createContext, useContext, useEffect, useState } from "react"
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from 'firebase/auth'


const AuthContext = createContext({//used for auto completion
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})

export const useAuth = () => useContext(AuthContext)                //useAuth

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,user => {
            setCurrentUser(user)
        })
        return () => {
            unsubscribe() //runs when component unmounts
        }
    }, [])

    function register(email, password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function signInWithGoogle(){
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    function forgotPassword (email) {
        return sendPasswordResetEmail(auth, email, {
            url: 'https://library-d7170.web.app/',
        })
    }

    function logout() {
        return signOut(auth)
    }

    //creates another object with the values of the context
    const value = {
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle,
        forgotPassword,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}