import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import BlogDetails from './pages/DetalisPage'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'


const App = () => {

    const location = useLocation()

    const hideLayout = location.pathname === "/login"

    return (
        <div>

            {!hideLayout && <Navbar />}

            <Routes>

                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/all-blogs"
                    element={
                        <ProtectedRoute>
                            <AllBlogs />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/blogs/:id"
                    element={<BlogDetails />}
                />

                <Route
                    path="/contact"
                    element={
                        <ProtectedRoute>
                            <Contact />
                        </ProtectedRoute>
                    }
                />

            </Routes>

            {!hideLayout && <Footer />}

        </div>
    )
}

export default App