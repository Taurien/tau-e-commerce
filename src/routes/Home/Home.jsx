import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'

import Banner from '../../assets/banner.jpg'
import Item from '../../components/Custom/Item/Item'
import Loader from '../../components/Custom/Loader/Loader'


const Home = () => {
    
    const { state } = useContext(ShopContext)
    //console.log(state.items)

    const Entry = () => {
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
        <div className='homeView w-full flex flex-col items-center'>
            <img className='banner desktop:w-5/12 w-9/12 my-4 rounded-lg overflow-hidden' src={Banner} alt="" />
            <div className={`entryItems desktop:w-8/12 w-11/12 p-4 ${state?.items === null? 'flex justify-center items-center' : 'grid desktop:grid-flow-col mobile:grid-cols-2 gap-3'} bg-blue-400 rounded-md`}>
                <Entry />
            </div>
            <Link className='my-2 px-3 py-1 font-bold rounded bg-blue-300' to="/products">See more</Link>
        </div>
    )
}

export default Home
