import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams()

    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchBlog = async () => {

            try {

                const res = await axios.get(
                    "https://www.freepublicapis.com/api/apis"
                )

                const allBlogs = res.data

                const singleBlog = allBlogs.find(
                    (item) => item.id == id
                )

                setBlog(singleBlog)

            } catch (error) {

                console.log(error)

            } finally {

                setLoading(false)
            }

        }

        fetchBlog()

    }, [id])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[60vh]'>
                <h1 className='text-3xl font-bold animate-pulse'>
                    Loading Details...
                </h1>
            </div>
        )
    }

    if (!blog) {
        return (
            <div className='text-center mt-20'>
                <h1 className='text-3xl font-bold'>
                    Blog Not Found 😢
                </h1>

                <Link
                    to="/blogs"
                    className='text-purple-500 underline mt-4 inline-block'
                >
                    Back to Blogs
                </Link>
            </div>
        )
    }

    return (
        <div className='max-w-4xl mx-auto px-6 py-12'>

            {/* Image */}
            <img
                src={`https://picsum.photos/800/400?random=${blog.id}`}
                alt={blog.title}
                className='w-full h-72 object-cover rounded-2xl mb-8'
            />

            {/* Content */}
            <h1 className='text-4xl font-bold mb-4'>
                {blog.title}
            </h1>

            <p className='text-gray-600 text-lg leading-7 mb-6'>
                {blog.description}
            </p>

            <div className='flex justify-between items-center'>

                <span className='text-sm text-gray-400'>
                    Free API Resource
                </span>

                <Link
                    to="/all-blogs"
                    className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full'
                >
                    Back
                </Link>

            </div>

        </div>
    )
}

export default BlogDetails