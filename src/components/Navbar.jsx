import React, { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import profile from '../assets/prda.jpg'

import { HiMenuAlt3, HiX } from 'react-icons/hi'

import { FaUserCircle } from 'react-icons/fa'

import { useAuth } from '../context/AuthContext'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const { user, logout } = useAuth()

    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Blogs",
            path: "/all-blogs"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return (

        <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'>

            <nav className='max-w-7xl mx-auto px-6 py-6 lg:px-10 flex justify-between items-center'>

                {/* Logo */}
                <Link to="/" className='flex items-center gap-2'>

                    <h1 className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide'>

                        Blogs

                    </h1>

                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-8'>

                    {
                        navLinks.map((link) => (

                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>

                                    `font-medium transition-all duration-300 hover:text-purple-500 relative
                                    
                                    ${isActive
                                        ? "text-purple-600"
                                        : "text-gray-700"
                                    }`
                                }
                            >

                                {link.name}

                            </NavLink>

                        ))
                    }

                </div>

                {/* Right Side */}
                <div className='hidden md:flex items-center gap-4'>

                    {
                        user ? (

                            <>

                                {/* User */}
                                <div className='flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full'>

                                    {
                                        user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt="profile"
                                                className='w-10 h-10 rounded-full object-cover border-2 border-purple-400'
                                            />
                                        ) : (
                                            <FaUserCircle className='text-3xl text-purple-500' />
                                        )
                                    }


                                </div>

                                {/* Logout */}
                                <button
                                    onClick={logout}
                                    className='bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 duration-300 shadow-md'
                                >

                                    Logout

                                </button>

                            </>

                        ) : (

                            <Link
                                to="/login"
                                className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full hover:scale-105 duration-300 shadow-lg'
                            >

                                Login

                            </Link>

                        )
                    }

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='md:hidden text-3xl text-purple-600'
                >

                    {
                        menuOpen
                            ? <HiX />
                            : <HiMenuAlt3 />
                    }

                </button>

            </nav>

            {/* Mobile Menu */}
            {
                menuOpen && (

                    <div className='md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-6 space-y-5'>

                        {
                            navLinks.map((link) => (

                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>

                                        `block text-lg font-medium
                                        
                                        ${isActive
                                            ? "text-purple-600"
                                            : "text-gray-700"
                                        }`
                                    }
                                >

                                    {link.name}

                                </NavLink>

                            ))
                        }

                        {/* Mobile User */}
                        {
                            user ? (

                                <div className='pt-4 border-t border-gray-200'>

                                    <div className='flex items-center gap-3 mb-4'>

                                        {
                                            user.photoURL ? (
                                                <img
                                                    src={user.photoURL}
                                                    alt="profile"
                                                    className='w-10 h-10 rounded-full object-cover border-2 border-purple-400'
                                                />
                                            ) : (
                                                <FaUserCircle className='text-3xl text-purple-500' />
                                            )
                                        }


                                    </div>

                                    <button
                                        onClick={logout}
                                        className='w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-xl'
                                    >

                                        Logout

                                    </button>

                                </div>

                            ) : (

                                <Link
                                    to="/login"
                                    className='block text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl'
                                >

                                    Login

                                </Link>

                            )
                        }

                    </div>

                )
            }

        </header>

    )
}

export default Navbar