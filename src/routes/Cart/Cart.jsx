import React, { useContext } from 'react'

import ShopContext from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'

import Item from '../../components/Custom/Item/Item'

import Bin from '../../assets/icons8-trash.svg'

const Cart = () => {

  const { state, dispatch } = useContext(ShopContext)
  //console.log(state?.totalpay)
  //console.log(state?.cart)
  const navigate = useNavigate()

  const Checkout = () => {
    navigate({ pathname : '/checkout'})
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'})
  }
  
  return (
      <div className='cartView flex flex-col my-4'>
        <div className='summary self-center w-56 flex flex-col font-bold text-xl italic'>
          <h2 className='self-center'>Order Summary</h2>
          <div className='partialPrice inline-flex justify-around items-center'>
            <span>Total: ${ state?.cart.length === 0 ? '0.00' : state?.totalpay.toFixed(2)} USD</span>
            {
              state?.cart.length > 0 && 
              <button className=' w-8' onClick={clearCart}><img src={Bin} alt='' /></button>
            }
          </div>
        </div>
        <div className='productsCtn self-center w-11/12 desktop:w-1/2 grid grid-flow-row gap-4 my-4'>
          {
            state && state?.cart.length > 0 ? (
                state.cart.map( (item, index) => (
                    <Item
                    key={index}
                    item={item}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    />
              ))
            ) : (
                <span className='text-center'>Cart Empty</span>
            )
          }
        </div>
        {
          state?.cart.length > 0 && 
          <button onClick={Checkout} className='self-center py-4 px-8 text-xl text-white bg-red-500 rounded-full'>
            <b>BUY ({state.cart.reduce((total, item) => total + item.quantity, 0)})</b>
          </button>
        }
        
      </div>
  )
}

export default Cart
