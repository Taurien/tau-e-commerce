import React, { createContext, useReducer, useState, useEffect } from 'react'

const ShopContext = createContext()

const initialState = {
    items: null,
    cart: [],
    totalpay: 0,
}

const reducer = (state, action ) => {
    switch (action.type) {
        case 'LOAD_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalpay: state.totalpay + action.payload.price
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                totalpay: state.totalpay - action.payload.price
            }
        default:
            return state
    }
}


const ShopProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        const callF = async () => {
            //setLoader(true)
            const API = `https://fakestoreapi.com/products`
            const response = await fetch(API)
            const result = await response.json()
            //console.log(result)
            dispatch({ type: 'LOAD_ITEMS', payload: result })
            //setLoader(false)
        }

        callF()

    }, [])

    const data = {
        state,
        dispatch
    }
    
    return (
        <ShopContext.Provider value={ data }>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopProvider }
export default ShopContext
