import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../../context/ShopContext'

import logo from '../../../logo.svg'
import cartsvg from '../../../assets/cart.svg'

import '../Header/Header.style.scss'

const Header = () => {

    const { state } = useContext(ShopContext)
    //console.log(state)

    return (
        <nav className='w-full inline-flex justify-between items-center'>
            <div className='logo inline-flex items-center'>
                <Link to="/tau-e-commerce">
                    <img src={logo} alt="Logo" />
                </Link>
                <h1>Tau-Express</h1>
            </div>
            <ul className='menu inline-flex justify-between items-center'>
                <li><Link to="/tau-e-commerce">Home</Link></li>
                <li><Link to="/products">Store</Link></li>
                <li id='cartCounter'>
                    <Link to="/cart">
                        <img src={cartsvg} alt="cart" />
                        {
                            state?.cart?.length > 0 && <span>{state.cart.length}</span>
                        }
                    </Link></li>
            </ul>
        </nav>
    )
}

export default Header
