import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-white shadow p-5 ">

                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide mb-6">
                    Dashboard
                </h1>

                <nav className="flex flex-col gap-3">

                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/dashboard/notification"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        Notification
                    </NavLink>

                    <NavLink
                        to="/dashboard/settings"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded"
                                : "px-4 py-2 rounded hover:bg-gray-200"
                        }
                    >
                        Settings
                    </NavLink>

                </nav>

            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout