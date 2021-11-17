import { createContext, useContext, useState } from "react";

const CartContext=  createContext([]);
 
export const useCartContext= ()=>
{
    return useContext(CartContext)
}


const CartContextProvider = ({children}) => {

    const [cartList, setCartList]=useState([])
    const [total, setTotal]=useState(0)
    const [cantidadAgregar, setcantidadAgregar]=useState(0)
    
    const clear=()=>
    {
        setCartList([])
    }

    const RemoveItem= (idItem)=>
    {
        const Item=cartList.find(index => index.id===idItem)
        var cantEliminar= parseInt(Item.cantidad) + parseInt(Item.cantidad)
        setTotal(total - cantEliminar)
        cartList.remove(index => index.id===idItem)
    }
    
    const isInCart =(Id)=>
    {
        console.log(Id)
        return cartList.find(index => index.id===Id)
    }

    const addItem= (item)=>{
        
        var Item=isInCart(parseInt(item.id))
        console.log(Item)
        if (Item)
        {   
            console.log(' encontro el item')
            var cantAgregar= parseInt(Item.cantidad) + parseInt(item.cantidad)
            setcantidadAgregar(cantAgregar)
            if (cantAgregar > item.stock)
             {
                 alert('No hay Stock para la cantidad ingresada')   
             }  
             else
             {
                Item.cantidad=cantAgregar
                setTotal(total +(item.cantidad * item.precio))
             }
        }
        else
        {
                setCartList([...cartList, item])
                setTotal(total +(item.cantidad * item.precio))
        }

        
    }


    return (
        <div>
                <CartContext.Provider value={{cartList, addItem, total, clear}}>
                    {children}
                </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider