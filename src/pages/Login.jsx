import React, { useState } from 'react'

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

import { auth } from '../firebase/firebase'

import { useNavigate } from 'react-router-dom'

import { FaGoogle } from 'react-icons/fa'

const Login = () => {

    const [isRegister, setIsRegister] = useState(false)

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    // 🔥 Email Login/Register
    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            // Register
            if (isRegister) {

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                alert("Register Success")

            }

            // Login
            else {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )

                alert("Login Success")

            }

            // 🔥 redirect
            navigate('/')

        } catch (error) {

            console.log(error)

            alert(error.message)

        }

    }

    // 🔥 Google Login
    const handleGoogleLogin = async () => {

        try {

            const provider = new GoogleAuthProvider()

            await signInWithPopup(
                auth,
                provider
            )

            alert("Google Login Success")

            navigate('/')

        } catch (error) {

            console.log(error)

            alert(error.message)

        }

    }

    return (

        <section className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-6 py-6'>

            <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden'>

                {/* Top */}
                <div className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-6 px-6'>

                    <h1 className='text-4xl font-extrabold mb-3'>

                        {
                            isRegister
                                ? "Create Account"
                                : "Welcome Back"
                        }

                    </h1>

                </div>

                {/* Form */}
                <div className='p-8'>

                    <form
                        onSubmit={handleSubmit}
                        className='space-y-5'
                    >

                        {/* Email */}
                        <div>

                            <label className='block mb-2 font-medium'>
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-500'
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className='block mb-2 font-medium'>
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-500'
                            />

                        </div>

                        {/* Submit */}
                        <button
                            type='submit'
                            className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] duration-300'
                        >

                            {
                                isRegister
                                    ? "Register"
                                    : "Login"
                            }

                        </button>

                    </form>

                    {/* Divider */}
                    <div className='flex items-center gap-4 my-8'>

                        <div className='flex-1 h-[1px] bg-gray-300'></div>

                        <span className='text-gray-400 text-sm'>
                            OR
                        </span>

                        <div className='flex-1 h-[1px] bg-gray-300'></div>

                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className='w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 duration-300'
                    >

                        <FaGoogle className='text-red-500' />

                        Continue with Google

                    </button>

                    {/* Toggle */}
                    <div className='text-center mt-8'>

                        <p className='text-gray-500'>

                            {
                                isRegister
                                    ? "Already have account?"
                                    : "Don't have account?"
                            }

                        </p>

                        <button
                            onClick={() =>
                                setIsRegister(!isRegister)
                            }
                            className='text-purple-500 font-semibold mt-2 hover:underline'
                        >

                            {
                                isRegister
                                    ? "Login"
                                    : "Register"
                            }

                        </button>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Login