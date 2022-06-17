import React, { /*useState, useEffect*/ useContext } from 'react'

import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import Loader from '../../components/Custom/Loader/Loader'


const Products = () => {

    const { state } = useContext(ShopContext)
    //console.log(state)
    //console.log(state.items)
    const itemsExist = state.items?.length > 0
    
    return (
        <div className='productsView flex flex-col'>
            <div className={`productsCtn self-center w-11/12 ${!itemsExist ? 'flex items-center justify-center' : 'grid gap-4 grid-cols-2 desktop:grid-cols-4'}  my-8`}>
            {
                state && itemsExist ? (
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
                ) 
                : <Loader />
            }
            </div>
        </div>
    )
}

export default Products