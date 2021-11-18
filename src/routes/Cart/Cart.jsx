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
        <span className='self-center'>u have to pay: ${Math.floor(state?.totalpay)} USD</span>
        <div className='productsCtn self-center grid'>
          {/*
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
          */}
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
