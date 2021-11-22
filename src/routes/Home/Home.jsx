import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'

import Item from '../../components/Custom/Item/Item'

import '../Home/Home.style.scss'

const Home = () => {
    
    const { state } = useContext(ShopContext)
    //console.log(state.items)

    const entry = () => {
        if (state?.items) {
            const randomItems = state?.items.sort(() => Math.random() - Math.random()).slice(0, 5)
            //console.log(randomItems)
            return randomItems.map( (item, index) => (
                <Item
                key={index}
                id={item.id}
                image={item.image}
                price={item.price}
                />
                ))
        } else {
            return <><p>magic incoming</p></>
        }
    }


    // const test = state?.items.sort(() => Math.random() - Math.random()).slice(0, 5)

    return (
        <div className='homeView flex flex-col items-center'>
            <p className=''>banner</p>
            <div className='entryItems w-full inline-flex justify-evenly'>
                {entry()}
            </div>
            <Link className='' to="/products">click here</Link>
        </div>
    )
}

export default Home
