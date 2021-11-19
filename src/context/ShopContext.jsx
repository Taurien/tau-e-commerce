import React, { createContext, useReducer, useEffect } from 'react'

const ShopContext = createContext()

const initialState = {
    items: null,
    cart: [],
    totalpay: 0,
}

const reducer = (state, action ) => {
    
    const repeteadIndex = state.cart.findIndex(item => item.id === action.payload.id)
    
    switch (action.type) {
        case 'LOAD_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_TO_CART':
            if (!state.cart.find(item => item.id === action.payload.id)) { // Check if the selected item exist in cart
                //console.log('im not in the cart')
                state.cart.push({ // Add item to the cart and set quantity to 1 unit
                    ...action.payload,
                    quantity: 1
                })
                //console.log('now im in the cart')
            } else { //If it exists. Increase the quantity of it
                state.cart[repeteadIndex].quantity++;
            }
            return {
                ...state,
                cart: [...state.cart],
                totalpay: state.totalpay + action.payload.price
            }
        case 'DELETE_FROM_CART':
            if (action.payload.quantity === 1) { // If there's only one unit of the selected item in the cart. Remove completely from cart
                return {
                    ...state,
                    cart : state.cart.filter(item => item.id !== action.payload.id), // to erase it
                    totalpay: state.totalpay - action.payload.price
                } 
            } else if (action.payload.quantity > 1) { //If the quantity of the selected item is more than 1. Reduce it
                state.cart[repeteadIndex].quantity--
            }
            return {
                ...state,
                cart: [...state.cart],
                totalpay: state.totalpay - action.payload.price
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                totalpay: 0
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
