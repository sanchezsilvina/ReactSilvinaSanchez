import { createContext, useContext, useState } from "react";

 const CartContext=  createContext([]);

export const useCartContext= ()=>
{
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList]=useState([])

    function agregarAlCarrito(item){
        
        const Item=cartList.find(index => index.id===item.id)
        if (Item)
        {
            Item.cantidad=Item.cantidad + item.cantidad
        }
        else
        {
            setCartList([...cartList, item])
        }
      
        
    }

    return (
        <div>
                <CartContext.Provider value={{cartList, agregarAlCarrito}}>
                    {children}
                </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider

