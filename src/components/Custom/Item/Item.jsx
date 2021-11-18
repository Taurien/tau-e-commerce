import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import ShopContext from '../../../context/ShopContext'

import '../Item/Item.style.scss'

const Item = (props) => {

    const location = useLocation()
    const { pathname } = location

    const { AddToCart, RemoveFromCart } = useContext(ShopContext)

    const AddOrRemoveItem = () => {
        console.log(pathname)
        if (pathname === "/products") {
          AddToCart(item);
        } else {
          RemoveFromCart(item);
        }
    }

    const {
        id,
        item,
        image,
        title,
        price,
        children
    } = props
    //console.log(item)

    return (
        <div className='itemcard flex flex-col'>
            {/*<img src={image} alt={title} />*/}
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={AddOrRemoveItem}>
                {pathname === '/products' ? 'Buy' : 'Delete Item'}
            </button>
        </div>
    )
}

export default Item
