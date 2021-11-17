import React, { useState, useEffect } from 'react'

const Products = () => {

    const [items, setItems] = useState(null)


    useEffect(() => {
        
        const testx = async () => {
            const API = `https://fakestoreapi.com/products`
            const response = await fetch(API)
            const result = await response.json()
            setItems(result)
        }

        testx()
    }, [])
    
    return (
        <div>
            <h1>productos</h1>
            {
                items && <p>{items[0].title}</p>
            }
        </div>
    )
}

export default Products
