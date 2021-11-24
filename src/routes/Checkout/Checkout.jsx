import React, { useContext } from 'react'
import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import payment from '../../assets/payment.png'

import '../Checkout/Checkout.style.scss'

const Checkout = () => {

    const { state } = useContext(ShopContext)
    // console.log(state?.totalpay)

    return (
        <div className="checkout flex flex-col items-center">
            <div className='m-8 flex flex-col'>
                {
                    state && state?.cart.length > 0 && (
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
                            ) 
                        }
            </div>
            <br />
            <span>TOTAL: $ {state?.totalpay.toFixed(2)} USD</span>
            <span>Payment Methods</span>
            <img src={payment} alt="" />
        </div>
    )
}

export default Checkout
