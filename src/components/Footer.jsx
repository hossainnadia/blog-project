import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-gray-950 text-white mt-20'>

            <div className='max-w-7xl mx-auto px-6 py-16'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

                    {/* Logo & Description */}
                    <div>

                        <h1 className='text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-5'>
                            Blogs
                        </h1>

                        <p className='text-gray-400 leading-7'>
                            Explore modern blogs, coding tutorials,
                            APIs, React guides, and developer resources.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h2 className='text-2xl font-bold mb-5'>
                            Quick Links
                        </h2>

                        <div className='flex flex-col gap-4 text-gray-400'>

                            <Link
                                to="/"
                                className='hover:text-purple-400 duration-300'
                            >
                                Home
                            </Link>

                            <Link
                                to="/all-blogs"
                                className='hover:text-purple-400 duration-300'
                            >
                                Blogs
                            </Link>

                            <Link
                                to="/contact"
                                className='hover:text-purple-400 duration-300'
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                    {/* Categories */}
                    <div>

                        <h2 className='text-2xl font-bold mb-5'>
                            Categories
                        </h2>

                        <div className='flex flex-col gap-4 text-gray-400'>

                            <p>React JS</p>
                            <p>JavaScript</p>
                            <p>APIs</p>
                            <p>Web Development</p>

                        </div>

                    </div>

                    {/* Social */}
                    <div>

                        <h2 className='text-2xl font-bold mb-5'>
                            Follow Us
                        </h2>

                        <div className='flex gap-4'>

                            <a
                                href="/"
                                className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500 duration-300'
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="/"
                                className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 duration-300'
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="/"
                                className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-700 duration-300'
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="/"
                                className='w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 duration-300'
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className='border-t border-white/10 mt-14 pt-6 text-center text-gray-500'>

                    <p>
                        © 2026 Blogs. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer