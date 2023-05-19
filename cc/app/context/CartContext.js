'use client'

import { createContext, useContext, useState } from "react";

const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [lastProductVisited, setLastProductVisited] = useState('1');

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, cartItems, setCartItems, subtotal, setSubtotal, lastProductVisited, setLastProductVisited}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => useContext(CartContext);