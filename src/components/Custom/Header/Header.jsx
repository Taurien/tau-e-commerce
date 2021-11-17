import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../logo.svg'

import '../Header/Header.style.scss'

const Header = () => {
    return (
        <nav className='w-full inline-flex justify-between'>
            <div className='logo inline-flex items-center'>
                <Link to="/tau-e-commerce">
                    <img src={Logo} alt="Logo" />
                </Link>
                <h1>Tau-Express</h1>
            </div>
            <ul className='inline-flex'>
                <Link to="/tau-e-commerce">Home</Link>
                <Link to="/products">Store</Link>
                <Link to="/cart">Cart</Link>
            </ul>
        </nav>
    )
}

export default Header
