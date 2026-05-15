import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react'

import {
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

import { auth } from '../firebase/firebase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(undefined)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const unsubscribe =
            onAuthStateChanged(auth, (currentUser) => {

                setUser(currentUser)

                setLoading(false)
                // console.log(currentUser)

            })

        return () => unsubscribe()

    }, [])

    const logout = async () => {

        await signOut(auth)

    }

    return (

        <AuthContext.Provider value={{
            user,
            logout
        }}>

            {
                loading
                    ? <h1>Loading...</h1>
                    : children
            }

        </AuthContext.Provider>

    )

}

export const useAuth = () => useContext(AuthContext)