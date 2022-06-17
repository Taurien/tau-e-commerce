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

    const Actions = () => {
        // console.log(pathname)
        return (
            <>
            <div className={`actions text-center ${quantity && 'w-14 flex flex-col overflow-hidden rounded-lg'}`}>
                {
                    quantity && 
                    <>
                        <button onClick={increaseItem} className=''>
                            <img src={Plus} alt='' />
                        </button>
                        <span className='py-1 border-r-2 border-l-2 border-black'>{quantity}</span>
                    </>
                }
                <button className='' onClick={AddOrRemoveItem}>
                    {
                        pathname === '/products'
                        ? 'Add to cart' 
                        : quantity === 1 ? <><img src={DeleteBin} alt='' /></> : <><img className='' src={Minus} alt=''/></> 
                    }
                </button>
            </div>
            </>
        )
    }

    return (
        <div className={`itemcard relative ${quantity ? 'p-2 inline-flex items-center' : 'flex flex-col justify-between'} bg-white rounded-md overflow-hidden`}>

            {
                quantity && pathname === '/checkout' && 
                <span className='absolute top-0 left-1 w-7 h-7 bg-red-400 text-white rounded-full flex items-center justify-center'>{quantity}</span>
            }

            {
                quantity && pathname === '/cart' && 
                <button onClick={deleteAllItem} >
                    <img src={xCircle} alt='' />
                </button>
            }
            <div className={`itemDetails
                    ${pathname !== '/cart' && 'h-full'}
                    ${quantity ? 'w-full inline-flex items-center justify-evenly' : 'p-3 flex flex-col'}
                    ${ (pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/' || pathname === '/products') && 'justify-between'}
                `}
            >
                <div className={`self-center
                        ${(pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/')
                            ? 'imgCtn h-4/6 flex items-center'
                            : pathname === '/products' && 'imgCtnProducts w-full h-40 flex items-center justify-center'}
                    `}
                >
                    <img className='w-16' src={image} alt={title} />
                </div>
                <p className={`${quantity && 'desktop:w-60 w-32'} font-medium italic`}>{title}</p>
                <p className={`${(pathname === '/tau-e-commerce' || pathname === '/tau-e-commerce/') && 'self-center'}`}>$ {price}</p>
            </div>

            {(pathname === '/cart' || pathname === '/products') && <Actions />}
        </div>
    )
}

export default Item
