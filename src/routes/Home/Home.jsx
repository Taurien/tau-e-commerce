import React from 'react'
import { Link } from 'react-router-dom'

import '../Home/Home.style.scss'

const Home = () => {
    return (
        <div className='homeView flex flex-col'>
            <p className='self-center'>entrada</p>
            <Link className='self-center' to="/products">click here</Link>
        </div>
    )
}

export default Home
