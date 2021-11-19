import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import ShopContext from '../../../context/ShopContext'

import '../Item/Item.style.scss'

const Item = (props) => {

    const location = useLocation()
    const { pathname } = location
    //console.log(pathname)

    const {
        id,
        item,
        image,
        title,
        price,
        quantity,
    } = props
    //console.log(item)

    const { state, dispatch } = useContext(ShopContext)

    const AddOrRemoveItem = () => {
        //console.log(pathname)
        if (pathname === "/products") {
            dispatch({ type: 'ADD_TO_CART', payload: item })
        } else {
            dispatch({ type: 'DELETE_FROM_CART', payload: item })
        }
    }

    // const cartView = () => {
    //     pathname === '/cart' ? 
    // }


    return (
        <div className='itemcard flex flex-col'>
            {/* <img src={image} alt={title} /> */}
            <p>{title}</p>
            <p>{price}</p>
            {
                quantity && <div className='inline-flex'><button>-</button><span>{quantity}</span><button>+</button></div>
            }
            <button onClick={AddOrRemoveItem}>
                {pathname === '/products' ? 'Buy' 
                : quantity === 1 ? 'Delete Item' : 'Reduce' }
            </button>
        </div>
    )
}

export default Item
