import React, { createContext } from 'react'

const ShopContext = createContext()

const ShopProvider = ({ children }) => {
    
    const data = {}
    
    return (
        <ShopContext.Provider value={ data }>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopProvider }
export default ShopContext
