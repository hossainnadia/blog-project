import React from 'react'

const Notification = () => {
    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wides">
                Notifications
            </h1>

            <div className="bg-white shadow p-5 rounded-xl space-y-3">

                <p>🔔 New user registered</p>
                <p>💬 New comment on post</p>
                <p>📢 Blog post published</p>

            </div>

        </div>
    )
}

export default Notification