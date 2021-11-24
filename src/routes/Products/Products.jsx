import React, { /*useState, useEffect*/ useContext } from 'react'

import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import '../Products/Products.style.scss'

const Products = () => {

    const { state } = useContext(ShopContext)
    //console.log(state)
    //console.log(state.items)
    
    return (
        <div className='productsView flex flex-col'>
            <div className='productsCtn self-center grid'>
            {
                state && state.items?.length > 0 ? (
                    state.items.map( (item, index) => (
                        <Item
                        key={index}
                        item={item}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        />
                        ))
                        ) : (
                            <p>cargando</p>
                            )
            }
            </div>
        </div>
    )
}

export default Products