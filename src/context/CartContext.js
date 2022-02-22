//Context componente superior 
import React, { createContext, useState } from "react";
import tienda from "../json/json";

// 1 Creo el Context
export const CartContext = createContext([]);

// 2 Creo el componente provider
const CartProvider = ({children}) => {
    const [items, setItems] = useState ([])

    const inCart = (id) =>{

    }
    // funcion addtocart recibe la informacion de item y de cantidad
    const addItem = (item, qty) => {
        setItems([...items, {...item, qty: qty}]);
    }
        

    // 3 Retorno el CartContext que cree en la linea 4 con un .Provider con value que son accesibles
    // para toda la App
    return (
        <CartContext.Provider value = {{items, addItem,}}>
            {/* 4 Le paso props.children o children a CardContext.Provider */}
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;