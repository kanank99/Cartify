'use client'

import { createContext, useContext, useState } from "react";


const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => useContext(CartContext);