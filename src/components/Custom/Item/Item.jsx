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

    const increaseItem = () => {
        dispatch({ type: 'INCREASE_BY_ONE', payload: item })
    }

    // const itemCartView = () => {
    //     return (

    //     )
    // }


    return (
        <div className={`itemcard ${quantity ? 'py-3 px-4 inline-flex justify-between items-center' : 'flex flex-col'}`}>
            <div className={`itemDetails ${quantity ? 'w-full inline-flex items-center justify-evenly' : 'p-3 flex flex-col'}`}>
                <div className='imgContainer'>
                    <img src={image} alt={title} />
                </div>
                <p className={`${quantity ? 'test123' : ''}`}>{title}</p>
                <p>$ {price}</p>
            </div>
            <div className={`actions ${quantity ? 'flex flex-col w-20' : '' }`}>
                {
                    quantity && <><button onClick={increaseItem} className='upBtn'>+</button><span>{quantity}</span></>
                }
                <button className={`${quantity ? 'btBtn' : 'w-full' }`} onClick={AddOrRemoveItem}>
                    {pathname === '/products' ? 'Add to cart' 
                    : quantity === 1 ? 'Delete Item' : '-' }
                </button>
            </div>
        </div>
    )
}

export default Item
