import React, { useContext } from 'react'

import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import '../Cart/Cart.style.scss'

const Cart = () => {

  const { state, dispatch } = useContext(ShopContext)
  //console.log(state?.totalpay)
  //console.log(state?.cart)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'})
  }
  
  //console.log(state?.totalpay.toFixed(2));

  return (
      <div className='cartView flex flex-col'>
        <div className='self-center w-6/12 inline-flex justify-around'>
          <span>u have to pay: ${ state?.cart.length === 0 ? '0.00' : state?.totalpay.toFixed(2)} USD</span>
          {
            state?.cart.length > 0 && <span onClick={clearCart}>X</span>
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
      </div>
  )
}

export default Cart
