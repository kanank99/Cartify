'use client'

import { createContext, useContext, useState } from "react";

const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => useContext(CartContext);