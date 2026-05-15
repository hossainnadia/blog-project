import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchBlogs = async () => {

            try {

                const res = await axios.get(
                    "https://www.freepublicapis.com/api/apis"
                )

                setBlogs(res.data)

            } catch (error) {

                console.log(error)

            } finally {

                setLoading(false)
            }

        }
        fetchBlogs()

    }, [])
    if (loading) {
        return (
            <div className='flex justify-center items-center h-[60vh]'>
                <h1 className='text-3xl font-bold animate-pulse'>
                    Loading All Blogs...
                </h1>
            </div>
        )
    }

    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>

            {/* Heading */}
            <div className='text-center mb-12'>

                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text'>
                    All Blogs
                </h1>

                <p className='text-gray-500 mt-4'>
                    Explore all available API blogs
                </p>

            </div>

            {/* Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                {
                    blogs.map((blog) => (

                        <div
                            key={blog.id}
                            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden'
                        >

                            {/* Image */}
                            <img
                                src={`https://picsum.photos/600/400?random=${blog.id}`}
                                alt={blog.title}
                                className='w-full h-52 object-cover hover:transition-all hover:duration-300 hover:scale-120'
                            />

                            {/* Content */}
                            <div className='p-6'>

                                <h2 className='text-xl font-bold mb-3 line-clamp-2'>
                                    {blog.title}
                                </h2>

                                <p className='text-gray-600 text-sm mb-5 line-clamp-3'>
                                    {blog.description}
                                </p>

                                <Link
                                    to={`/blogs/${blog.id}`}
                                    className='inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm hover:scale-105 duration-300'
                                >
                                    Read Details
                                </Link>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default AllBlogs