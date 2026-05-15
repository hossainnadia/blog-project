import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <Blogs showLimit={true} />


        </>
    )
}

export default Home