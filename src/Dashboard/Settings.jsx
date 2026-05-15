import React from 'react'

const Settings = () => {
    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
                Settings
            </h1>

            <div className="bg-white shadow p-5 rounded-xl space-y-4">

                <div>
                    <label className="block text-gray-600">Username</label>
                    <input
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter username"
                    />
                </div>

                <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter email"
                    />
                </div>

                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded">
                    Save Changes
                </button>

            </div>

        </div>
    )
}

export default Settings