import React, { createContext, useState, useEffect } from 'react'

const ShopContext = createContext()

const ShopProvider = ({ children }) => {

    const [items, setItems] = useState(null)
    const [cart, setCart] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [totalpay, setTotalPay] = useState(0)
    
    useEffect(() => {

        const callF = async () => {
            setItems(null)
            //setLoader(true)
            const API = `https://fakestoreapi.com/products`
            const response = await fetch(API)
            const result = await response.json()
            setItems(result)
            //setLoader(false)
        }

        callF()

    }, [])

    const AddToCart = item => {
        //console.log(item)
        setCart([...cart, item])
        setCartCounter(cartCounter + 1)
        setTotalPay(totalpay + item.price)
    }

    const RemoveFromCart = product => {
        //console.log(product)
        setCart(cart.filter(item => item.id !== product.id))
        setCartCounter(cartCounter - 1)
        setTotalPay(totalpay - product.price)
    }

    const data = {
        items,
        cart,
        cartCounter,
        totalpay,
        AddToCart,
        RemoveFromCart
    }
    
    return (
        <ShopContext.Provider value={ data }>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopProvider }
export default ShopContext
