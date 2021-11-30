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
    const [cantTotal, setcantTotal]=useState(0)
    
    const clear=()=>
    {
        setCartList([])
        setcantTotal(0)
        setTotal(0)
        setcantidadAgregar(0)
    }

    const RemoveItem= (idItem)=>
    {
        const Item=cartList.find(index => index.id===idItem)
        if (Item)
        {
            setTotal(total -(Item.cantidad * Item.precio))
            setcantTotal(cantTotal-Item.cantidad)
            setCartList(cartList.filter(res=> res.id !==idItem ))
        }
    }
    
    const isInCart =(Id)=>
    {
        return cartList.find(index => index.id===Id)
    }

    const addItem= (item)=>{
        
        let Item=isInCart(item.id)
        if (Item)
        {   
            let cantAgregar= parseInt(Item.cantidad) + parseInt(item.cantidad)
            setcantidadAgregar(cantAgregar)
            if (cantAgregar > item.stock)
             {
                 alert('No hay Stock para la cantidad ingresada')   
             }  
             else
             {
                Item.cantidad=cantAgregar
                setTotal(total +(item.cantidad * item.precio))
                setcantTotal(cantTotal +item.cantidad)
             }
        }
        else
        {
                setCartList([...cartList, item])
                setTotal(total +(item.cantidad * item.precio))
                setcantTotal(cantTotal +item.cantidad)
        }
 
    }

    return (
        <div>
                <CartContext.Provider value={{cartList, addItem, total, clear, cantTotal, RemoveItem}}>
                    {children}
                </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider