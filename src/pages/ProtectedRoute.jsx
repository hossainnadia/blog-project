import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {

    const { user } = useAuth()

    // 🔥 loading hole kichu dekhabe
    if (user === undefined) {

        return <h1>Loading...</h1>

    }

    // 🔥 login nai
    if (!user) {

        return <Navigate to="/login" replace />

    }

    // 🔥 login ase
    return children

}

export default ProtectedRoute