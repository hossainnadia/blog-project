import React from 'react'
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from 'react-icons/fa'

const Contact = () => {
    return (
        <section className='min-h-screen bg-gray-50 py-20 px-6'>

            <div className='max-w-7xl mx-auto'>

                {/* Heading */}
                <div className='text-center mb-16'>

                    <h1 className='text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text mb-5'>
                        Contact Us
                    </h1>

                    <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
                        Have questions, feedback, or collaboration ideas?
                        Feel free to reach out to us anytime.
                    </p>

                </div>

                {/* Main Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                    {/* Left Info */}
                    <div className='bg-white rounded-3xl shadow-lg p-10'>

                        <h2 className='text-3xl font-bold mb-8'>
                            Get In Touch
                        </h2>

                        <div className='space-y-8'>

                            {/* Email */}
                            <div className='flex items-start gap-5'>

                                <div className='w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl'>
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Email
                                    </h3>

                                    <p className='text-gray-500 mt-1'>
                                        support@blogs.com
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className='flex items-start gap-5'>

                                <div className='w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl'>
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Phone
                                    </h3>

                                    <p className='text-gray-500 mt-1'>
                                        +880 1234-567890
                                    </p>
                                </div>

                            </div>

                            {/* Location */}
                            <div className='flex items-start gap-5'>

                                <div className='w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xl'>
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3 className='text-xl font-semibold'>
                                        Location
                                    </h3>

                                    <p className='text-gray-500 mt-1'>
                                        Chattogram, Bangladesh
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Form */}
                    <div className='bg-white rounded-3xl shadow-lg p-10'>

                        <h2 className='text-3xl font-bold mb-8'>
                            Send Message
                        </h2>

                        <form className='space-y-6'>

                            {/* Name */}
                            <div>

                                <label className='block mb-2 font-medium'>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    className='w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-500'
                                />

                            </div>

                            {/* Email */}
                            <div>

                                <label className='block mb-2 font-medium'>
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-500'
                                />

                            </div>

                            {/* Message */}
                            <div>

                                <label className='block mb-2 font-medium'>
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder='Write your message...'
                                    className='w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-purple-500 resize-none'
                                ></textarea>

                            </div>

                            {/* Button */}
                            <button
                                type='submit'
                                className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] duration-300'
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact