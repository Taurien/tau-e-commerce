import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-col'>
            entrada
            <Link to="/products">click here</Link>
        </div>
    )
}

export default Home
