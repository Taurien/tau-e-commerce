import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../../context/ShopContext'

import logo from '../../../logo.svg'
import cartsvg from '../../../assets/cart.svg'


const Header = () => {

    const { state } = useContext(ShopContext)
    const [ scrolled, setScrolled ]= useState(false);
    
    const handleScroll= () => {
        const offset = window.scrollY;
        // console.log(offset)
        if(offset > 1 ) setScrolled(true);
        else setScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return (
        <nav className={`${scrolled && 'sticky top-0 left-0 z-10'} w-full inline-flex justify-between items-center bg-white px-4 py-2 border-b-2 border-blue-600 `}>
            <Link to="/tau-e-commerce">
                <div className='inline-flex items-center'>
                    <img className='w-10' src={logo} alt="Logo" />
                    <h1 className='font-bold'>Tau-Express</h1>
                </div>
            </Link>

            <ul className='inline-flex justify-between items-center font-semibold'>
                <li className='mr-3'><Link to="/tau-e-commerce">Home</Link></li>
                <li className='mr-3'><Link to="/products">Store</Link></li>
                <li className=''>
                    <Link className='block relative' to="/cart">
                        <img className=' w-6' src={cartsvg} alt="cart" />
                        {
                            state?.cart?.length > 0 && 
                            <span className='w-6 h-6 absolute bottom-3 left-2 bg-red-400 text-center rounded-full'>
                                {state.cart.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        }
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
