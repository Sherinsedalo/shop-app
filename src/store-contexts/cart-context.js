 import { createContext } from "react";

 export const CartContext = createContext();

export const CartProvider = ({children,value}) => {
    return(
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    );
 };