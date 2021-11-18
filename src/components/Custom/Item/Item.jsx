import React, { useContext } from 'react'

import ShopContext from '../../../context/ShopContext'

import '../Item/Item.style.scss'

const Item = (props) => {

    const { AddToCart } = useContext(ShopContext)

    const {
        id,
        image,
        title,
        description,
        price
    } = props
    //console.log(id)

    return (
        <div className='itemcard flex flex-col'>
            {/*<img src={image} alt={title} />*/}
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={() => AddToCart()}>Add o remove</button>
        </div>
    )
}

export default Item
