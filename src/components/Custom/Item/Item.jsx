import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import ShopContext from '../../../context/ShopContext'

import Plus from '../../../assets/plus.svg'
import Minus from '../../../assets/minus.svg'
import xCircle from '../../../assets/x-circle.svg'
import DeleteBin from '../../../assets/icons8-delete-bin.svg'

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

    const { dispatch } = useContext(ShopContext)

    const AddOrRemoveItem = () => {
        //console.log(pathname)
        if (pathname === "/products") {
            dispatch({ type: 'ADD_TO_CART', payload: item })
        } else {
            dispatch({ type: 'DECREASE_N_DELETE_FROM_CART', payload: item })
        }
    }

    const increaseItem = () => {
        dispatch({ type: 'INCREASE_BY_ONE', payload: item })
    }

    const deleteAllItem = () => {
        dispatch({ type: 'DELETE_AT_ALL', payload: item })
    }

    const actions = () => {
        console.log(pathname)
        return (
            <>
            <div className={`actions ${quantity ? 'w-20 flex flex-col overflow-hidden rounded-lg' : '' }`}>
                {
                    quantity && <><button onClick={increaseItem} className='upBtn'><img src={Plus} alt='' /></button><span>{quantity}</span></>
                }
                <button className={`${quantity ? 'btBtn' : 'w-full' }`} onClick={AddOrRemoveItem}>
                    {
                        pathname === '/products' ? 'Add to cart' 
                        : quantity === 1 ? <><img src={DeleteBin} alt='' /></> : <><img src={Minus} alt='' /></> 
                    }
                </button>
            </div>
            </>
        )
    }
    // { width: "100%", marginLeft: "2.5%", marginTop: "1rem" }

    return (
        <div className={`itemcard ${quantity ? 'py-3 px-4 inline-flex items-center' : 'flex flex-col justify-between'}`} style={pathname === '/products' ? { height: "18rem"} : {}}>
            {
                quantity && <button onClick={deleteAllItem} ><img src={xCircle} alt='' /></button>
            }
            <div className={
                `itemDetails
                ${pathname !== '/cart' && 'h-full'} 
                ${quantity ? 'w-full inline-flex items-center justify-evenly' : 'p-3 flex flex-col'}
                ${(pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/') ? 'justify-center' :
                pathname === '/products' ? 'justify-between' : '' }
                `}
            >
                <div className='imgContainer self-center'>
                    <img src={image} alt={title} />
                </div>
                <p className={`${quantity ? 'test123' : ''}`}>{title}</p>
                <p className={`${(pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/') ? 'self-center' : ''}`}>$ {price}</p>
            </div>
            {
                pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/' ? null : actions()
            }
        </div>
    )
}

export default Item
