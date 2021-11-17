import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='inline-flex'>
            <h1>tau e.commerce</h1>
            <p>logo</p>
            <Link to="/tau-e-commerce">Home</Link>
            <Link to="/products">Store</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Header
