import React, { useContext } from 'react'

import ShopContext from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom'

import Item from '../../components/Custom/Item/Item'

import Bin from '../../assets/icons8-trash.svg'

import '../Cart/Cart.style.scss'

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
  
  //console.log(state?.totalpay.toFixed(2));

  return (
      <div className='cartView flex flex-col'>
        <div className='partialPrice self-center w-6/12 inline-flex justify-around items-center'>
          <span>u have to pay: ${ state?.cart.length === 0 ? '0.00' : state?.totalpay.toFixed(2)} USD</span>
          {
            state?.cart.length > 0 && <button onClick={clearCart}><img src={Bin} alt='' /></button>
          }
        </div>
        <div className='productsCtn self-center grid'>
          {
            state && state?.cart.length > 0 ? (
                state.cart.map( (item, index) => (
                    <Item
                    key={index}
                    item={item}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    />
              ))
            ) : (
                <p>Empty</p>
            )
          }
        </div>
        {
          state?.cart.length > 0 && <button onClick={Checkout} className='self-center'>Checkout</button>
        }
        
      </div>
  )
}
//navigate({ pathname: `/user/${login}` })

export default Cart
