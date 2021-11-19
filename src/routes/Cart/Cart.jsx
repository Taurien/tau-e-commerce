import React, { useContext } from 'react'

import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import '../Cart/Cart.style.scss'

const Cart = () => {

  const { state } = useContext(ShopContext)
  //console.log(state?.totalpay)
  //console.log(state?.cart)

  return (
      <div className='cartView flex flex-col'>
        <span className='self-center'>u have to pay: ${state?.totalpay.toFixed(2)} USD</span>
        {
           state?.cart.length > 0 && <span>X</span>
        }
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
