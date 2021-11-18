import React, { useContext } from 'react'

import ShopContext from '../../context/ShopContext'

import '../Cart/Cart.style.scss'

const Cart = () => {

    const { cart, RemoveFromCart, totalpay } = useContext(ShopContext)
    console.log(cart)

    return (
        <div className='cartView flex flex-col'>
          <span className='self-center'>u have to pay: ${Math.floor(totalpay)} USD</span>
          <div className='productsCtn self-center grid'>
            {
                cart && cart.length > 0 ? (
                cart.map(item => (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <p>${item.price} USD</p>
                      <button onClick={() => RemoveFromCart(item)}>
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                    <p>Empty</p>
                )
            }
          </div>
        </div>
    )
}

export default Cart
