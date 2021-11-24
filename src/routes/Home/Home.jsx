import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'

import Banner from '../../assets/banner.jpg'
import Item from '../../components/Custom/Item/Item'
import Loader from '../../components/Custom/Loader/Loader'


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
            return <><Loader /></>
        }
    }

    return (
        <div className='homeView flex flex-col items-center'>
            <img className='banner' src={Banner} alt="" />
            <div className={`entryItems w-full inline-flex justify-evenly ${state?.items === null && 'items-center'}`}>
                {entry()}
            </div>
            <Link className='' to="/products">See more</Link>
        </div>
    )
}

export default Home
