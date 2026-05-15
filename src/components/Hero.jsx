import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white'>

            {/* Background Blur */}
            <div className='absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30'></div>

            <div className='absolute bottom-0 right-0 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-30'></div>

            {/* Content */}
            <div className='max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10'>

                <div className='max-w-3xl'>

                    <span className='bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm inline-block mb-6'>
                        🚀 Discover Amazing Blogs
                    </span>

                    <h1 className='text-5xl md:text-7xl font-extrabold leading-tight mb-6'>
                        Read Modern Tech &
                        <span className='block text-yellow-300'>
                            Developer Blogs
                        </span>
                    </h1>

                    <p className='text-lg md:text-xl text-gray-200 leading-8 mb-10'>
                        Explore the latest tutorials, APIs, coding tips,
                        JavaScript tricks, React guides, and modern web
                        development resources.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap gap-5'>

                        <Link
                            to="/all-blogs"
                            className='bg-white text-purple-600 px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl'
                        >
                            Explore Blogs
                        </Link>

                        <button
                            className='border border-white/40 px-7 py-3 rounded-full backdrop-blur-md hover:bg-white/10 duration-300'
                        >
                            Learn More
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero