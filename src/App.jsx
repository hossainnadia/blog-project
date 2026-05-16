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

im
import DashboardLayout from './Dashboard/DashboardLayout'
import Settings from './dashboard/Settings'
import DashboardHome from './Dashboard/Home'
import Notifications from './Dashboard/Notifications'

const App = () => {

    const location = useLocation()

    // 👉 Navbar/Footer hide conditions
    const hideLayout =
        location.pathname.startsWith("/dashboard") ||
        location.pathname === "/login"

    return (
        <div>

            {/* Navbar (hide for dashboard + login) */}
            {!hideLayout && <Navbar />}

            <Routes>

                {/* 🔐 LOGIN */}
                <Route path="/login" element={<Login />} />

                {/* 🏠 BLOG PAGES (PROTECTED) */}
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

                {/* 📊 DASHBOARD ROUTES */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route index element={<DashboardHome />} />
                    <Route path="notification" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />

                </Route>

            </Routes>

            {/* Footer (hide for dashboard + login) */}
            {!hideLayout && <Footer />}

        </div>
    )
}

export default App