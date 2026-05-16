import React from 'react'

const DashboardHome = () => {
    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
                Dashboard Home
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white shadow p-5 rounded-xl">
                    <p className="text-gray-500">Posts</p>
                    <h2 className="text-2xl font-bold">24</h2>
                </div>

                <div className="bg-white shadow p-5 rounded-xl">
                    <p className="text-gray-500">Users</p>
                    <h2 className="text-2xl font-bold">120</h2>
                </div>

                <div className="bg-white shadow p-5 rounded-xl">
                    <p className="text-gray-500">Comments</p>
                    <h2 className="text-2xl font-bold">560</h2>
                </div>

            </div>

            <div className="mt-8 bg-white shadow p-5 rounded-xl">
                <h2 className="text-xl font-semibold mb-3">
                    Recent Activity
                </h2>

                <ul className="space-y-2 text-gray-600">
                    <li>🟢 New blog post published</li>
                    <li>🟡 Someone commented</li>
                    <li>🔵 New user joined</li>
                </ul>
            </div>

        </div>
    )
}

export default DashboardHome